import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useNavigation = () => {
  // Check if we're in a Router context
  let navigate, location;
  
  try {
    navigate = useNavigate();
    location = useLocation();
  } catch (error) {
    // If hooks fail, provide fallback behavior
    console.warn('useNavigation called outside Router context');
    return {
      activeRoute: '/dashboard-home',
      mobileMenuOpen: false,
      sidebarCollapsed: false,
      toggleMobileMenu: () => {},
      toggleSidebar: () => {},
      navigateTo: (path) => {
        // Fallback to window.location for navigation
        window.location.href = path;
      }
    };
  }

  const [activeRoute, setActiveRoute] = useState('/dashboard-home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (location?.pathname) {
      setActiveRoute(location.pathname);
    }
  }, [location?.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const navigateTo = (path) => {
    if (navigate) {
      navigate(path);
      setActiveRoute(path);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return {
    activeRoute,
    mobileMenuOpen,
    sidebarCollapsed,
    toggleMobileMenu,
    toggleSidebar,
    navigateTo
  };
};

export default useNavigation;