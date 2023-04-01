export default function Tags({ tags }: any) {
  if (undefined === tags) return <></>;
  return (
    <div className="ml-4">
      <span className="pr-2 text-sm">Tags:</span>
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
