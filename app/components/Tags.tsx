export default function Tags({ tags, classes, nolabel = false }: any) {
  if (undefined === tags) return <></>;
  return (
    <div className={classes}>
      {!nolabel && <span className="pr-2 text-sm">Tags:</span>}
      {tags.map((tag: string) => (
        <span
          key={`tag-${tag}`}
          className="rounded bg-slate-200 text-slate-700 px-4 py-1 mr-2 text-sm">
          {tag}
        </span>
      ))}
    </div>
  );
}
