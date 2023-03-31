// Keys are the same as the ones found in posts frontmatter
type BlogPost = {
  // id will be filename
  id: string;
  title: string;
  date: string;
  blurb: string;
  tags?: string[];
  project: string;
  featuredImage: string;
};
