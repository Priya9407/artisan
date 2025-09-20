'use client'

import { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProtectedRoute from '../../../components/ProtectedRoute';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  status: 'active' | 'draft' | 'sold';
  views: number;
  likes: number;
  image: string;
  dateAdded: string;
  description: string;
  tags: string[];
}

interface NewProduct {
  name: string;
  category: string;
  price: string;
  description: string;
  tags: string;
}

export default function ForArtists() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddProduct, setShowAddProduct] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: '',
    category: '',
    price: '',
    description: '',
    tags: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');

  const categories = [
    'Pottery & Ceramics',
    'Jewelry & Accessories', 
    'Textiles & Fabrics',
    'Woodwork & Furniture',
    'Metalwork & Sculpture',
    'Paintings & Art',
    'Photography',
    'Digital Art'
  ];

  // Sample products data
  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: 1,
        name: 'Handcrafted Ceramic Vase',
        category: 'Pottery & Ceramics',
        price: 89.99,
        status: 'active',
        views: 245,
        likes: 18,
        image: '/api/placeholder/300/300',
        dateAdded: '2025-09-15',
        description: 'Beautiful handcrafted ceramic vase with traditional patterns.',
        tags: ['handmade', 'ceramic', 'decorative']
      },
      {
        id: 2,
        name: 'Sterling Silver Earrings',
        category: 'Jewelry & Accessories',
        price: 156.00,
        status: 'active',
        views: 189,
        likes: 24,
        image: '/api/placeholder/300/300',
        dateAdded: '2025-09-12',
        description: 'Elegant sterling silver earrings with intricate design.',
        tags: ['silver', 'jewelry', 'elegant']
      },
      {
        id: 3,
        name: 'Abstract Oil Painting',
        category: 'Paintings & Art',
        price: 675.00,
        status: 'draft',
        views: 67,
        likes: 8,
        image: '/api/placeholder/300/300',
        dateAdded: '2025-09-10',
        description: 'Original abstract oil painting on canvas.',
        tags: ['original', 'abstract', 'oil']
      }
    ];
    setProducts(sampleProducts);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validate form
      if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.description) {
        setError('Please fill in all required fields');
        setIsLoading(false);
        return;
      }

      // Simulate API call
      setTimeout(() => {
        const product: Product = {
          id: editingProduct ? editingProduct.id : Date.now(),
          name: newProduct.name,
          category: newProduct.category,
          price: parseFloat(newProduct.price),
          status: 'draft',
          views: editingProduct ? editingProduct.views : 0,
          likes: editingProduct ? editingProduct.likes : 0,
          image: '/api/placeholder/300/300',
          dateAdded: editingProduct ? editingProduct.dateAdded : new Date().toISOString().split('T')[0],
          description: newProduct.description,
          tags: newProduct.tags.split(',').map(tag => tag.trim()).filter(Boolean)
        };

        if (editingProduct) {
          setProducts(prev => prev.map(p => p.id === editingProduct.id ? product : p));
          setSuccess('Product updated successfully!');
        } else {
          setProducts(prev => [product, ...prev]);
          setSuccess('Product added successfully!');
        }

        setNewProduct({
          name: '',
          category: '',
          price: '',
          description: '',
          tags: ''
        });
        setShowAddProduct(false);
        setEditingProduct(null);
        setIsLoading(false);
        
        setTimeout(() => setSuccess(''), 3000);
      }, 1000);
    } catch (error) {
      setError('Failed to save product');
      setIsLoading(false);
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      description: product.description,
      tags: product.tags.join(', ')
    });
    setShowAddProduct(true);
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
      setSuccess('Product deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const toggleProductStatus = (id: number) => {
    setProducts(prev => prev.map(p => 
      p.id === id 
        ? { ...p, status: p.status === 'active' ? 'draft' : 'active' as 'active' | 'draft' }
        : p
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'sold': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <ProtectedRoute>
      <div className="font-sans min-h-screen bg-background">
        <Header />
        
        {/* Artist Dashboard Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  Artist Studio
                </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400">
                  Create and manage your artistic listings
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setNewProduct({
                    name: '',
                    category: '',
                    price: '',
                    description: '',
                    tags: ''
                  });
                  setShowAddProduct(true);
                }}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 4v16m8-8H4"/>
                </svg>
                Add New Listing
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Success/Error Messages */}
          {success && (
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-2xl mb-6 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {success}
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 p-4 rounded-2xl mb-6 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              {error}
            </div>
          )}

          {/* Add/Edit Product Modal */}
          {showAddProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 max-w-2xl w-full mx-6 max-h-[90vh] overflow-y-auto border border-stone-200/60 dark:border-neutral-800/60">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {editingProduct ? 'Edit Listing' : 'Create New Listing'}
                  </h2>
                  <button
                    onClick={() => {
                      setShowAddProduct(false);
                      setEditingProduct(null);
                    }}
                    className="p-2 hover:bg-stone-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                  >
                    <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmitProduct} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newProduct.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                      placeholder="Enter product name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={newProduct.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        Price (₹) *
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={newProduct.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                      placeholder="Describe your product..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={newProduct.tags}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                      placeholder="handmade, unique, ceramic (comma separated)"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300"
                    >
                      {isLoading ? 'Saving...' : (editingProduct ? 'Update Listing' : 'Create Listing')}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddProduct(false);
                        setEditingProduct(null);
                      }}
                      className="px-6 py-3 bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold rounded-2xl transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">My Listings ({products.length})</h2>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">No listings yet</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">Create your first listing to start selling your artwork</p>
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
                >
                  Create First Listing
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-stone-200/60 dark:border-neutral-800/60 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center relative">
                      <span className="text-4xl opacity-30">🎨</span>
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">{product.name}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{product.category}</p>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          {product.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                          </svg>
                          {product.likes}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-stone-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                          ₹{product.price}
                        </span>
                        <button
                          onClick={() => toggleProductStatus(product.id)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                            product.status === 'active' 
                              ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                              : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}
                        >
                          {product.status === 'active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="flex-1 bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
