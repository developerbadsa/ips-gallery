import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/xpwagqvv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          _replyto: 'ips.gallery@gmail.com'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          যোগাযোগ করুন
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              নাম *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="আপনার নাম লিখুন"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              ফোন নম্বর *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="০১৭xxxxxxxx"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              বার্তা
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="আপনার বার্তা লিখুন..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
          </button>
          
          {submitStatus === 'success' && (
            <p className="text-green-600 text-center">আপনার বার্তা সফলভাবে পাঠানো হয়েছে!</p>
          )}
          
          {submitStatus === 'error' && (
            <p className="text-red-600 text-center">কিছু ভুল হয়েছে। আবার চেষ্টা করুন।</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;