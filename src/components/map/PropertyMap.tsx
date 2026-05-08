type PropertyMapProps = Record<string, unknown>;

export function PropertyMap(props: PropertyMapProps) {
  return (
    <article className="rounded border border-charcoal-black/10 bg-brick-white p-4 shadow-subtle-line">
      <h3 className="font-serif-jp text-lg text-charcoal-black mb-2">
        PropertyMap
      </h3>
      <pre className="text-xs text-rust-iron whitespace-pre-wrap break-words">
        {JSON.stringify(props, null, 2)}
      </pre>
    </article>
  );
}

export default PropertyMap;
