import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import FilePreviewCard from './FilePreviewCard';

const UploadStep = ({ formData, setFormData, errors, setErrors }) => {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const allowedTypes = ['.pdf', '.zip', '.mp4', '.mp3', '.png', '.jpg', '.jpeg', '.pptx', '.doc', '.docx'];
  const maxSize = 100 * 1024 * 1024; // 100MB

  const validateFile = (file) => {
    const extension = '.' + file.name.split('.').pop().toLowerCase();
    
    if (!allowedTypes.includes(extension)) {
      return `File type ${extension} is not supported. Allowed types: ${allowedTypes.join(', ')}`;
    }
    
    if (file.size > maxSize) {
      return `File size must be less than 100MB. Current size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`;
    }
    
    return null;
  };

  const handleFileSelect = (files) => {
    const file = files[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      setErrors(prev => ({ ...prev, file: error }));
      return;
    }

    setFormData(prev => ({ ...prev, file }));
    setErrors(prev => ({ ...prev, file: null }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleFileInputChange = (e) => {
    handleFileSelect(e.target.files);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleReplaceFile = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({ ...prev, file: null }));
    setErrors(prev => ({ ...prev, file: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* File Upload Area */}
      {!formData.file ? (
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer ${
            isDragOver
              ? 'border-primary bg-primary/5'
              : errors.file
              ? 'border-error bg-error/5' :'border-border hover:border-primary/50 hover:bg-muted/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={allowedTypes.join(',')}
            onChange={handleFileInputChange}
            className="hidden"
          />

          <div className="space-y-4">
            {/* Upload Icon */}
            <div className="flex justify-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                isDragOver ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name="Upload" size={32} strokeWidth={2} />
              </div>
            </div>

            {/* Upload Text */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {isDragOver ? 'Drop your file here' : 'Upload your digital product'}
              </h3>
              <p className="text-muted-foreground mb-4">
                Drag and drop your file here, or click to browse
              </p>
            </div>

            {/* File Type Icons */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              {[
                { icon: 'FileText', label: 'PDF' },
                { icon: 'Archive', label: 'ZIP' },
                { icon: 'Video', label: 'MP4' },
                { icon: 'Music', label: 'MP3' },
                { icon: 'Image', label: 'IMG' }
              ].map((type, index) => (
                <div key={index} className="flex flex-col items-center space-y-1">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name={type.icon} size={16} color="var(--color-muted-foreground)" />
                  </div>
                  <span className="text-xs text-muted-foreground">{type.label}</span>
                </div>
              ))}
            </div>

            {/* File Requirements */}
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Supported formats: PDF, ZIP, MP4, MP3, PNG, JPG, PPTX, DOC</p>
              <p>Maximum file size: 100MB</p>
            </div>
          </div>
        </div>
      ) : (
        /* File Preview */
        <FilePreviewCard
          file={formData.file}
          onReplace={handleReplaceFile}
          onRemove={handleRemoveFile}
        />
      )}

      {/* Error Message */}
      {errors.file && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-error text-sm"
        >
          <Icon name="AlertCircle" size={16} />
          <span>{errors.file}</span>
        </motion.div>
      )}

      {/* Upload Instructions */}
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-foreground mb-2">Upload Guidelines</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li className="flex items-start space-x-2">
            <Icon name="Check" size={14} className="mt-0.5 text-success" />
            <span>Ensure your file is complete and error-free</span>
          </li>
          <li className="flex items-start space-x-2">
            <Icon name="Check" size={14} className="mt-0.5 text-success" />
            <span>Use descriptive filenames for better organization</span>
          </li>
          <li className="flex items-start space-x-2">
            <Icon name="Check" size={14} className="mt-0.5 text-success" />
            <span>Compress large files to reduce upload time</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default UploadStep;