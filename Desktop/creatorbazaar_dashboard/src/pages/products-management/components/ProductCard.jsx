import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onEdit, onDuplicate, onArchive, onView }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-success/10 text-success border-success/20';
      case 'draft':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'archived':
        return 'bg-text-muted/10 text-text-muted border-text-muted/20';
      default:
        return 'bg-text-muted/10 text-text-muted border-text-muted/20';
    }
  };

  return (
    <div className="bg-surface rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
      <div className="relative overflow-hidden rounded-t-xl">
        <div className="aspect-video bg-muted">
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(product.status)}`}>
            {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
          </span>
        </div>
        {product.featured && (
          <div className="absolute top-3 left-3">
            <div className="bg-accent text-white px-2 py-1 text-xs font-medium rounded-full flex items-center">
              <Icon name="Star" size={12} className="mr-1" />
              Featured
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-text-primary text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-text-muted line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="text-sm text-text-secondary">Sales</div>
            <div className="font-semibold text-text-primary">{product.sales}</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Download" size={14} className="mr-1" />
            {product.downloads} downloads
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Calendar" size={14} className="mr-1" />
            {new Date(product.createdAt).toLocaleDateString('en-IN')}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onView(product)}
            className="flex-1"
            iconName="Eye"
            iconSize={14}
          >
            View
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(product)}
            iconName="Edit"
            iconSize={14}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDuplicate(product)}
            iconName="Copy"
            iconSize={14}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onArchive(product)}
            iconName="Archive"
            iconSize={14}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;