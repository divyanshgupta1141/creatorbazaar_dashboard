import React, { useState, useEffect } from 'react';
import ProductToolbar from '../products-management/components/ProductToolbar';
import ProductCard from '../products-management/components/ProductCard';
import ProductEditModal from '../products-management/components/ProductEditModal';
import ProductAnalytics from '../products-management/components/ProductAnalytics';
import Icon from '../../components/AppIcon';


const ProductsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Mock data for products
  const defaultProducts = [
    {
      id: '1',
      title: 'Digital Marketing Masterclass',
      description: 'Complete guide to digital marketing strategies for beginners and professionals.',
      category: 'courses',
      price: 2999,
      originalPrice: 4999,
      status: 'active',
      thumbnail: '/api/placeholder/300/200',
      sales: 245,
      revenue: 734755,
      rating: 4.8,
      reviews: 156,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20',
      tags: ['marketing', 'digital', 'course'],
      fileSize: '2.1 GB',
      downloads: 245,
      type: 'video',
      featured: true,
    },
    {
      id: '2',
      title: 'Web Design Templates Pack',
      description: 'Professional website templates for various industries and use cases.',
      category: 'templates',
      price: 1499,
      originalPrice: 2499,
      status: 'active',
      thumbnail: '/api/placeholder/300/200',
      sales: 189,
      revenue: 283311,
      rating: 4.6,
      reviews: 98,
      createdAt: '2024-01-10',
      updatedAt: '2024-01-18',
      tags: ['design', 'templates', 'web'],
      fileSize: '45 MB',
      downloads: 189,
      type: 'zip'
    },
    {
      id: '3',
      title: 'Photography E-book',
      description: 'Learn professional photography techniques and post-processing skills.',
      category: 'ebook',
      price: 799,
      originalPrice: 1299,
      status: 'draft',
      thumbnail: '/api/placeholder/300/200',
      sales: 67,
      revenue: 53533,
      rating: 4.9,
      reviews: 34,
      createdAt: '2024-01-08',
      updatedAt: '2024-01-16',
      tags: ['photography', 'ebook', 'tutorial'],
      fileSize: '15 MB',
      downloads: 67,
      type: 'pdf'
    },
    {
      id: '4',
      title: 'Business Plan Template',
      description: 'Comprehensive business plan template for startups and established businesses.',
      category: 'templates',
      price: 599,
      originalPrice: 999,
      status: 'active',
      thumbnail: '/api/placeholder/300/200',
      sales: 123,
      revenue: 73677,
      rating: 4.4,
      reviews: 78,
      createdAt: '2024-01-05',
      updatedAt: '2024-01-14',
      tags: ['business', 'template', 'planning'],
      fileSize: '8 MB',
      downloads: 123,
      type: 'docx'
    },
    {
      id: '5',
      title: 'Social Media Graphics Kit',
      description: 'Ready-to-use graphics for all major social media platforms.',
      category: 'graphics',
      price: 999,
      originalPrice: 1799,
      status: 'inactive',
      thumbnail: '/api/placeholder/300/200',
      sales: 89,
      revenue: 88911,
      rating: 4.7,
      reviews: 52,
      createdAt: '2024-01-03',
      updatedAt: '2024-01-12',
      tags: ['graphics', 'social media', 'design'],
      fileSize: '120 MB',
      downloads: 89,
      type: 'zip'
    },
    {
      id: '6',
      title: 'Coding Bootcamp Course',
      description: 'Full-stack web development course with hands-on projects.',
      category: 'courses',
      price: 4999,
      originalPrice: 7999,
      status: 'active',
      thumbnail: '/api/placeholder/300/200',
      sales: 156,
      revenue: 779844,
      rating: 4.9,
      reviews: 123,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-10',
      tags: ['coding', 'programming', 'web development'],
      fileSize: '5.2 GB',
      downloads: 156,
      type: 'video'
    }
  ];
  const [products, setProducts] = useState(defaultProducts);

  // 2. Compute analytics object for ProductAnalytics
  const analytics = {
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === 'active').length,
    productsChange: 0, // mock
    activeChange: 0, // mock
    totalRevenue: products.reduce((sum, p) => sum + p.revenue, 0),
    revenueChange: 0, // mock
    avgPrice: products.length ? Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length) : 0,
    priceChange: 0, // mock
    totalDownloads: products.reduce((sum, p) => sum + p.downloads, 0),
    conversionRate: 12.5, // mock
    topCategories: [
      { name: 'Courses', revenue: 100000 },
      { name: 'Templates', revenue: 50000 },
    ],
  };

  // 3. Fix filter and sort logic to use correct fields (title, category, status)
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        return a.price - b.price;
      case 'sales':
        return b.sales - a.sales;
      case 'revenue':
        return b.revenue - a.revenue;
      case 'rating':
        return b.rating - a.rating;
      case 'created':
        return new Date(b.createdAt) - new Date(a.createdAt);
      default:
        return 0;
    }
  });

  const handleProductEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleProductSave = (updatedProduct) => {
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === updatedProduct.id ? { ...p, ...updatedProduct, updatedAt: new Date().toISOString().split('T')[0] } : p
      )
    );
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleProductDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
      setSelectedProducts(prev => prev.filter(id => id !== productId));
    }
  };

  const handleProductToggleStatus = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === productId
          ? { ...p, status: p.status === 'active' ? 'inactive' : 'active', updatedAt: new Date().toISOString().split('T')[0] }
          : p
      )
    );
  };

  const handleProductDuplicate = (product) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(),
      title: `${product.title} (Copy)`,
      status: 'draft',
      sales: 0,
      revenue: 0,
      rating: 0,
      reviews: 0,
      downloads: 0,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setProducts(prevProducts => [newProduct, ...prevProducts]);
  };

  const handleBulkAction = (action) => {
    if (selectedProducts.length === 0) return;

    switch (action) {
      case 'delete':
        if (window.confirm(`Are you sure you want to delete ${selectedProducts.length} product(s)?`)) {
          setProducts(prevProducts => prevProducts.filter(p => !selectedProducts.includes(p.id)));
          setSelectedProducts([]);
        }
        break;
      case 'activate':
        setProducts(prevProducts =>
          prevProducts.map(p =>
            selectedProducts.includes(p.id) ? { ...p, status: 'active' } : p
          )
        );
        setSelectedProducts([]);
        break;
      case 'deactivate':
        setProducts(prevProducts =>
          prevProducts.map(p =>
            selectedProducts.includes(p.id) ? { ...p, status: 'inactive' } : p
          )
        );
        setSelectedProducts([]);
        break;
      default:
        break;
    }
  };

  const handleProductSelect = (productId) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAll = () => {
    setSelectedProducts(
      selectedProducts.length === sortedProducts.length
        ? []
        : sortedProducts.map(p => p.id)
    );
  };

  const handleAddProduct = () => handleProductEdit(null);

  useEffect(() => {
    document.title = 'Products Management - CreatorBazaar Dashboard';
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          Products Management
        </h1>
        <p className="text-gray-400">
          Manage your digital products.
        </p>
      </div>

      {/* Analytics Overview */}

      {/* Toolbar */}
      <ProductToolbar
        searchQuery={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={filterCategory}
        onCategoryChange={setFilterCategory}
        selectedStatus={filterStatus}
        onStatusChange={setFilterStatus}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onAddProduct={handleAddProduct}
        onBulkAction={handleBulkAction}
        selectedProducts={selectedProducts}
        onSelectAll={handleSelectAll}
        totalProducts={sortedProducts.length}
      />

      {/* Products Grid/List */}
      <div className={`${
        viewMode === 'grid' ?'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' :'space-y-4'
      }`}>
        {sortedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            viewMode={viewMode}
            isSelected={selectedProducts.includes(product.id)}
            onSelect={handleProductSelect}
            onEdit={handleProductEdit}
            onDelete={handleProductDelete}
            onToggleStatus={handleProductToggleStatus}
            onDuplicate={handleProductDuplicate}
          />
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Package" size={32} className="text-text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">No products found</h3>
          <p className="text-text-secondary mb-6">
            {searchTerm || filterCategory !== 'all' || filterStatus !== 'all' ?'Try adjusting your search or filter criteria' :'Start by adding your first digital product'}
          </p>
          <button
            onClick={() => handleProductEdit(null)}
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
          >
            Add Product
          </button>
        </div>
      )}

      {/* Edit Modal */}
      {isModalOpen && (
        <ProductEditModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          onSave={handleProductSave}
        />
      )}
    </div>
  );
};

export default ProductsManagement;