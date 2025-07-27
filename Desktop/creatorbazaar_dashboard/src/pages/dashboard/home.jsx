import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import DashboardCard from '../../components/ui/DashboardCard';
import WelcomeHeader from '../../components/ui/WelcomeHeader';
import QuickStatsGrid from '../dashboard-home/components/QuickStatsGrid';
import RecentActivity from '../dashboard-home/components/RecentActivity';

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

  const dashboardCards = [
    {
      title: '🙏 Namaste! Let\'s Begin',
      description: 'Welcome to your creator journey. Start building your digital empire.',
      href: '/dashboard/home',
      gradient: 'from-primary to-accent'
    },
    {
      title: '🧩 Setup Your Bazaar',
      description: 'Complete your creator profile and customize your digital storefront.',
      href: '/dashboard/products',
      gradient: 'from-accent to-gradientMid'
    },
    {
      title: '🚀 Upload Your Product',
      description: 'Add your first digital product, course, or service to start selling.',
      href: '/dashboard/products',
      gradient: 'from-gradientMid to-primary'
    },
    {
      title: '📣 Invite Your Audience',
      description: 'Share your products with friends and family on social media.',
      href: '/dashboard/workflows',
      gradient: 'from-primary to-highlight'
    },
    {
      title: '💰 Get Your First Order',
      description: 'Track your sales and celebrate your first customer success.',
      href: '/dashboard/analytics',
      gradient: 'from-highlight to-accent'
    },
    {
      title: '🔗 Link Your UPI',
      description: 'Connect your UPI account for instant payments and transfers.',
      href: '/dashboard/payouts',
      gradient: 'from-accent to-primary'
    },
    {
      title: '📤 WhatsApp Broadcast',
      description: 'Set up automated WhatsApp messages for order updates.',
      href: '/dashboard/workflows',
      gradient: 'from-gradientMid to-highlight'
    },
    {
      title: '🧭 Explore Creators',
      description: 'Connect with other creators and discover collaboration opportunities.',
      href: '/dashboard/home',
      gradient: 'from-highlight to-primary'
    }
  ];

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercentage = (completedCount / Object.keys(completedTasks).length) * 100;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Header */}
      <WelcomeHeader />
      
      {/* Quick Stats */}
      <QuickStatsGrid />
      
      {/* Dashboard Cards */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-text-primary">Quick Actions</h2>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Clock" size={16} />
            <span>Get started in minutes</span>
          </div>
        </div>
        
        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 px-2">
            {dashboardCards.map((card, index) => (
              <div key={index} className="flex-shrink-0 min-w-[250px]">
                <DashboardCard {...card} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dashboardCards.map((card, index) => (
            <DashboardCard key={index} {...card} />
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
            <Link 
              to="/dashboard/products"
              className="flex items-center w-full p-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-all duration-300"
            >
              <Icon name="Plus" size={18} className="mr-3" />
              Add New Product
            </Link>
            
            <Link 
              to="/dashboard/analytics"
              className="flex items-center w-full p-3 rounded-lg border border-border hover:bg-muted hover:scale-105 transition-all duration-300"
            >
              <Icon name="BarChart3" size={18} className="mr-3 text-text-secondary" />
              <span className="text-text-primary">View Analytics</span>
            </Link>
            
            <Link 
              to="/dashboard/payouts"
              className="flex items-center w-full p-3 rounded-lg border border-border hover:bg-muted hover:scale-105 transition-all duration-300"
            >
              <Icon name="Wallet" size={18} className="mr-3 text-text-secondary" />
              <span className="text-text-primary">Check Payouts</span>
            </Link>
            
            <Link 
              to="/dashboard/checkout"
              className="flex items-center w-full p-3 rounded-lg border border-border hover:bg-muted hover:scale-105 transition-all duration-300"
            >
              <Icon name="Settings" size={18} className="mr-3 text-text-secondary" />
              <span className="text-text-primary">Settings</span>
            </Link>
          </div>
          
          {/* Support Section */}
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="font-medium text-text-primary mb-3">Need Help?</h3>
            <div className="space-y-2">
              <button className="flex items-center text-sm text-text-secondary hover:text-accent transition-all duration-300">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp Support
              </button>
              <button className="flex items-center text-sm text-text-secondary hover:text-accent transition-all duration-300">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Creator Guide
              </button>
              <button className="flex items-center text-sm text-text-secondary hover:text-accent transition-all duration-300">
                <Icon name="Video" size={16} className="mr-2" />
                Video Tutorials
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;