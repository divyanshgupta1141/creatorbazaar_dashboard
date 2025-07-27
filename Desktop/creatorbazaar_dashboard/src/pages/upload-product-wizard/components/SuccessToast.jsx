import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Icon from '../../../components/AppIcon';

const SuccessToast = ({ isVisible, onClose, productData }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const toastElement = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-4 right-4 z-50 max-w-md"
      >
        <div className="bg-success text-success-foreground rounded-lg shadow-modal border border-success/20 p-4">
          <div className="flex items-start space-x-3">
            {/* Success Icon */}
            <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full flex-shrink-0">
              <Icon name="CheckCircle" size={20} color="white" strokeWidth={2.5} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Product Created Successfully!</h3>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-1 rounded-md hover:bg-white/10 transition-colors"
                >
                  <Icon name="X" size={16} color="white" strokeWidth={2} />
                </button>
              </div>
              
              <p className="text-sm opacity-90 mt-1">
                "{productData?.title}" has been uploaded and is ready for sale.
              </p>

              {/* Quick Stats */}
              <div className="flex items-center space-x-4 mt-3 text-xs opacity-80">
                <div className="flex items-center space-x-1">
                  <Icon name="FileText" size={12} />
                  <span>{productData?.file?.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="DollarSign" size={12} />
                  <span>₹{productData?.price ? new Intl.NumberFormat('en-IN').format(parseInt(productData.price)) : '0'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 mt-4">
                <button className="flex items-center space-x-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-md text-xs font-medium transition-colors">
                  <Icon name="Eye" size={12} />
                  <span>View Product</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-md text-xs font-medium transition-colors">
                  <Icon name="Share2" size={12} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(toastElement, document.body);
};

export default SuccessToast;