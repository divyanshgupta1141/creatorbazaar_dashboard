import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FilePreviewCard = ({ file, onReplace, onRemove }) => {
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    const iconMap = {
      pdf: 'FileText',
      zip: 'Archive',
      mp4: 'Video',
      mp3: 'Music',
      png: 'Image',
      jpg: 'Image',
      jpeg: 'Image',
      pptx: 'Presentation',
      doc: 'FileText',
      docx: 'FileText'
    };
    return iconMap[extension] || 'File';
  };

  const getFileTypeColor = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    const colorMap = {
      pdf: 'text-red-600 bg-red-50 border-red-200',
      zip: 'text-purple-600 bg-purple-50 border-purple-200',
      mp4: 'text-blue-600 bg-blue-50 border-blue-200',
      mp3: 'text-green-600 bg-green-50 border-green-200',
      png: 'text-orange-600 bg-orange-50 border-orange-200',
      jpg: 'text-orange-600 bg-orange-50 border-orange-200',
      jpeg: 'text-orange-600 bg-orange-50 border-orange-200',
      pptx: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      doc: 'text-blue-600 bg-blue-50 border-blue-200',
      docx: 'text-blue-600 bg-blue-50 border-blue-200'
    };
    return colorMap[extension] || 'text-gray-600 bg-gray-50 border-gray-200';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-card border border-border rounded-lg p-4 shadow-card"
    >
      <div className="flex items-start space-x-4">
        {/* File Icon */}
        <div className={`flex items-center justify-center w-12 h-12 rounded-lg border ${getFileTypeColor(file.name)}`}>
          <Icon name={getFileIcon(file.name)} size={24} strokeWidth={2} />
        </div>

        {/* File Details */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-foreground truncate" title={file.name}>
            {file.name}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">
            {formatFileSize(file.size)}
          </p>
          
          {/* File Type Tag */}
          <div className="mt-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getFileTypeColor(file.name)}`}>
              {file.name.split('.').pop().toUpperCase()}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col space-y-2">
          <button
            onClick={onReplace}
            className="flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-primary hover:text-primary/80 bg-primary/5 hover:bg-primary/10 rounded-md transition-colors"
          >
            <Icon name="RefreshCw" size={14} />
            <span>Replace</span>
          </button>
          
          <button
            onClick={onRemove}
            className="flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-error hover:text-error/80 bg-error/5 hover:bg-error/10 rounded-md transition-colors"
          >
            <Icon name="Trash2" size={14} />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FilePreviewCard;