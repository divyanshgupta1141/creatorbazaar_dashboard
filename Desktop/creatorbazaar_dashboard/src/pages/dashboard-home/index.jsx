import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import WelcomeHeader from './components/WelcomeHeader';
import GettingStartedCard from './components/GettingStartedCard';
import QuickStatsGrid from './components/QuickStatsGrid';
import RecentActivity from './components/RecentActivity';

const DashboardHome = () => {
  const navigate = useNavigate();
  const [completedTasks, setCompletedTasks] = useState({
    bazaarSetup: false,
    productUpload: false,
    whatsappShare: false,
    firstOrder: false,
    upiLink: false,
    whatsappBroadcast: false,
    creatorDiscovery: false,
    analyticsSetup: false
  });

  const handleTaskComplete = (taskKey) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskKey]: true
    }));
  };

  const gettingStartedTasks = [
    {
      key: 'bazaarSetup',
      title: 'Setup Your Digital Bazaar',
      description: 'Complete your creator profile and customize your storefront to attract more customers.',
      icon: 'Store',
      actionText: 'Setup Bazaar',
      completedText: 'Bazaar Ready!',
      priority: 'high',
      onAction: () => {
        handleTaskComplete('bazaarSetup');
        navigate('/products-management');
      }
    },
    {
      key: 'productUpload',
      title: 'Upload Your First Product',
      description: 'Add your digital products, courses, or services to start selling immediately.',
      icon: 'Upload',
      actionText: 'Add Product',
      completedText: 'Product Added!',
      priority: 'high',
      onAction: () => {
        handleTaskComplete('productUpload');
        navigate('/products-management');
      }
    },
    {
      key: 'whatsappShare',
      title: 'Share on WhatsApp',
      description: 'Share your products with friends and family on WhatsApp to get your first customers.',
      icon: 'MessageCircle',
      actionText: 'Share Now',
      completedText: 'Shared Successfully!',
      onAction: () => {
        handleTaskComplete('whatsappShare');
        // Mock WhatsApp sharing
        window.open(`https://wa.me/?text=Check out my digital products on CreatorBazaar! 🚀`, '_blank');
      }
    },
    {
      key: 'firstOrder',
      title: 'Get Your First Order',
      description: 'Celebrate your first sale! Track orders and manage customer communications.',
      icon: 'ShoppingBag',
      actionText: 'View Orders',
      completedText: 'First Sale Done!',
      onAction: () => {
        handleTaskComplete('firstOrder');
        navigate('/sales-analytics');
      }
    },
    {
      key: 'upiLink',
      title: 'Link Your UPI Account',
      description: 'Connect your UPI ID for instant payments and seamless money transfers.',
      icon: 'CreditCard',
      actionText: 'Link UPI',
      completedText: 'UPI Connected!',
      priority: 'high',
      onAction: () => {
        handleTaskComplete('upiLink');
        navigate('/payouts-dashboard');
      }
    },
    {
      key: 'whatsappBroadcast',
      title: 'Setup WhatsApp Broadcast',
      description: 'Create automated WhatsApp messages for order confirmations and updates.',
      icon: 'Megaphone',
      actionText: 'Setup Broadcast',
      completedText: 'Broadcast Ready!',
      onAction: () => {
        handleTaskComplete('whatsappBroadcast');
        navigate('/workflow-automation');
      }
    },
    {
      key: 'creatorDiscovery',
      title: 'Join Creator Discovery',
      description: 'Get featured in our creator marketplace and reach thousands of potential customers.',
      icon: 'Users',
      actionText: 'Join Now',
      completedText: 'Profile Featured!',
      onAction: () => {
        handleTaskComplete('creatorDiscovery');
        // Mock creator discovery
        alert('Congratulations! Your profile has been submitted for creator discovery. You\'ll be featured within 24 hours.');
      }
    },
    {
      key: 'analyticsSetup',
      title: 'Setup Analytics Tracking',
      description: 'Monitor your sales performance, customer behavior, and revenue trends.',
      icon: 'BarChart3',
      actionText: 'Setup Analytics',
      completedText: 'Analytics Active!',
      onAction: () => {
        handleTaskComplete('analyticsSetup');
        navigate('/sales-analytics');
      }
    }
  ];

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercentage = (completedCount / gettingStartedTasks.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Header */}
        <WelcomeHeader />
        
        {/* Quick Stats */}
        <QuickStatsGrid />
        
        {/* Progress Section */}
        <div className="bg-surface rounded-xl border border-border p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Getting Started Progress</h2>
              <p className="text-text-secondary">Complete these tasks to maximize your success</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold gradient-text">{completedCount}/8</p>
              <p className="text-sm text-text-secondary">Tasks Complete</p>
            </div>
          </div>
          
          <div className="w-full bg-muted rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-text-secondary">{Math.round(progressPercentage)}% Complete</p>
        </div>

        {/* Getting Started Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-text-primary">Getting Started Tasks</h2>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Clock" size={16} />
              <span>Estimated time: 30 minutes</span>
            </div>
          </div>
          
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {gettingStartedTasks.map((task) => (
                <div key={task.key} className="flex-shrink-0 w-80">
                  <GettingStartedCard
                    title={task.title}
                    description={task.description}
                    icon={task.icon}
                    isCompleted={completedTasks[task.key]}
                    actionText={task.actionText}
                    completedText={task.completedText}
                    priority={task.priority}
                    onAction={task.onAction}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {gettingStartedTasks.map((task) => (
              <GettingStartedCard
                key={task.key}
                title={task.title}
                description={task.description}
                icon={task.icon}
                isCompleted={completedTasks[task.key]}
                actionText={task.actionText}
                completedText={task.completedText}
                priority={task.priority}
                onAction={task.onAction}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          
          {/* Quick Actions */}
          <div className="bg-surface rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-6">Quick Actions</h2>
            
            <div className="space-y-3">
              <Button 
                variant="primary" 
                className="w-full justify-start"
                iconName="Plus"
                onClick={() => navigate('/products-management')}
              >
                Add New Product
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start"
                iconName="BarChart3"
                onClick={() => navigate('/sales-analytics')}
              >
                View Analytics
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start"
                iconName="Wallet"
                onClick={() => navigate('/payouts-dashboard')}
              >
                Check Payouts
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start"
                iconName="Settings"
                onClick={() => navigate('/checkout-configuration')}
              >
                Settings
              </Button>
            </div>
            
            {/* Support Section */}
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-medium text-text-primary mb-3">Need Help?</h3>
              <div className="space-y-2">
                <button className="flex items-center text-sm text-text-secondary hover:text-accent transition-micro">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp Support
                </button>
                <button className="flex items-center text-sm text-text-secondary hover:text-accent transition-micro">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Creator Guide
                </button>
                <button className="flex items-center text-sm text-text-secondary hover:text-accent transition-micro">
                  <Icon name="Video" size={16} className="mr-2" />
                  Video Tutorials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;