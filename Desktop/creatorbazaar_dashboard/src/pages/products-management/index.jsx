import React, { useState, useEffect } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProductCard from './components/ProductCard';
import ProductToolbar from './components/ProductToolbar';
import ProductAnalytics from './components/ProductAnalytics';
import ProductEditModal from './components/ProductEditModal';

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Mock products data
  const mockProducts = [
    {
      id: 1,
      title: "Complete Digital Marketing Course",
      description: "Master digital marketing with this comprehensive course covering SEO, social media, and PPC advertising strategies for Indian businesses.",
      price: 2999,
      originalPrice: 4999,
      category: "courses",
      status: "active",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      sales: 156,
      downloads: 156,
      createdAt: "2024-01-15",
      featured: true,
      tags: ["marketing", "digital", "seo", "social media"],
      files: [
        { name: "Course_Videos.zip", size: "2.5 GB" },
        { name: "Course_Materials.pdf", size: "15 MB" }
      ],
      gstApplicable: true,
      gstRate: "18",
      upiEnabled: true,
      seoTitle: "Complete Digital Marketing Course - Learn SEO, Social Media & PPC",
      seoDescription: "Master digital marketing with our comprehensive course. Learn SEO, social media marketing, and PPC advertising strategies."
    },
    {
      id: 2,
      title: "Business Plan Template Bundle",
      description: "Professional business plan templates designed specifically for Indian startups and small businesses. Includes financial projections.",
      price: 999,
      originalPrice: null,
      category: "templates",
      status: "active",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      sales: 89,
      downloads: 89,
      createdAt: "2024-02-01",
      featured: false,
      tags: ["business", "template", "startup", "planning"],
      files: [
        { name: "Business_Plan_Templates.docx", size: "5 MB" },
        { name: "Financial_Projections.xlsx", size: "2 MB" }
      ],
      gstApplicable: true,
      gstRate: "18",
      upiEnabled: true,
      seoTitle: "Business Plan Template Bundle for Indian Startups",
      seoDescription: "Professional business plan templates with financial projections for Indian startups and small businesses."
    },
    {
      id: 3,
      title: "Social Media Graphics Pack",
      description: "200+ professionally designed social media graphics for Instagram, Facebook, and WhatsApp Business. Perfect for Indian brands.",
      price: 1499,
      originalPrice: 2499,
      category: "graphics",
      status: "active",
      thumbnail: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=400&h=300&fit=crop",
      sales: 234,
      downloads: 234,
      createdAt: "2024-01-20",
      featured: true,
      tags: ["graphics", "social media", "instagram", "facebook"],
      files: [
        { name: "Instagram_Graphics.zip", size: "150 MB" },
        { name: "Facebook_Graphics.zip", size: "120 MB" }
      ],
      gstApplicable: true,
      gstRate: "18",
      upiEnabled: true,
      seoTitle: "Social Media Graphics Pack - 200+ Designs for Indian Brands",
      seoDescription: "Professional social media graphics for Instagram, Facebook, and WhatsApp Business. Perfect for Indian brands and businesses."
    },
    {
      id: 4,
      title: "E-commerce Store Setup Guide",
      description: "Step-by-step guide to setting up your online store in India. Covers legal requirements, payment gateways, and marketing strategies.",
      price: 1999,
      originalPrice: null,
      category: "ebooks",
      status: "draft",
      thumbnail: "https://images.pixabay.com/photo/2016/11/10/16/05/laptop-1814090_1280.jpg?w=400&h=300&fit=crop",
      sales: 0,
      downloads: 0,
      createdAt: "2024-02-10",
      featured: false,
      tags: ["ecommerce", "guide", "online store", "business"],
      files: [
        { name: "Ecommerce_Setup_Guide.pdf", size: "25 MB" },
        { name: "Legal_Templates.zip", size: "8 MB" }
      ],
      gstApplicable: true,
      gstRate: "18",
      upiEnabled: true,
      seoTitle: "E-commerce Store Setup Guide for India",
      seoDescription: "Complete guide to setting up your online store in India with legal requirements and marketing strategies."
    },
    {
      id: 5,
      title: "Freelancer Invoice Templates",
      description: "Professional invoice templates for Indian freelancers. Includes GST-compliant formats and payment tracking sheets.",
      price: 499,
      originalPrice: 799,
      category: "templates",
      status: "active",
      thumbnail: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=300&fit=crop",
      sales: 67,
      downloads: 67,
      createdAt: "2024-01-25",
      featured: false,
      tags: ["invoice", "freelancer", "gst", "templates"],
      files: [
        { name: "Invoice_Templates.xlsx", size: "3 MB" },
        { name: "Payment_Tracker.xlsx", size: "1 MB" }
      ],
      gstApplicable: true,
      gstRate: "18",
      upiEnabled: true,
      seoTitle: "GST-Compliant Invoice Templates for Indian Freelancers",
      seoDescription: "Professional invoice templates for Indian freelancers with GST compliance and payment tracking."
    },
    {
      id: 6,
      title: "YouTube Channel Growth Kit",
      description: "Complete toolkit for growing your YouTube channel in India. Includes thumbnail templates, script formats, and SEO strategies.",
      price: 1799,
      originalPrice: null,
      category: "templates",
      status: "archived",
      thumbnail: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?w=400&h=300&fit=crop",
      sales: 45,
      downloads: 45,
      createdAt: "2023-12-15",
      featured: false,
      tags: ["youtube", "growth", "templates", "seo"],
      files: [
        { name: "Thumbnail_Templates.psd", size: "50 MB" },
        { name: "Script_Templates.docx", size: "5 MB" }
      ],
      gstApplicable: true,
      gstRate: "18",
      upiEnabled: true,
      seoTitle: "YouTube Channel Growth Kit for Indian Creators",
      seoDescription: "Complete toolkit for growing your YouTube channel in India with templates and SEO strategies."
    }
  ];

  // Mock analytics data
  const mockAnalytics = {
    totalProducts: 6,
    activeProducts: 4,
    totalRevenue: 425000,
    avgPrice: 1466,
    productsChange: 12,
    activeChange: 8,
    revenueChange: 25,
    priceChange: -5,
    totalDownloads: 591,
    conversionRate: 3.2,
    topCategories: [
      { name: "Templates", revenue: 180000 },
      { name: "Courses", revenue: 150000 },
      { name: "Graphics", revenue: 95000 }
    ]
  };

  useEffect(() => {
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(product => product.status === selectedStatus);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'price-high':
          return b.price - a.price;
        case 'price-low':
          return a.price - b.price;
        case 'sales':
          return b.sales - a.sales;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, selectedStatus, sortBy]);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowEditModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowEditModal(true);
  };

  const handleDuplicateProduct = (product) => {
    const duplicatedProduct = {
      ...product,
      id: Date.now(),
      title: `${product.title} (Copy)`,
      status: 'draft',
      sales: 0,
      downloads: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProducts(prev => [duplicatedProduct, ...prev]);
  };

  const handleArchiveProduct = (product) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === product.id
          ? { ...p, status: p.status === 'archived' ? 'draft' : 'archived' }
          : p
      )
    );
  };

  const handleViewProduct = (product) => {
    // In a real app, this would navigate to product detail page
    console.log('Viewing product:', product);
  };

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      setProducts(prev =>
        prev.map(p => p.id === editingProduct.id ? productData : p)
      );
    } else {
      const newProduct = {
        ...productData,
        id: Date.now(),
        sales: 0,
        downloads: 0,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setProducts(prev => [newProduct, ...prev]);
    }
  };

  const handleBulkAction = (action) => {
    if (selectedProducts.length === 0) return;

    setProducts(prev =>
      prev.map(product => {
        if (selectedProducts.includes(product.id)) {
          switch (action) {
            case 'activate':
              return { ...product, status: 'active' };
            case 'archive':
              return { ...product, status: 'archived' };
            default:
              return product;
          }
        }
        return product;
      })
    );
    setSelectedProducts([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Products Management</h1>
              <p className="text-text-secondary mt-1">
                Manage your digital products and track performance
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant={showAnalytics ? "primary" : "outline"}
                onClick={() => setShowAnalytics(!showAnalytics)}
                iconName="BarChart3"
                iconPosition="left"
                className="hidden lg:flex"
              >
                Analytics
              </Button>
              <Button
                variant="primary"
                onClick={handleAddProduct}
                iconName="Plus"
                iconPosition="left"
              >
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Products Section */}
          <div className={`flex-1 ${showAnalytics ? 'lg:w-2/3' : 'w-full'}`}>
            <ProductToolbar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onAddProduct={handleAddProduct}
              onBulkAction={handleBulkAction}
              selectedProducts={selectedProducts}
            />

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onEdit={handleEditProduct}
                    onDuplicate={handleDuplicateProduct}
                    onArchive={handleArchiveProduct}
                    onView={handleViewProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Package" size={64} className="mx-auto text-text-muted mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">No products found</h3>
                <p className="text-text-secondary mb-6">
                  {searchQuery || selectedCategory !== 'all' || selectedStatus !== 'all' ?'Try adjusting your filters or search terms' :'Get started by creating your first digital product'}
                </p>
                <Button variant="primary" onClick={handleAddProduct} iconName="Plus" iconPosition="left">
                  Create Your First Product
                </Button>
              </div>
            )}
          </div>

          {/* Analytics Sidebar */}
          {showAnalytics && (
            <div className="lg:w-1/3">
              <ProductAnalytics analytics={mockAnalytics} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Analytics Toggle */}
      <div className="lg:hidden fixed bottom-20 right-4 z-40">
        <Button
          variant={showAnalytics ? "primary" : "outline"}
          onClick={() => setShowAnalytics(!showAnalytics)}
          iconName="BarChart3"
          className="rounded-full w-12 h-12 shadow-lg"
        />
      </div>

      {/* Mobile Analytics Panel */}
      {showAnalytics && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-surface w-full max-h-[80vh] rounded-t-xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-text-primary">Analytics</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAnalytics(false)}
                iconName="X"
                iconSize={20}
              />
            </div>
            <div className="p-4 overflow-y-auto">
              <ProductAnalytics analytics={mockAnalytics} />
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      <ProductEditModal
        product={editingProduct}
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveProduct}
      />
    </div>
  );
};

export default ProductsManagement;