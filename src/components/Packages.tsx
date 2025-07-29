import React from 'react';
import PackageCard from './PackageCard';

const Packages: React.FC = () => {
  const packages = [
    {
      title: "বেসিক IPS",
      price: "৭,০০০",
      features: [
        "৬০০VA ক্ষমতা",
        "২-৩ ঘন্টা ব্যাকআপ",
        "LED/CFL বাল্ব চালানো যায়",
        "১ বছর ওয়ারেন্টি",
        "ফ্রি ইনস্টলেশন"
      ]
    },
    {
      title: "স্ট্যান্ডার্ড IPS",
      price: "১২,০০০",
      features: [
        "১০০০VA ক্ষমতা",
        "৪-৫ ঘন্টা ব্যাকআপ",
        "ফ্যান + লাইট চালানো যায়",
        "২ বছর ওয়ারেন্টি",
        "ফ্রি ইনস্টলেশন",
        "২৪/৭ সাপোর্ট"
      ],
      isPopular: true
    },
    {
      title: "প্রিমিয়াম IPS",
      price: "১৮,০০০",
      features: [
        "১৫০০VA ক্ষমতা",
        "৬-৮ ঘন্টা ব্যাকআপ",
        "ফ্যান + লাইট + TV চালানো যায়",
        "৩ বছর ওয়ারেন্টি",
        "ফ্রি ইনস্টলেশন",
        "২৪/৭ সাপোর্ট",
        "ফ্রি মেইনটেনেন্স"
      ]
    }
  ];

  return (
    <section id="packages" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          আমাদের IPS প্যাকেজসমূহ
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              isPopular={pkg.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;