import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ProductToolbar = ({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  selectedStatus, 
  onStatusChange, 
  sortBy, 
  onSortChange, 
  onAddProduct,
  onBulkAction,
  selectedProducts 
}) => {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'ebooks', label: 'E-books' },
    { value: 'courses', label: 'Online Courses' },
    { value: 'templates', label: 'Templates' },
    { value: 'software', label: 'Software' },
    { value: 'graphics', label: 'Graphics' },
    { value: 'audio', label: 'Audio' },
    { value: 'video', label: 'Video' }
  ];

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'sales', label: 'Best Selling' },
    { value: 'name', label: 'Name A-Z' }
  ];

  return (
    <div className="bg-surface rounded-xl border border-border p-4 mb-6">
      {/* Top Row - Add Product and Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="primary"
            onClick={onAddProduct}
            iconName="Plus"
            iconPosition="left"
            className="whitespace-nowrap"
          >
            Add New Product
          </Button>
          {selectedProducts.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary">
                {selectedProducts.length} selected
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onBulkAction('activate')}
                iconName="CheckCircle"
                iconSize={14}
              >
                Activate
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onBulkAction('archive')}
                iconName="Archive"
                iconSize={14}
              >
                Archive
              </Button>
            </div>
          )}
        </div>

        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="Search" size={16} className="text-text-secondary" />
          </div>
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Bottom Row - Filters and Sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={16} className="text-text-secondary" />
            <span className="text-sm font-medium text-text-primary">Filters:</span>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            {statuses.map(status => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2 ml-auto">
          <Icon name="ArrowUpDown" size={16} className="text-text-secondary" />
          <span className="text-sm font-medium text-text-primary">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductToolbar;