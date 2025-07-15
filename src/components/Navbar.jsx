import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Shield } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide drop-shadow">QuickLoan</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/')
                    ? 'bg-white text-blue-700 shadow font-bold scale-105'
                    : 'text-white hover:bg-white/20 hover:scale-105 hover:text-yellow-200'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/apply"
                className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/apply')
                    ? 'bg-white text-blue-700 shadow font-bold scale-105'
                    : 'text-white hover:bg-white/20 hover:scale-105 hover:text-yellow-200'
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>Apply</span>
              </Link>
              <Link
                to="/admin"
                className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/admin')
                    ? 'bg-white text-blue-700 shadow font-bold scale-105'
                    : 'text-white hover:bg-white/20 hover:scale-105 hover:text-yellow-200'
                }`}
              >
                <Shield className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>  
  );
};

export default Navbar;