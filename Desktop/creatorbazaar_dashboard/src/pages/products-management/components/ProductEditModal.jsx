import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Image from '../../../components/AppImage';

const ProductEditModal = ({ product, isOpen, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    title: product?.title || '',
    description: product?.description || '',
    price: product?.price || '',
    originalPrice: product?.originalPrice || '',
    category: product?.category || 'ebooks',
    tags: product?.tags?.join(', ') || '',
    thumbnail: product?.thumbnail || '',
    files: product?.files || [],
    gstApplicable: product?.gstApplicable || false,
    gstRate: product?.gstRate || '18',
    upiEnabled: product?.upiEnabled || true,
    seoTitle: product?.seoTitle || '',
    seoDescription: product?.seoDescription || '',
    status: product?.status || 'draft'
  });

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: 'Info' },
    { id: 'pricing', label: 'Pricing & Tax', icon: 'IndianRupee' },
    { id: 'files', label: 'Digital Files', icon: 'FileText' },
    { id: 'seo', label: 'SEO Settings', icon: 'Search' }
  ];

  const categories = [
    { value: 'ebooks', label: 'E-books' },
    { value: 'courses', label: 'Online Courses' },
    { value: 'templates', label: 'Templates' },
    { value: 'software', label: 'Software' },
    { value: 'graphics', label: 'Graphics' },
    { value: 'audio', label: 'Audio' },
    { value: 'video', label: 'Video' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    const updatedProduct = {
      ...product,
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      updatedAt: new Date().toISOString()
    };
    onSave(updatedProduct);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-xl border border-border w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-text-primary">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose} iconName="X" iconSize={20} />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name={tab.icon} size={16} className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'basic' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Product Title *
                    </label>
                    <Input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Enter product title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Tags (comma separated)
                    </label>
                    <Input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                      placeholder="e.g., digital, template, business"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="draft">Draft</option>
                      <option value="active">Active</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Product Thumbnail
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    {formData.thumbnail ? (
                      <div className="relative">
                        <Image
                          src={formData.thumbnail}
                          alt="Product thumbnail"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleInputChange('thumbnail', '')}
                          className="absolute top-2 right-2"
                          iconName="X"
                          iconSize={16}
                        />
                      </div>
                    ) : (
                      <div className="py-8">
                        <Icon name="Upload" size={48} className="mx-auto text-text-muted mb-4" />
                        <p className="text-text-secondary">Click to upload thumbnail</p>
                        <p className="text-sm text-text-muted mt-1">PNG, JPG up to 5MB</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Product Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your product..."
                  rows={4}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Selling Price (₹) *
                  </label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Original Price (₹)
                  </label>
                  <Input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                    placeholder="0"
                    min="0"
                  />
                  <p className="text-xs text-text-muted mt-1">Leave empty if no discount</p>
                </div>
              </div>

              <div className="bg-background rounded-lg p-4 border border-border">
                <h3 className="font-medium text-text-primary mb-4">GST Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="gstApplicable"
                      checked={formData.gstApplicable}
                      onChange={(e) => handleInputChange('gstApplicable', e.target.checked)}
                      className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary/20"
                    />
                    <label htmlFor="gstApplicable" className="ml-2 text-sm text-text-primary">
                      GST Applicable
                    </label>
                  </div>

                  {formData.gstApplicable && (
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        GST Rate (%)
                      </label>
                      <select
                        value={formData.gstRate}
                        onChange={(e) => handleInputChange('gstRate', e.target.value)}
                        className="w-full px-3 py-2 bg-surface border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-background rounded-lg p-4 border border-border">
                <h3 className="font-medium text-text-primary mb-4">Payment Options</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="upiEnabled"
                    checked={formData.upiEnabled}
                    onChange={(e) => handleInputChange('upiEnabled', e.target.checked)}
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary/20"
                  />
                  <label htmlFor="upiEnabled" className="ml-2 text-sm text-text-primary">
                    Enable UPI Payments
                  </label>
                </div>
                <p className="text-xs text-text-muted mt-1">Allow customers to pay via UPI</p>
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Icon name="Upload" size={48} className="mx-auto text-text-muted mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">Upload Digital Files</h3>
                <p className="text-text-secondary mb-4">
                  Upload the files customers will receive after purchase
                </p>
                <Button variant="outline" iconName="Plus" iconPosition="left">
                  Add Files
                </Button>
              </div>

              {formData.files.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-medium text-text-primary">Uploaded Files</h3>
                  {formData.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                      <div className="flex items-center">
                        <Icon name="FileText" size={20} className="text-text-secondary mr-3" />
                        <div>
                          <p className="text-sm font-medium text-text-primary">{file.name}</p>
                          <p className="text-xs text-text-muted">{file.size}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" iconName="Trash2" iconSize={16} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  SEO Title
                </label>
                <Input
                  type="text"
                  value={formData.seoTitle}
                  onChange={(e) => handleInputChange('seoTitle', e.target.value)}
                  placeholder="Enter SEO title"
                />
                <p className="text-xs text-text-muted mt-1">Recommended: 50-60 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  SEO Description
                </label>
                <textarea
                  value={formData.seoDescription}
                  onChange={(e) => handleInputChange('seoDescription', e.target.value)}
                  placeholder="Enter SEO description"
                  rows={3}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
                <p className="text-xs text-text-muted mt-1">Recommended: 150-160 characters</p>
              </div>

              <div className="bg-background rounded-lg p-4 border border-border">
                <h3 className="font-medium text-text-primary mb-3">SEO Preview</h3>
                <div className="space-y-2">
                  <div className="text-lg text-primary font-medium">
                    {formData.seoTitle || formData.title || 'Product Title'}
                  </div>
                  <div className="text-sm text-success">
                    https://creatorbazaar.com/products/{formData.title?.toLowerCase().replace(/\s+/g, '-') || 'product-name'}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {formData.seoDescription || formData.description || 'Product description will appear here...'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-border">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {product ? 'Update Product' : 'Create Product'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductEditModal;