# Edgeble Website - Blog Management System

A modern blog management system built with React, TypeScript, and Tailwind CSS.

## Quick Start

### Installation

```bash
git clone https://github.com/akhil-0201/website.git
cd website
npm install
```

### Running

```bash
npm run dev     # Start development server
npm run build   # Build for production
```

The website will be available at `http://localhost:5173`

## Blog Management

### Access Admin Panel

Go to: **`http://localhost:5173/admin/blog`**

### Features

- ✅ **Add Posts** - Create new blog posts
- ✅ **Edit Posts** - Modify existing posts
- ✅ **Delete Posts** - Remove posts with confirmation
- ✅ **Reorder Posts** - Drag and drop to reorder
- ✅ **Save Changes** - Persist all changes to localStorage

## File Structure

### Blog Management Files

| File | Location | Purpose |
|------|----------|----------|
| Blog Data | `src/data/blogData.ts` | CRUD operations, localStorage management |
| Admin UI | `src/pages/AdminBlog.tsx` | Admin panel interface |
| Blog List | `src/pages/Blog.tsx` | Display all blog posts |
| Post Detail | `src/pages/BlogPostPage.tsx` | Display single post |
| Types | `src/types/blog.ts` | TypeScript interfaces |
| Routing | `src/App.tsx` | Route configuration |

## How to Use Admin Panel

### Adding a New Post

1. Navigate to `http://localhost:5173/admin/blog`
2. Fill in the form on the left:
   - **Title** (required) - Post title
   - **Excerpt** (optional) - Short summary
   - **Content** (required) - Full HTML content
   - **Image URL** (optional) - Featured image link
   - **Author** (required) - Author name
   - **Author Role** (optional) - Position/title
   - **Tags** (optional) - Comma-separated (e.g., "AI, Edge, ML")
   - **Category** (optional) - Events, Technology, Recognition, Industry
3. Click **Add Post** button
4. Post appears in the list on the right
5. Click **Save Changes** to persist to localStorage

### Editing a Post

1. Find the post in the list
2. Click the **edit icon** (pencil)
3. Modify fields as needed
4. Click **Update Post**
5. Click **Save Changes** to save

### Deleting a Post

1. Find the post in the list
2. Click the **delete icon** (trash)
3. Confirm deletion in popup
4. Click **Save Changes** to persist deletion

### Reordering Posts

1. In the posts list, hover over any post
2. Click and drag using the **grip handle** (≡)
3. Drop at new position
4. Click **Save Changes** to save order

## Data Storage

**Default Storage:** Browser localStorage
- **Key:** `edgeble_blog_posts`
- Posts persist until browser cache is cleared
- Changes auto-save when "Save Changes" button is clicked

**To Reset Data:**
Open browser console (F12) and run:
```javascript
localStorage.removeItem('edgeble_blog_posts')
```

## Key Functions

**In `src/data/blogData.ts`:**

- `addPost(post)` - Add new post
- `updatePost(id, updates)` - Update existing post
- `deletePost(id)` - Delete post by ID
- `sortPosts(posts)` - Sort posts by order or date
- `getPostBySlug(slug)` - Get post by slug
- `saveBlogPostsToStorage()` - Save to localStorage
- `loadBlogPostsFromStorage()` - Load from localStorage

## Routes

| Route | Component | Purpose |
|-------|-----------|----------|
| `/` | HomePage | Home page |
| `/blog` | Blog | Blog listing |
| `/blog/:slug` | BlogPostPage | Individual post |
| `/admin/blog` | AdminBlog | Admin panel |

## Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Router** - Routing

## License

MIT License

**Built with ❤️ for content creators and developers**
