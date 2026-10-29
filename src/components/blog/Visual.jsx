// Inline SVG figure for blog posts. The SVG text stays in the HTML, so search
// engines and LLM crawlers can read the diagram; no image bytes are downloaded.
export default function Visual({ svg, caption, alt, className = '' }) {
  return (
    <figure className={`my-14 lg:my-16 ${className}`}>
      <div
        className="border border-white/[0.08] bg-black overflow-hidden"
        role="img"
        aria-label={alt || caption}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="mt-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
