import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, DollarSign } from 'lucide-react';

const Home = () => {
  const featuresRef = useRef(null);
  const [highlight, setHighlight] = useState(false);

  const handleLearnMore = () => {
    if (featuresRef.current) {
      setHighlight(true);
      featuresRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setHighlight(false), 1200);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-400/20 rounded-3xl blur-2xl -z-10" />
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">QuickLoan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Apply for a loan quickly and easily. Get approved in minutes with our streamlined process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/apply"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-all duration-200 shadow-lg hover:scale-105 animate-bounce-slow"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              className="text-blue-700 hover:text-indigo-700 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div
        ref={featuresRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-12 scroll-mt-24 transition-all duration-700 ${highlight ? 'animate-section-highlight' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose QuickLoan?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the fastest, most secure way to get the funding you need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 border-t-4 border-blue-400">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Approval</h3>
            <p className="text-gray-600">Get approved in as little as 15 minutes with our automated system</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 border-t-4 border-green-400">
            <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Process</h3>
            <p className="text-gray-600">Simple online application that takes less than 10 minutes to complete</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 border-t-4 border-purple-400">
            <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Safe</h3>
            <p className="text-gray-600">Bank-level security with 256-bit encryption to protect your data</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 border-t-4 border-orange-400">
            <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Rates</h3>
            <p className="text-gray-600">Get the best rates in the market with flexible repayment options</p>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$10M+</div>
              <div className="text-gray-600">Loans Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Approval Rate</div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who got their loans approved quickly and easily
          </p>
          <Link
            to="/apply"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-all duration-200 shadow-lg hover:scale-105"
          >
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;