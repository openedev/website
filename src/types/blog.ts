export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  category: string;
  order: number | null;
  createdAt: string;
};

export type BlogPostCreateInput = Omit<BlogPost, 'id' | 'createdAt' | 'order'>;

export interface SortedBlogPost extends BlogPost {
  displayOrder: number;
}
