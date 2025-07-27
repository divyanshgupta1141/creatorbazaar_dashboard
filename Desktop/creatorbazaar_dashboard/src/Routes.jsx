import React from "react";
import UploadProductPage from "pages/upload-product-wizard";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import DashboardLayout from "pages/dashboard/layout";
import DashboardHome from "pages/dashboard/home";
import SalesAnalytics from "pages/dashboard/analytics";
import WorkflowAutomation from "pages/dashboard/workflows";
import PayoutsDashboard from "pages/dashboard/payouts";
import CheckoutConfiguration from "pages/dashboard/checkout";
import ProductsManagement from "pages/dashboard/products";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <RouterRoutes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Dashboard routes with layout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="home" element={<DashboardHome />} />
            <Route path="analytics" element={<SalesAnalytics />} />
            <Route path="workflows" element={<WorkflowAutomation />} />
            <Route path="payouts" element={<PayoutsDashboard />} />

            <Route path="upload-product" element={<UploadProductPage />} />

            <Route path="checkout" element={<CheckoutConfiguration />} />
            <Route path="products" element={<ProductsManagement />} />
          </Route>
          
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;