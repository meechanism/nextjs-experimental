import { notFound } from 'next/navigation';

import { getPostData, getSortedPostsData } from '@/lib/posts';
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id
  }));
}

export function generateMetadata({ params }: any) {
  const { postId } = params;
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post not found'
    };
  }
  return {
    title: post?.title
  };
}

const renderers = {
  p: (paragraph: any) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      const metastring = image.properties.alt;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
      const metaWidth = metastring.match(/{([^}]+)x/);
      const metaHeight = metastring.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : '768';
      const height = metaHeight ? metaHeight[1] : '432';
      const isPriority = metastring?.toLowerCase().match('{priority}');
      const hasCaption = metastring?.toLowerCase().includes('{caption:');
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

      return (
        <div className="postImgWrapper">
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
          />
          {hasCaption ? (
            <div className="caption" aria-label={caption}>
              {caption}
            </div>
          ) : null}
        </div>
      );
    }
    return <p>{paragraph.children}</p>;
  }
};

const PostPage = async ({ params }: any) => {
  const { postId } = params;

  // Deduped, NextJs already knows we requested this, so it's available to use
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, content } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
        <p>
          <Link href="/">&#8612; Back to home</Link>
        </p>
      </article>
    </main>
  );
};

export default PostPage;
