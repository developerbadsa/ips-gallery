import React from 'react';

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, price, features, isPopular = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 relative ${isPopular ? 'border-4 border-blue-500 transform scale-105' : 'border border-gray-200'}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
            জনপ্রিয়
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-blue-600">{price}</span>
        <span className="text-gray-600 ml-2">টাকা</span>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <a 
        href="https://wa.me/8801917834820" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-center block hover:bg-green-600 transition-colors"
      >
        WhatsApp করুন
      </a>
    </div>
  );
};

export default PackageCard;