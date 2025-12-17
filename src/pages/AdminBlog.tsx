import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Save, GripVertica, Edit, Xl } from 'lucide-react';
import { blogPostsData, sortPosts, addPost, updatePost, deletePost, updatePostOrder, saveBlogPostsToStorage, loadBlogPostsFromStorage } from '../data/blogData';
import { BlogPost } from '../types/blog';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AdminBlog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    authorRole: '',
    tags: '',
    category: '',
  });
  const [draggedId, setDraggedId] = useState<string | null>(null);;
 const [editingId, setEditingId] = useState<string | null>(null)
  const [message, setMessage] = useState({ type: '', text: '' });

  // Load posts on component mount
  useEffect(() => {
    loadBlogPostsFromStorage();
    setPosts(sortPosts(blogPostsData));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateSlug = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  };

  const handleAddPost = () => {
    if (!formData.title || !formData.content || !formData.author) {
      setMessage({ type: 'error', text: 'Title, content, and author are required' });
      return;
    }

    addPost({
      title: formData.title,
      slug: generateSlug(formData.title),
      excerpt: formData.excerpt || formData.title,
      content: formData.content,
      author: formData.author,
      authorRole: formData.authorRole || '',
      date: new Date().toISOString().split('T')[0],
      readTime: '3 min read',
      image: formData.image || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : [],
      category: formData.category || 'Events',
      authorImage: '/images/default.jpg',
    });

    saveBlogPostsToStorage();
    setPosts(sortPosts(blogPostsData));
    setFormData({ title: '', excerpt: '', content: '', image: '', author: '', authorRole: '', tags: '', category: '' });
    setMessage({ type: 'success', text: 'Post added successfully!' });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
      saveBlogPostsToStorage();
      setPosts(sortPosts(blogPostsData));
      setMessage({ type: 'success', text: 'Post deleted successfully!' });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    }
  };

 const handleEditPost = (post: BlogPost) => {
 setEditingId(post.id);
 setFormData({
 title: post.title,
 excerpt: post.excerpt,
 content: post.content,
 image: post.image,
 author: post.author,
 authorRole: post.authorRole,
 tags: post.tags.join(', '),
 category: post.category
 });
 };

 const handleUpdatePost = () => {
 if (!editingId || !formData.title || !formData.content || !formData.author) {
 setMessage({ type: 'error', text: 'Title, content, and author are required' });
 return;
 }
 updatePost(editingId, {
 title: formData.title,
 slug: generateSlug(formData.title),
 excerpt: formData.excerpt || formData.title,
 content: formData.content,
 author: formData.author,
 authorRole: formData.authorRole || '',
 image: formData.image || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
 tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : [],
 category: formData.category || 'Events',
 });
 saveBlogPostsToStorage();
 setPosts(sortPosts(blogPostsData));
 setEditingId(null);
 setFormData({ title: '', excerpt: '', content: '', image: '', author: '', authorRole: '', tags: '', category: '' });
 setMessage({ type: 'success', text: 'Post updated successfully!' });
 setTimeout(() => setMessage({ type: '', text: '' }), 3000);
 };


  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (id: string) => {
    if (draggedId && draggedId !== id) {
      const draggedIndex = posts.findIndex(p => p.id === draggedId);
      const dropIndex = posts.findIndex(p => p.id === id);
      const newPosts = [...posts];
      [newPosts[draggedIndex], newPosts[dropIndex]] = [newPosts[dropIndex], newPosts[draggedIndex]];
      setPosts(newPosts);
    }
    setDraggedId(null);
  };

  const handleSaveChanges = () => {
    const orderedIds = posts.map(p => p.id);
    orderedIds.forEach((id, index) => {
      const post = blogPostsData.find(p => p.id === id);
      if (post) post.order = index;
    });
    saveBlogPostsToStorage();
    setPosts(sortPosts(blogPostsData));
    setMessage({ type: 'success', text: 'Changes saved successfully!' });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog Management</h1>

        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Form Section */}
          <div className="lg:col-span-1 bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Add New Post</h2>
            <div className="space-y-4">
              <input type="text" name="title" placeholder="Post Title" value={formData.title} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
              <input type="text" name="excerpt" placeholder="Excerpt" value={formData.excerpt} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
              <textarea name="content" placeholder="Content (HTML supported)" value={formData.content} onChange={handleInputChange} rows={5} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white resize-none" />
              <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
              <input type="text" name="author" placeholder="Author Name" value={formData.author} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
              <input type="text" name="authorRole" placeholder="Author Role" value={formData.authorRole} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
              <input type="text" name="tags" placeholder="Tags (comma-separated)" value={formData.tags} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
              <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white">
                <option value="">Select Category</option>
                <option value="Events">Events</option>
                <option value="Technology">Technology</option>
                <option value="Recognition">Recognition</option>
                <option value="Industry">Industry</option>
              </select>
              <button onClick={editingId ? handleUpdatePost : handleAddPost} className="w-full bg-white text-black py-2 rounded-lg hover:bg-white/90 font-semibold flex items-center justify-center gap-2">
                           {editingId ? '✏️ Update Post' : (<><Plus className="w-4 h-4" /> Add Post</>)}
                           </button>
              </button>
            </div>
          </div>

          {/* Posts List Section */}
          <div className="lg:col-span-2 bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Posts ({posts.length})</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {posts.length === 0 ? (
                <p className="text-white/50">No posts yet. Create your first post!</p>
              ) : (
                posts.map((post) => (
                  <div key={post.id} draggable onDragStart={() => handleDragStart(post.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(post.id)} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/15 cursor-move transition-colors">
                    <GripVertical className="w-4 h-4 text-white/50 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white truncate">{post.title}</p>
                      <p className="text-sm text-white/50 truncate">{post.author}</p>
                    </div>
                    <button onClick={() => handleDeletePost(post.id)} className="text-red-400 hover:text-red-300 flex-shrink-0">
             {editingId === post.id && (
               <button onClick={() => { setEditingId(null); setFormData({ title: '', excerpt: '', content: '', image: '', author: '', authorRole: '', tags: '', category: '' }); }} className="text-gray-400 hover:text-gray-300">
                 <X className="w-4 h-4" />
               </button>
             )}
             <button onClick={() => handleEditPost(post)} className="text-blue-400 hover:text-blue-300">
               <Edit className="w-4 h-4" />
             </button>
                  </div>
                ))
              )}
            </div>
            <button onClick={handleSaveChanges} className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center gap-2">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminBlog;
