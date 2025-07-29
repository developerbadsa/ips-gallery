import { useEffect } from 'react';

export const useVisitorTracking = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Simple localStorage tracking as fallback
        const visits = JSON.parse(localStorage.getItem('visits') || '[]');
        const newVisit = {
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'Direct',
          timestamp: new Date().toISOString()
        };
        visits.push(newVisit);
        localStorage.setItem('visits', JSON.stringify(visits));
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    trackVisit();
  }, []);
};