import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          গরমের বিদ্যুৎ সমস্যা?
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-300">
          এখনই কিনুন IPS!
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          ডিজিটাল হোম IPS শুরু মাত্র ৭ হাজার টাকা থেকে
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#packages" 
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            প্যাকেজ দেখুন
          </a>
          <a 
            href="https://wa.me/8801917834820" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors"
          >
            WhatsApp করুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;