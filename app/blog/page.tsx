/**
 * Root path to website
 */
import { getSortedPostsData } from '@/lib/posts';
import PostItem from '../components/PostItem';
import PageSection from '../components/PageSection';

export default async function Blog() {
  const posts = await getSortedPostsData();
  return (
    <PageSection>
      <h1 className="text-5xl mb-8 text-slate-800">Blog</h1>
      <ul>
        {posts.map((post) => (
          <PostItem key={`post-${post.id}`} post={post} />
        ))}
      </ul>
    </PageSection>
  );
}
