import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';

const Index: React.FC = () => {
  useVisitorTracking();
  
  return <AppLayout />;
};

export default Index;