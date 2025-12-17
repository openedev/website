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
npm run dev          # Start development server
npm run build        # Build for production
```

The website will be available at `http://localhost:5173`

## Blog Management - Quick Guide

### Admin Panel
Access the admin panel at: **`http://localhost:5173/admin/blog`**

#### Available Features:
- ✅ **Add Posts** - Create new blog posts with title, content, author, tags
- ✅ **Edit Posts** - Modify post order with drag-and-drop
- ✅ **Delete Posts** - Remove posts with confirmation
- ✅ **Save Changes** - Persist all changes to localStorage

### File Locations

**Blog Data & Functions:**
- Location: `src/data/blogData.ts`
- Manages: Post storage, CRUD operations, localStorage sync

**Admin Interface:**
- Location: `src/pages/AdminBlog.tsx`
- Features: Form, drag-and-drop reordering, post management

**Blog Display:**
- List View: `src/pages/Blog.tsx` → `/blog`
- Detail View: `src/pages/BlogPostPage.tsx` → `/blog/:slug`

**Routing:**
- Location: `src/App.tsx`
- Admin Route: `/admin/blog` → AdminBlog component

**Type Definitions:**
- Location: `src/types/blog.ts`
- Defines: BlogPost interface and related types

## How to Use the Admin Panel

### Adding a Post
1. Go to `http://localhost:5173/admin/blog`
2. Fill in the form:
   - **Title** - Post title (required)
   - **Excerpt** - Short summary shown in blog list (optional)
   - **Content** - Full post content - HTML supported (required)
   - **Image URL** - Featured image link (optional)
   - **Author** - Your name (required)
   - **Author Role** - Position/title (optional)
   - **Tags** - Comma-separated tags (e.g., "AI, Edge, ML")
   - **Category** - Events, Technology, Recognition, or Industry
3. Click **"Add Post"** button
4. See the post appear in the list on the right
5. Click **"Save Changes"** to persist to localStorage

### Reordering Posts
1. In the admin panel posts list (right side)
2. Click and drag any post using the grip handle (⋮ icon)
3. Drop to reorder
4. Click **"Save Changes"** to persist order

### Deleting Posts
1. Locate the post in the posts list
2. Click the trash icon (🗑️) on the right
3. Confirm deletion in popup
4. Click **"Save Changes"" to persist deletion

## Data Storage

**Default Storage:** Browser localStorage
- Key: `edgeble_blog_posts`
- Posts persist until browser cache is cleared
- Changes auto-save when "Save Changes" is clicked

**To Reset Data:**
Open browser console (F12) and run:
```javascript
localStorage.removeItem('edgeble_blog_posts')
```

## Project Structure

```
src/
├── pages/
│   ├── Blog.tsx              # Blog listing page (/blog)
│   ├── BlogPostPage.tsx      # Individual post view (/blog/:slug)
│   └── AdminBlog.tsx         # Admin management panel (/admin/blog)
├── data/
│   └── blogData.ts           # Blog CRUD functions & storage
├── types/
│   └── blog.ts               # TypeScript interfaces
└── App.tsx                   # Routing configuration
```

## Key Functions (src/data/blogData.ts)

| Function | Purpose |
|----------|----------|
| `sortPosts()` | Sort posts by order or date |
| `getPostBySlug()` | Get post by slug or ID |
| `addPost()` | Add new post |
| `deletePost()` | Delete post by ID |
| `updatePostOrder()` | Update manual post order |
| `saveBlogPostsToStorage()` | Save to localStorage |
| `loadBlogPostsFromStorage()` | Load from localStorage |

## Main Routes

| Path | Component | Purpose |
|------|-----------|----------|
| `/` | HomePage | Home page |
| `/blog` | Blog | Blog listing |
| `/blog/:slug` | BlogPostPage | Individual post |
| `/admin/blog` | AdminBlog | **Admin management** |

## Troubleshooting

**Posts not showing?**
- Check localStorage in DevTools (F12 → Application → Local Storage)
- Clear cache: `localStorage.removeItem('edgeble_blog_posts')`

**Changes not saving?**
- Make sure to click "Save Changes" button in admin panel
- Check browser console for errors (F12)

**Posts not reordering?**
- Use the grip handle (⋮) to drag posts
- Click "Save Changes" to persist

## Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Router** - Routing

## License

MIT License

---

**Built with ❤️ for content creators and developers**
