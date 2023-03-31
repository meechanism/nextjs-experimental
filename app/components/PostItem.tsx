import { getHipDate } from '@/lib/getFormattedDate';
import Link from 'next/link';
import P from './P';

type Props = {
  post: BlogPost;
};

export default function PostItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getHipDate(date);
  return (
    <li className="flex space-x-6" key={id}>
      <p className="font-mono text-gray-500 text-sm md:text-2xl">
        {formattedDate}
      </p>

      <span className="w-0 h-0.5 bg-gray-300 md:mt-12 md:w-28"></span>

      <div className="">
        <Link className="no-underline" href={`/posts/${id}`}>
          <p className="m-0 p-0 text-slate-800  text-sm md:text-2xl">{title}</p>

          <P>{post.blurb}</P>
        </Link>
      </div>
    </li>
  );
}
