import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">IPS Gallery</h3>
            <p className="text-gray-300 mb-4">
              বাংলাদেশের সেরা IPS সরবরাহকারী। আমরা সর্বোচ্চ মানের IPS এবং সেবা প্রদান করি।
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold">ফোন:</span> 01917834820
              </p>
              <p>
                <span className="font-semibold">ইমেইল:</span> ips.gallery@gmail.com
              </p>
              <p>
                <span className="font-semibold">ওয়েবসাইট:</span> ips-gallery.vercel.app
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">সেবা</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• IPS বিক্রয়</li>
              <li>• ফ্রি ইনস্টলেশন</li>
              <li>• ২৪/১৭ সাপোর্ট</li>
              <li>• মেইনটেনেন্স সেবা</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 IPS Gallery. সকল অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;