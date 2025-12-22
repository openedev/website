export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime?: string;
  image: string;
  category: string;
  tags?: string[]; 
}
