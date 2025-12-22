import { blogPostsData } from "./blogData";
import { NEW_BLOGS } from "./blogs";
import { BlogPost } from "./blogTypes";

export const ALL_BLOGS: BlogPost[] = [
  ...blogPostsData,
  ...NEW_BLOGS,
].sort((a, b) => +new Date(b.date) - +new Date(a.date));
