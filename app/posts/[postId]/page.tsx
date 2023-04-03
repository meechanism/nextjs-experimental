import { notFound } from 'next/navigation';

import { getPostData, getSortedPostsData } from '@/lib/posts';
import { getFormattedDate } from '@/lib/getFormattedDate';
import Link from 'next/link';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PageSection from '@/app/components/PageSection';
import Tags from '@/app/components/Tags';

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id
  }));
}

export async function generateMetadata({ params }: any) {
  const { postId } = params;
  const posts = await getSortedPostsData();

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

const PostPage = async ({ params }: any) => {
  const { postId } = params;

  // Deduped, NextJs already knows we requested this, so it's available to use
  const posts = await getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, content, tags } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  const renderers = {
    p: (paragraph: any) => {
      const { node } = paragraph;

      // images come wrapped in a p. This helper removes it.
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

        // Cleaning mee's old md files
        const cleanedImgSrc = image.properties.src.replace('./', '');
        return (
          <div className="flex flex-col justify-center items-center ">
            <div>
              <Image
                src={`/images/posts/${postId}/${cleanedImgSrc}`}
                width={width}
                height={height}
                className="rounded my-2"
                alt={alt}
                priority={isPriority}
              />
            </div>
            {hasCaption ? (
              // Captions sometimes have links for credit
              <div
                className="text-sm text-center"
                aria-label={caption}
                dangerouslySetInnerHTML={{ __html: caption }}
              />
            ) : null}
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    }
  };

  return (
    <PageSection>
      <article className="prose prose-xl prose-slate mx-auto">
        <header className="mb-8 md:mb-24">
          <h1 className="text-xl md:text-3xl mb-0">{title}</h1>
          <p className="mt-0">{pubDate}</p>
        </header>

        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>

        <div className="flex justify-between mt-24">
          <Link
            href="/"
            className="mt-3 text-sm no-underline hover:text-red-500">
            &#8612; Back to home
          </Link>
          <Tags tags={tags} classes={'ml-4'} />
        </div>
      </article>
    </PageSection>
  );
};

export default PostPage;
