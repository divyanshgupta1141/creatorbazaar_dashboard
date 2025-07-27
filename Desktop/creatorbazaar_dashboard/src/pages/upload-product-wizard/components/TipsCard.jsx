import React from 'react';
import Icon from '../../../components/AppIcon';

const TipsCard = () => {
  const tips = [
    "Upload high-quality files in supported formats",
    "Write clear, descriptive product titles",
    "Set competitive pricing for better sales"
  ];

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
          <Icon name="Lightbulb" size={18} color="#3B82F6" strokeWidth={2} />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Tips for Success</h3>
      </div>
      
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-5 h-5 bg-success rounded-full flex-shrink-0 mt-0.5">
              <Icon name="Check" size={12} color="white" strokeWidth={3} />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsCard;