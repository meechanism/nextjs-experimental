import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { POSTS_DIR_NAME } from '../config/posts';

const fsPromises = fs.promises;

const postsDirectory = path.join(process.cwd(), POSTS_DIR_NAME);

/**
 * Go through all our directories in /posts to build our post list
 * @returns list of BlogPost
 */
export async function getSortedPostsData() {
  const postSlugs = (await fsPromises.readdir(POSTS_DIR_NAME)).filter(
    (s) => s !== '.DS_Store'
  );

  // Go through all our post dirs (slugs) to collect post data
  const allPostsData = postSlugs.map((currDir) => {
    let fileContents;
    try {
      // Read markdown file as string
      const fullPath = path.join(`${postsDirectory}/${currDir}`, 'index.md');
      fileContents = fs.readFileSync(fullPath, 'utf-8');
    } catch (e) {
      throw Error(`Post is missing index.md file in directory "${currDir}"`);
    }

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id: currDir,
      title: matterResult.data.title,
      date: matterResult.data.date,
      blurb: matterResult.data.blurb,
      tags: matterResult.data.tags,
      project: matterResult.data.project,
      featuredImage: matterResult.data.featuredImage
    };
    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 *
 * @param id Provided a post slug, pull the content of the post markdown file
 * @returns
 */
export async function getPostData(id: string) {
  const fullpath = path.join(`${postsDirectory}/${id}`, 'index.md');
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
