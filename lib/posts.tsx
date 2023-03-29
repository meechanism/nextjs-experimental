import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((filename) => {
    // remove .md from filename
    const id = filename.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date
    };
    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullpath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullpath, 'utf-8');

  // Use gray-matter to parse post
  const matterResult = matter(fileContents);

  const blogPostWithHTML: BlogPost & { content: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content
  };

  // combine data w/ the id
  return blogPostWithHTML;
}
