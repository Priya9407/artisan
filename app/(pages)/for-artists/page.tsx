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
}

interface Analytics {
  totalViews: number;
  totalSales: number;
  totalRevenue: number;
  totalProducts: number;
  monthlyViews: number[];
  monthlySales: number[];
}

export default function ForArtists() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [products, setProducts] = useState<Product[]>([]);
  const [analytics, setAnalytics] = useState<Analytics>({
    totalViews: 12450,
    totalSales: 89,
    totalRevenue: 15670.50,
    totalProducts: 24,
    monthlyViews: [2100, 2300, 1900, 2600, 3200, 2800, 3100, 2400, 2700, 3400, 3800, 4200],
    monthlySales: [12, 18, 15, 22, 28, 25, 30, 19, 24, 35, 42, 48]
  });
  const [showAddProduct, setShowAddProduct] = useState<boolean>(false);

  // Sample products data
  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: 1,
        name: 'Ceramic Vase Collection',
        category: 'Pottery',
        price: 89.99,
        status: 'active',
        views: 245,
        likes: 18,
        image: '/api/placeholder/300/300',
        dateAdded: '2025-09-15'
      },
      {
        id: 2,
        name: 'Sterling Silver Earrings',
        category: 'Jewelry',
        price: 156.00,
        status: 'active',
        views: 189,
        likes: 24,
        image: '/api/placeholder/300/300',
        dateAdded: '2025-09-12'
      },
      {
        id: 3,
        name: 'Handwoven Textile Art',
        category: 'Textiles',
        price: 245.00,
        status: 'draft',
        views: 67,
        likes: 8,
        image: '/api/placeholder/300/300',
        dateAdded: '2025-09-10'
      },
      {
        id: 4,
        name: 'Abstract Oil Painting',
        category: 'Art',
        price: 675.00,
        status: 'sold',
        views: 423,
        likes: 56,
        image: '/api/placeholder/300/300',
        dateAdded: '2025-09-08'
      }
    ];
    setProducts(sampleProducts);
  }, []);

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
                  Artist Dashboard
                </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400">
                  Manage your artworks, track performance, and grow your business
                </p>
              </div>
              <button
                onClick={() => setShowAddProduct(true)}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 4v16m8-8H4"/>
                </svg>
                Add New Product
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-200 dark:border-neutral-800">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: '📊' },
              { id: 'products', name: 'My Products', icon: '🎨' },
              { id: 'orders', name: 'Orders', icon: '📦' },
              { id: 'analytics', name: 'Analytics', icon: '📈' },
              { id: 'profile', name: 'Profile', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-t-2xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-stone-50 dark:hover:bg-neutral-900'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200/60 dark:border-neutral-800/60">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {analytics.totalViews.toLocaleString()}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Views</p>
                  <p className="text-xs text-green-600 mt-1">+12% from last month</p>
                </div>

                <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200/60 dark:border-neutral-800/60">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {analytics.totalSales}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Sales</p>
                  <p className="text-xs text-green-600 mt-1">+8% from last month</p>
                </div>

                <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200/60 dark:border-neutral-800/60">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    ${analytics.totalRevenue.toLocaleString()}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Revenue</p>
                  <p className="text-xs text-green-600 mt-1">+15% from last month</p>
                </div>

                <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200/60 dark:border-neutral-800/60">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {analytics.totalProducts}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Products Listed</p>
                  <p className="text-xs text-green-600 mt-1">+3 this month</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-stone-200/60 dark:border-neutral-800/60">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    { action: 'New order received', item: 'Sterling Silver Earrings', time: '2 hours ago', type: 'order' },
                    { action: 'Product liked', item: 'Ceramic Vase Collection', time: '4 hours ago', type: 'like' },
                    { action: 'Product viewed', item: 'Abstract Oil Painting', time: '6 hours ago', type: 'view' },
                    { action: 'Review received', item: 'Handwoven Textile Art', time: '1 day ago', type: 'review' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-stone-50 dark:bg-neutral-800 rounded-2xl">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'order' ? 'bg-green-100 text-green-600' :
                        activity.type === 'like' ? 'bg-red-100 text-red-600' :
                        activity.type === 'view' ? 'bg-blue-100 text-blue-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {activity.type === 'order' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                        {activity.type === 'like' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>}
                        {activity.type === 'view' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z"/></svg>}
                        {activity.type === 'review' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-neutral-900 dark:text-neutral-100">{activity.action}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{activity.item}</p>
                      </div>
                      <span className="text-sm text-neutral-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">My Products</h2>
                <div className="flex gap-3">
                  <select className="px-4 py-2 bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Sold</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-stone-200/60 dark:border-neutral-800/60">
                    <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center">
                      <span className="text-4xl opacity-30">🎨</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">{product.name}</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{product.category}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
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
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                          ${product.price}
                        </span>
                        <div className="flex gap-2">
                          <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary rounded-xl hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                          </button>
                          <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-red-500 rounded-xl hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-stone-200/60 dark:border-neutral-800/60">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-stone-200 dark:border-neutral-700">
                      <th className="text-left py-3 text-neutral-600 dark:text-neutral-400 font-semibold">Order ID</th>
                      <th className="text-left py-3 text-neutral-600 dark:text-neutral-400 font-semibold">Product</th>
                      <th className="text-left py-3 text-neutral-600 dark:text-neutral-400 font-semibold">Customer</th>
                      <th className="text-left py-3 text-neutral-600 dark:text-neutral-400 font-semibold">Amount</th>
                      <th className="text-left py-3 text-neutral-600 dark:text-neutral-400 font-semibold">Status</th>
                      <th className="text-left py-3 text-neutral-600 dark:text-neutral-400 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: '#12345', product: 'Sterling Silver Earrings', customer: 'Sarah Johnson', amount: '$156.00', status: 'completed', date: '2025-09-18' },
                      { id: '#12346', product: 'Ceramic Vase Collection', customer: 'Mike Chen', amount: '$89.99', status: 'processing', date: '2025-09-17' },
                      { id: '#12347', product: 'Abstract Oil Painting', customer: 'Emma Wilson', amount: '$675.00', status: 'shipped', date: '2025-09-16' }
                    ].map((order, index) => (
                      <tr key={index} className="border-b border-stone-100 dark:border-neutral-800">
                        <td className="py-4 font-medium text-neutral-900 dark:text-neutral-100">{order.id}</td>
                        <td className="py-4 text-neutral-700 dark:text-neutral-300">{order.product}</td>
                        <td className="py-4 text-neutral-700 dark:text-neutral-300">{order.customer}</td>
                        <td className="py-4 font-semibold text-neutral-900 dark:text-neutral-100">{order.amount}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            order.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            order.status === 'processing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-neutral-600 dark:text-neutral-400">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-stone-200/60 dark:border-neutral-800/60">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">Monthly Views</h3>
                  <div className="h-64 flex items-end gap-2">
                    {analytics.monthlyViews.map((views, index) => (
                      <div key={index} className="flex-1 bg-primary/20 rounded-t-lg" style={{ height: `${(views / Math.max(...analytics.monthlyViews)) * 100}%` }}>
                        <div className="w-full bg-primary rounded-t-lg" style={{ height: '20%' }}></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-stone-200/60 dark:border-neutral-800/60">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">Monthly Sales</h3>
                  <div className="h-64 flex items-end gap-2">
                    {analytics.monthlySales.map((sales, index) => (
                      <div key={index} className="flex-1 bg-green-100/50 dark:bg-green-900/20 rounded-t-lg" style={{ height: `${(sales / Math.max(...analytics.monthlySales)) * 100}%` }}>
                        <div className="w-full bg-green-500 rounded-t-lg" style={{ height: '20%' }}></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-stone-200/60 dark:border-neutral-800/60">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">Top Performing Products</h3>
                <div className="space-y-4">
                  {products.slice(0, 3).map((product, index) => (
                    <div key={product.id} className="flex items-center gap-4 p-4 bg-stone-50 dark:bg-neutral-800 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-stone-200 to-stone-300 dark:from-neutral-700 dark:to-neutral-600 rounded-xl flex items-center justify-center">
                        <span className="text-lg">🎨</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">{product.name}</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{product.views} views • {product.likes} likes</p>
                      </div>
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">${product.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="max-w-2xl">
              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-stone-200/60 dark:border-neutral-800/60">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Artist Profile</h2>
                <form className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <button className="bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 px-4 py-2 rounded-xl font-medium text-neutral-700 dark:text-neutral-300 transition-colors">
                      Change Photo
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Artist"
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Bio</label>
                    <textarea
                      rows={4}
                      defaultValue="Passionate artist specializing in handcrafted ceramics and contemporary jewelry. Creating unique pieces that blend traditional techniques with modern aesthetics."
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-neutral-900 dark:text-neutral-100"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="bg-stone-100 dark:bg-neutral-800 hover:bg-stone-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
