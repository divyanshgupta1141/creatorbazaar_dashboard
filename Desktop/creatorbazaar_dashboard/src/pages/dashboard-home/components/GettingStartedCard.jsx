import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GettingStartedCard = ({ 
  title, 
  description, 
  icon, 
  isCompleted, 
  actionText, 
  onAction,
  completedText,
  priority = 'normal'
}) => {
  const priorityStyles = {
    high: 'border-warning/30 bg-warning/5',
    normal: 'border-border bg-surface',
    completed: 'border-success/30 bg-success/5'
  };

  const cardStyle = isCompleted ? priorityStyles.completed : 
                   priority === 'high' ? priorityStyles.high : 
                   priorityStyles.normal;

  return (
    <div className={`${cardStyle} rounded-xl p-6 transition-smooth hover:scale-105 hover:shadow-lg cursor-pointer group`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          isCompleted 
            ? 'bg-success text-white' 
            : priority === 'high' ?'bg-warning text-white' :'bg-gradient-to-r from-primary to-accent text-white'
        }`}>
          <Icon 
            name={isCompleted ? "CheckCircle" : icon} 
            size={24} 
          />
        </div>
        
        {priority === 'high' && !isCompleted && (
          <span className="bg-warning text-white text-xs px-2 py-1 rounded-full font-medium">
            Priority
          </span>
        )}
        
        {isCompleted && (
          <span className="bg-success text-white text-xs px-2 py-1 rounded-full font-medium">
            Done
          </span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:gradient-text transition-smooth">
        {title}
      </h3>
      
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-auto">
        {isCompleted ? (
          <div className="flex items-center text-success text-sm font-medium">
            <Icon name="CheckCircle" size={16} className="mr-2" />
            {completedText || "Completed"}
          </div>
        ) : (
          <Button 
            variant="primary" 
            onClick={onAction}
            className="w-full"
            iconName="ArrowRight"
            iconPosition="right"
          >
            {actionText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default GettingStartedCard;