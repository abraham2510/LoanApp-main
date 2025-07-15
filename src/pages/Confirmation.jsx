import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Clock } from 'lucide-react';

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="bg-green-100 p-4 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you. Your loan application has been received and is being processed.
          </p>

          {/* Application Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Review Process</p>
                  <p className="text-sm text-gray-600">Our team will review your application within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Approval Notification</p>
                  <p className="text-sm text-gray-600">You'll receive an email with the decision</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Home className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Fund Disbursement</p>
                  <p className="text-sm text-gray-600">Approved funds will be transferred to your account</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reference Number */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-800 font-medium">Application Reference</p>
            <p className="text-lg font-mono text-blue-900">QL-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors">
              Track Application Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;