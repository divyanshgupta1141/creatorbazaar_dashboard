import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/ui/Sidebar';
import Header from '../../components/ui/Header';
import MobileNav from '../../components/ui/MobileNav';
import MetricCard from './components/MetricCard';
import RevenueChart from './components/RevenueChart';
import ProductPerformanceChart from './components/ProductPerformanceChart';
import TrafficSourceChart from './components/TrafficSourceChart';
import GeographicChart from './components/GeographicChart';
import FilterControls from './components/FilterControls';
import useNavigation from '../../hooks/useNavigation';

const SalesAnalytics = () => {
  const { mobileMenuOpen, toggleMobileMenu } = useNavigation();
  const [timeRange, setTimeRange] = useState('30d');
  const [productCategory, setProductCategory] = useState('all');
  const [paymentMethod, setPaymentMethod] = useState('all');

  // Mock data for metrics
  const metricsData = [
    {
      title: "Total Revenue",
      value: "₹2,45,680",
      change: "+12.5%",
      changeType: "positive",
      icon: "TrendingUp",
      color: "primary"
    },
    {
      title: "Total Orders",
      value: "1,247",
      change: "+8.2%",
      changeType: "positive",
      icon: "ShoppingCart",
      color: "success"
    },
    {
      title: "Conversion Rate",
      value: "3.4%",
      change: "+0.8%",
      changeType: "positive",
      icon: "Target",
      color: "accent"
    },
    {
      title: "Avg Order Value",
      value: "₹1,970",
      change: "-2.1%",
      changeType: "negative",
      icon: "DollarSign",
      color: "warning"
    }
  ];

  // Mock data for revenue chart
  const revenueData = [
    { date: '01/12', revenue: 15000 },
    { date: '05/12', revenue: 18500 },
    { date: '10/12', revenue: 22000 },
    { date: '15/12', revenue: 19800 },
    { date: '20/12', revenue: 25600 },
    { date: '25/12', revenue: 28900 },
    { date: '30/12', revenue: 32400 }
  ];

  // Mock data for product performance
  const productData = [
    { name: 'Digital Marketing Course', sales: 85000 },
    { name: 'Web Design Templates', sales: 62000 },
    { name: 'Photography E-book', sales: 45000 },
    { name: 'Business Plan Template', sales: 38000 },
    { name: 'Social Media Kit', sales: 29000 }
  ];

  // Mock data for traffic sources
  const trafficData = [
    { name: 'WhatsApp', value: 35 },
    { name: 'Instagram', value: 28 },
    { name: 'Direct', value: 18 },
    { name: 'Google', value: 12 },
    { name: 'Facebook', value: 7 }
  ];

  // Mock data for geographic distribution
  const geoData = [
    { state: 'Maharashtra', orders: 245 },
    { state: 'Karnataka', orders: 198 },
    { state: 'Delhi', orders: 167 },
    { state: 'Tamil Nadu', orders: 143 },
    { state: 'Gujarat', orders: 128 },
    { state: 'Uttar Pradesh', orders: 112 }
  ];

  const handleExportPDF = () => {
    // Mock PDF export functionality
    alert('PDF report will be generated and downloaded');
  };

  const handleExportCSV = () => {
    // Mock CSV export functionality
    alert('CSV data will be downloaded');
  };

  useEffect(() => {
    document.title = 'Sales Analytics - CreatorBazaar Dashboard';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
      
      <div className="lg:ml-60">
        <Header onMenuToggle={toggleMobileMenu} isMobileMenuOpen={mobileMenuOpen} />
        
        <main className="p-4 lg:p-6 pb-20 lg:pb-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
              Sales Analytics
            </h1>
            <p className="text-text-secondary">
              Track your revenue performance and customer insights
            </p>
          </div>

          {/* Filter Controls */}
          <FilterControls
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            productCategory={productCategory}
            setProductCategory={setProductCategory}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            onExportPDF={handleExportPDF}
            onExportCSV={handleExportCSV}
          />

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metricsData.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                change={metric.change}
                changeType={metric.changeType}
                icon={metric.icon}
                color={metric.color}
              />
            ))}
          </div>

          {/* Charts Grid */}
          <div className="space-y-8">
            {/* Revenue Chart - Full Width */}
            <RevenueChart data={revenueData} timeRange={timeRange} />

            {/* Two Column Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProductPerformanceChart data={productData} />
              <TrafficSourceChart data={trafficData} />
            </div>

            {/* Geographic Chart - Full Width */}
            <GeographicChart data={geoData} />
          </div>

          {/* Mobile Insights Summary */}
          <div className="lg:hidden mt-8 bg-surface rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Insights</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Best Traffic Source</span>
                <span className="font-medium text-text-primary">WhatsApp (35%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Top Product</span>
                <span className="font-medium text-text-primary">Digital Marketing Course</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Leading State</span>
                <span className="font-medium text-text-primary">Maharashtra</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
};

export default SalesAnalytics;