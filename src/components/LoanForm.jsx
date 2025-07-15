import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, DollarSign, Calendar, Briefcase } from 'lucide-react';

const LoanForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: '',
    loanDuration: '',
    income: '',
    employmentType: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Full Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.phone) newErrors.phone = 'Phone Number is required';
    if (!form.loanType) newErrors.loanType = 'Loan Type is required';
    if (!form.loanAmount) newErrors.loanAmount = 'Loan Amount is required';
    if (!form.loanDuration) newErrors.loanDuration = 'Loan Duration is required';
    if (!form.income) newErrors.income = 'Monthly Income is required';
    if (!form.employmentType) newErrors.employmentType = 'Employment Type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Optionally, send data to backend here
      navigate('/confirmation');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Loan Application</h2>
          <p className="text-gray-600">Fill out the form below to apply for your loan</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="text-xs text-red-500 ml-2">{errors.name}</span>}
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="text-xs text-red-500 ml-2">{errors.email}</span>}
                </div>
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="text-xs text-red-500 ml-2">{errors.phone}</span>}
              </div>
            </div>
          </div>
          {/* Loan Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2">
              Loan Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Type
                </label>
                <select
                  name="loanType"
                  value={form.loanType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.loanType ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                >
                  <option value="">Select loan type</option>
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                </select>
                {errors.loanType && <span className="text-xs text-red-500 ml-2">{errors.loanType}</span>}
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="loanAmount"
                    value={form.loanAmount}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.loanAmount ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder="Enter loan amount"
                  />
                  {errors.loanAmount && <span className="text-xs text-red-500 ml-2">{errors.loanAmount}</span>}
                </div>
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Duration (months)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="loanDuration"
                  value={form.loanDuration}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border ${errors.loanDuration ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="Enter duration in months"
                />
                {errors.loanDuration && <span className="text-xs text-red-500 ml-2">{errors.loanDuration}</span>}
              </div>
            </div>
          </div>
          {/* Employment Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2">
              Employment Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="income"
                    value={form.income}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.income ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                    placeholder="Enter monthly income"
                  />
                  {errors.income && <span className="text-xs text-red-500 ml-2">{errors.income}</span>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Type
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    name="employmentType"
                    value={form.employmentType}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.employmentType ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  >
                    <option value="">Select employment type</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.employmentType && <span className="text-xs text-red-500 ml-2">{errors.employmentType}</span>}
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;