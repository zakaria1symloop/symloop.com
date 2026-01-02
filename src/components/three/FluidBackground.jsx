"use client";
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Fluid shader material - runs entirely on GPU, minimal CPU usage
const FluidShaderMaterial = () => {
  const materialRef = useRef();
  const { size } = useThree();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  }), [size.width, size.height]);

  // Update resolution on resize
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
    }
  }, [size.width, size.height]);

  useFrame((state) => {
    if (materialRef.current) {
      // Slow time progression for smooth, calm effect
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.15;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    // Simplex noise function (optimized)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                         -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m; m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    // Fractal Brownian Motion for organic look
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      for (int i = 0; i < 4; i++) {
        value += amplitude * snoise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
      }
      return value;
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / uResolution.y;
      uv.x *= aspect;

      // Create flowing noise layers
      float noise1 = fbm(uv * 1.5 + uTime * 0.3);
      float noise2 = fbm(uv * 2.0 - uTime * 0.2 + vec2(5.0, 3.0));
      float noise3 = fbm(uv * 0.8 + uTime * 0.1 + vec2(10.0, 7.0));

      // Combine noise layers
      float combined = (noise1 + noise2 * 0.5 + noise3 * 0.25) / 1.75;

      // Vibrant color palette - clearly visible
      vec3 deepBlue = vec3(0.05, 0.08, 0.18);      // Deep blue base
      vec3 purple = vec3(0.18, 0.08, 0.28);        // Rich purple
      vec3 violet = vec3(0.25, 0.12, 0.35);        // Violet accent
      vec3 magenta = vec3(0.30, 0.10, 0.30);       // Magenta glow
      vec3 cyan = vec3(0.08, 0.18, 0.28);          // Cyan accent

      // Dynamic color mixing based on noise
      vec3 color = mix(deepBlue, purple, smoothstep(-0.5, 0.0, combined));
      color = mix(color, violet, smoothstep(0.0, 0.3, combined));
      color = mix(color, magenta, smoothstep(0.3, 0.6, combined) * 0.8);

      // Add cyan highlights in different areas
      float cyanMix = snoise(uv * 2.0 - uTime * 0.2);
      color = mix(color, cyan, smoothstep(0.2, 0.6, cyanMix) * 0.4);

      // Bright glow spots
      float glow = smoothstep(0.25, 0.65, combined) * 0.5;
      color += vec3(glow * 0.3, glow * 0.2, glow * 0.6);

      // Subtle vignette
      vec2 center = vUv - 0.5;
      float vignette = 1.0 - dot(center, center) * 0.25;
      color *= vignette;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

// Main scene component
const FluidScene = () => {
  return (
    <FluidShaderMaterial />
  );
};

// Canvas wrapper with performance optimizations
export default function FluidBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "low-power",
          stencil: false,
          depth: false,
        }}
        dpr={[0.5, 1]} // Lower resolution for performance
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'black' }}
        frameloop="always"
      >
        <FluidScene />
      </Canvas>
    </div>
  );
}
