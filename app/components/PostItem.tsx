import { getHipDate } from '@/lib/getFormattedDate';
import Link from 'next/link';

import Tags from './Tags';

type Props = {
  post: BlogPost;
};

export default function PostItem({ post }: Props) {
  const { id, title, date, tags, featuredImage } = post;
  const formattedDate = getHipDate(date);
  return (
    <li key={id}>
      <Link className="no-underline flex mb-2" href={`/posts/${id}`}>
        <div className="w-full py-4">
          <p className="font-mono text-gray-400 text-sm">{formattedDate}</p>
          <h3 className="font-bold leading-8 tracking-tight m-0 p-0 text-slate-700 text-lg md:text-2xl">
            {title}
          </h3>
          <p>{post.blurb}</p>
          <Tags tags={tags} classes="mt-4" nolabel />
        </div>
      </Link>
    </li>
  );
}
