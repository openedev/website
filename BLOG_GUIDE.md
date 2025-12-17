# Blog Management Guide - Quick Reference

A quick reference guide for managing blog posts on the Edgeble website.

## 🚀 Quick Steps to Add a New Blog Post

### Step 1: Access the Admin Panel
1. Go to `http://localhost:5173/admin/blog` (when running locally)
2. You'll see a form on the left and a list of posts on the right

### Step 2: Fill in the Form

| Field | Description | Example |
|-------|-------------|----------|
| **Title** | Post headline | "Getting Started with Edge AI" |
| **Excerpt** | Short summary (optional) | "Learn how to deploy AI models on edge devices" |
| **Content** | Full post content (HTML supported) | `<p>Edge AI is...</p>` |
| **Image URL** | Link to featured image | `https://example.com/image.jpg` |
| **Author** | Your name | "John Doe" |
| **Tags** | Comma-separated topics | "AI, Edge Computing, ML" |

### Step 3: Add the Post
- Click **"Add Post"** button
- Post appears in the list on the right

### Step 4: Organize (Optional)
- **Drag posts** to reorder them
- Use the grip handle (⋮) on the left side of each post
- Drag-and-drop to set your preferred order

### Step 5: Save Changes
- Click **"Save Changes"** button
- Data is stored in browser's localStorage
- Success message appears on the page

## 📱 View Your Posts

### Blog Listing Page: `/blog`
- Shows all posts in a card layout
- Click "Sort by Date" to sort by publication date
- Click "Manual Order" to use your drag-and-drop ordering
- Click any post card to view the full post

### Individual Post Page: `/blog/:id`
- Full post content with featured image
- Shows author, date, and reading time
- Displays post tags
- Shows related posts (automatically matched by tags)
- Social sharing buttons (Twitter, LinkedIn)

## 🛠️ Blog Post Content Tips

### Formatting Your Content
Since content supports HTML, you can use:

```html
<!-- Paragraphs -->
<p>Your paragraph text here</p>

<!-- Headers -->
<h2>Subheading</h2>

<!-- Lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Code blocks -->
<pre><code>npm install
npm run dev</code></pre>

<!-- Bold and italic -->
<strong>Bold text</strong> and <em>italic text</em>

<!-- Links -->
<a href="https://example.com">Link text</a>
```

### Writing Good Excerpts
- Keep it under 150 characters
- Summarize the main topic
- Make it compelling to encourage clicks

### Choosing Featured Images
- Use high-quality images (at least 800x600px recommended)
- Keep file size reasonable (< 2MB)
- Use relevant, professional images
- Tip: Use unsplash.com or pexels.com for free images

### Tagging Strategy
- Use 2-5 relevant tags per post
- Use consistent naming ("Edge AI" not "edge-ai")
- Tags help readers find related posts
- Examples: "Machine Learning", "Edge Devices", "Python"

## ✅ Complete Example

### Form Inputs:
- **Title:** "Building Face Recognition on RK3588"
- **Excerpt:** "Step-by-step guide to implementing face detection using YOLO on edge devices"
- **Author:** "Akhil"
- **Image URL:** "https://images.unsplash.com/photo-1552820728-8ac41f1ce891"
- **Tags:** "Face Recognition, Edge AI, RK3588, YOLO"
- **Content:**
  ```html
  <p>The RK3588 is a powerful edge computing platform...</p>
  <h2>Getting Started</h2>
  <p>First, install the necessary dependencies...</p>
  <pre><code>pip install opencv-python torch</code></pre>
  <p>Then follow these steps...</p>
  ```

## 🔄 Editing & Managing Posts

### Reorder Posts
1. Go to `/admin/blog`
2. Hold and drag post by the grip icon
3. Drop in new position
4. Click "Save Changes"

### Delete a Post
1. Go to `/admin/blog`
2. Click trash icon (🗑️) on the post
3. Confirm deletion
4. Click "Save Changes"

### Can't Edit Existing Posts?
Currently, the admin panel supports:
- ✅ Add new posts
- ✅ Delete posts
- ✅ Reorder posts
- ❌ Edit existing posts

To edit, you'll need to:
1. Delete the post
2. Add a new post with updated content

(Full edit functionality coming soon!)

## 💾 Data Management

### Where is Data Stored?
- **Browser's localStorage**
- Persists until you clear browser cache
- Same data across page reloads

### Backup Your Posts
To backup your blog posts:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Paste and run:
   ```javascript
   const posts = JSON.parse(localStorage.getItem('blogData'))
   console.log(JSON.stringify(posts, null, 2))
   ```
4. Copy the output to a text file for backup

### Restore from Backup
1. Open browser DevTools (F12)
2. Go to Console tab
3. Paste and run:
   ```javascript
   localStorage.setItem('blogData', '[YOUR_BACKUP_JSON_HERE]')
   ```
4. Reload the page

## ⚠️ Important Notes

### Post Dates
- Automatically set to current date when created
- Currently cannot be manually changed
- Newest posts appear first when sorted by date

### Reading Time
- Automatically calculated (1 word ≈ 1/200 minute)
- Cannot be manually overridden
- Shown on post detail page

### Related Posts
- Automatically linked by matching tags
- Maximum 3 related posts shown
- Empty if no tagged posts exist

### Data Loss Prevention
- Always click "Save Changes" after modifications
- Make regular backups using the console method
- Don't use incognito/private browsing (data not persisted)

## 🐛 Troubleshooting

### Posts not appearing?
- Check that data was saved (look for success message)
- Refresh the browser
- Check localStorage: F12 → Application → Local Storage

### Changes disappeared?
- Cleared browser cache? Restore from backup
- Made changes but didn't click "Save"? You'll lose them
- Using incognito mode? Data won't persist

### Can't add posts?
- Check console for errors: F12 → Console
- Make sure title and content are not empty
- All required fields must be filled

### Image not loading?
- Verify URL is correct and accessible
- Try a different image URL from unsplash.com
- Check browser console for CORS errors

## 📞 Support

For more information, see:
- **Full Documentation:** See `README.md` in the root directory
- **Source Code:** Check `/src/pages/AdminBlog.tsx` for the admin panel code
- **Data Structure:** Check `/src/data/blogData.ts` for post schema

---

**Made for quick reference. Happy blogging! 📝**
