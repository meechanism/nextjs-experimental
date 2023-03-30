import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';

const POSTS_DIR_NAME = 'posts';

/**
 * NextJs expects blog/post images to be in the public /images folder, but
 * I want to colocate images with their markdown files in source.
 *
 * This script will run pre-build and move images to the correct location.
 *
 * The .gitignore file as accounted for these extra assets.
 *
 * New folder for these images: /public/images/posts
 */

const fsPromises = fs.promises;
const targetDir = `./public/images/${POSTS_DIR_NAME}`;
const postsDir = `./${POSTS_DIR_NAME}`;

/**
 * Avoid two images with the same name clashing. Store them in their own folders.
 * Just like each blog post goes into its own folder, the images inside public should too.
 */
async function createPostImageFoldersForCopy() {
  // Get every post folder: post-one, post-two etc.
  const postSlugs = await fsPromises.readdir(postsDir);

  for (const slug of postSlugs) {
    const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

    // Read all files inside current post folder
    const postDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`);

    // Filter out files with allowed file extension (images)
    const images = postDirFiles.filter((file) =>
      allowedImageFileExtensions.includes(path.extname(file))
    );

    if (images.length) {
      // Create a folder for images of this post inside public
      await fsPromises.mkdir(`${targetDir}/${slug}`);

      await copyImagesToPublic(images, slug); // TODO
    }
  }
}

/**
 * Copy images to /public.
 * Goes over all given images from a specific blog post and copies them into
 * their own folder inside public.
 * @param {*} images
 * @param {*} slug
 */
async function copyImagesToPublic(images, slug) {
  for (const image of images) {
    await fsPromises.copyFile(
      `${postsDir}/${slug}/${image}`,
      `${targetDir}/${slug}/${image}`
    );
  }
}

// If the target directory doesn’t exist, it will create the folder structure of the given path
// If the directory exists, it will delete everything it contains
await fsExtra.emptyDir(targetDir);
await createPostImageFoldersForCopy();
