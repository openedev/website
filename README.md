# Edgeble Website - Blog Management System

A modern, full-featured blog management system built with React, TypeScript, and Tailwind CSS. Manage your blog posts through an intuitive admin interface with drag-and-drop reordering and automatic data persistence.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/akhil-0201/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The website will be available at `http://localhost:5173` (or the port shown in terminal)

## 📋 Blog System Overview

This website includes a complete blog management system with three main components:

### 1. **Blog Listing Page** (`/blog`)
- View all published blog posts in a card layout
- **Features:**
  - Sort by date (newest first) or manual order
  - Toggle between two sorting modes
  - Beautiful hover effects and transitions
  - Display post metadata (author, date, reading time)
  - Responsive design for mobile and desktop
  - Click any post to view full details

### 2. **Blog Post Detail Page** (`/blog/:id`)
- Full blog post with rich content
- **Features:**
  - Display post content with proper formatting
  - Show featured image
  - Display author, date, and reading time
  - Tags/categories for the post
  - Social media sharing buttons (Twitter, LinkedIn)
  - Related posts sidebar (automatically linked by tags)
  - Back button to return to blog list

### 3. **Admin Blog Manager** (`/admin/blog`)
- Complete admin interface for managing blog posts
- **Features:**
  - **Add New Posts:**
    - Title input
    - Excerpt (optional)
    - Full content editor
    - Featured image URL
    - Author name
    - Tags (comma-separated)
  - **Manage Existing Posts:**
    - View all posts in a list
    - Drag-and-drop reordering
    - Delete posts with confirmation
    - Save changes to persist data
  - Real-time validation and feedback
  - Success/error notifications

## 📝 How to Add/Update Blog Posts

### Option 1: Using the Admin Interface (Recommended)

1. **Navigate to Admin:** Open `/admin/blog` in your browser
2. **Fill the Form:**
   - **Title:** Enter your blog post title
   - **Excerpt:** Brief summary (appears in blog list)
   - **Content:** Full blog post content (supports HTML)
   - **Image URL:** Link to featured image
   - **Author:** Your name
   - **Tags:** Separate multiple tags with commas (e.g., "AI, Edge Computing, Machine Learning")
3. **Click "Add Post"** to add the post to the list
4. **Reorder Posts (Optional):**
   - Drag and drop posts to change order
   - Uses drag handle icon (⋮) on the left of each post
5. **Save Changes:** Click "Save Changes" button to persist data

### Option 2: Direct Data File Modification

If you prefer manual editing:

1. Edit `src/data/blogData.ts` directly
2. Add new post objects to the `posts` array:

```typescript
{
  id: 3,  // Unique ID (increment from last post)
  title: "Your Post Title",
  excerpt: "Brief summary shown in blog list",
  content: "Full HTML content of your post",
  image: "https://example.com/image.jpg",
  author: "Your Name",
  date: "2025-12-17",  // YYYY-MM-DD format
  readTime: "5 min read",
  tags: ["tag1", "tag2"],
}
```

3. Save the file - changes appear immediately on `/blog` page

## 💾 Data Storage

### Local Storage (Default)
- Blog posts are stored in browser's `localStorage`
- **Advantages:**
  - No backend required
  - Works offline
  - Fast load times
- **Data persists** until browser cache is cleared
- Changes made in admin panel are automatically saved

### To Clear Data:
```javascript
// Open browser console (F12) and run:
localStorage.clear()
```

## 🏗️ Project Structure

```
src/
├── pages/
│   ├── Blog.tsx           # Blog listing page
│   ├── BlogPostPage.tsx   # Individual post detail page
│   └── AdminBlog.tsx      # Admin management interface
├── types/
│   └── blog.ts            # TypeScript interfaces
├── data/
│   └── blogData.ts        # Blog posts data & localStorage management
├── hooks/
│   └── useBlogPosts.ts    # Custom hook for fetching posts
└── lib/
    └── blogUtils.ts       # Utility functions (sorting, formatting, etc.)
```

## 🎨 Styling

- **CSS Framework:** Tailwind CSS
- **UI Components:** Lucide React Icons
- **Color Scheme:** Dark theme with cyan accents
- **Responsive:** Mobile-first design

## 🔄 Workflow: Blog Updates Step-by-Step

### Adding a New Blog Post

1. Start dev server: `npm run dev`
2. Go to `http://localhost:5173/admin/blog`
3. Fill in post details in the left form
4. Click "Add Post"
5. (Optional) Drag to reorder posts
6. Click "Save Changes" - data stored in localStorage
7. View new post on `/blog` page
8. Click post to view full details on `/blog/:id`

### Editing Post Order

1. Go to `/admin/blog`
2. Drag posts using the grip icon
3. Click "Save Changes"
4. Order updates on blog listing page

### Deleting a Post

1. Go to `/admin/blog`
2. Click trash icon on the post
3. Confirm deletion
4. Click "Save Changes"

## 🔧 Key Functions

### Data Management
- `useBlogPosts()` - Get all blog posts
- `sortPostsByDate()` - Sort posts by date (newest first)
- `extractExcerpt()` - Generate excerpt from content
- `getReadingTime()` - Calculate reading time
- `truncateText()` - Truncate text with ellipsis

### Data Persistence
- `saveBlogData()` - Save posts to localStorage
- `loadBlogData()` - Load posts from localStorage

## 📱 Features at a Glance

✅ **Blog Listing**
- Sort by date or manual order
- Card-based layout
- Post metadata display
- Responsive design

✅ **Individual Posts**
- Full content display
- Related posts sidebar
- Social sharing
- Navigation

✅ **Admin Panel**
- Drag-and-drop reordering
- Form validation
- Success/error notifications
- Local data persistence

✅ **User Experience**
- Smooth transitions and animations
- Dark theme with good contrast
- Intuitive UI
- Fast load times

## 🐛 Troubleshooting

### Posts not appearing?
- Check if data is in localStorage: Open DevTools → Application → Local Storage
- Try clearing cache: `localStorage.clear()` in console
- Ensure posts have unique IDs

### Changes not saving?
- Click "Save Changes" button in admin panel
- Check browser console for errors
- Ensure JavaScript is enabled

### Import errors when running?
- Run `npm install` to ensure all dependencies are installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 🚀 Future Enhancements

- Backend API integration for persistent storage
- Search and filter functionality
- Categories/taxonomy system
- Comments section
- SEO optimization
- Markdown support
- Image upload functionality
- Export to static site

## 📄 License

MIT License - feel free to use this for your projects

## 💡 Tips

- Use HTML in post content for better formatting
- Include relevant tags for better post discovery
- Keep reading time estimates accurate
- Use high-quality images for featured images
- Test posts on mobile before publishing

---

**Built with ❤️ for content creators and developers**
