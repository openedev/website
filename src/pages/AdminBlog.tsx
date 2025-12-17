import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { blogPostsData, addPost, sortPosts } from '../data/blogData';
import { BlogPost } from '../types/blog';

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(sortPosts(blogPostsData));
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    authorRole: '',
    authorImage: '',
    date: '',
    readTime: '',
    image: '',
    tags: [],
    category: '',
    slug: ''
  });

  const handleAddPost = () => {
    if (formData.title && formData.excerpt && formData.content) {
      addPost({
        title: formData.title!,
        excerpt: formData.excerpt!,
        content: formData.content!,
        author: formData.author || 'Admin',
        authorRole: formData.authorRole || 'Editor',
        authorImage: formData.authorImage || '/images/default.jpg',
        date: formData.date || new Date().toISOString().split('T')[0],
        readTime: formData.readTime || '5 min read',
        image: formData.image || '/images/default.jpg',
        tags: formData.tags || [],
        category: formData.category || 'General',
        slug: formData.slug || formData.title!.toLowerCase().replace(/\s+/g, '-')
      });
      setPosts(sortPosts(blogPostsData));
      setIsAdding(false);
      resetForm();
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({ ...post });
  };

  const handleUpdatePost = () => {
    if (editingPost && formData.title && formData.excerpt && formData.content) {
      // Update logic would need to be added to blogData.ts
      // For now, we'll just reset
      setEditingPost(null);
      resetForm();
    }
  };

  const handleDeletePost = (id: string) => {
    // Delete logic would need to be added
    setPosts(posts.filter(p => p.id !== id));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      authorRole: '',
      authorImage: '',
      date: '',
      readTime: '',
      image: '',
      tags: [],
      category: '',
      slug: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Admin</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Add New Post
          </button>
        </div>

        {(isAdding || editingPost) && (
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editingPost ? 'Edit Post' : 'Add New Post'}
              </h2>
              <button
                onClick={() => {
                  setIsAdding(false);
                  setEditingPost(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 bg-gray-700 rounded"
              />
              <input
                type="text"
                placeholder="Excerpt"
                value={formData.excerpt || ''}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full p-2 bg-gray-700 rounded"
              />
              <textarea
                placeholder="Content (HTML)"
                value={formData.content || ''}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full p-4 bg-gray-700 rounded h-32"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Author"
                  value={formData.author || ''}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="p-2 bg-gray-700 rounded"
                />
                <input
                  type="text"
                  placeholder="Author Role"
                  value={formData.authorRole || ''}
                  onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                  className="p-2 bg-gray-700 rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="p-2 bg-gray-700 rounded"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={formData.category || ''}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="p-2 bg-gray-700 rounded"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={editingPost ? handleUpdatePost : handleAddPost}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded flex items-center gap-2"
                >
                  <Save size={20} />
                  {editingPost ? 'Update' : 'Save'}
                </button>
                <button
                  onClick={() => {
                    setIsAdding(false);
                    setEditingPost(null);
                    resetForm();
                  }}
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-gray-400">{post.excerpt}</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditPost(post)}
                    className="bg-yellow-600 hover:bg-yellow-700 p-2 rounded"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-600 hover:bg-red-700 p-2 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminBlog;