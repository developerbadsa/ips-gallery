import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const visits = JSON.parse(localStorage.getItem('visits') || '[]');

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Visitor Logs ({visits.length} visits)</h1>
          <Button onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left">Timestamp</th>
                    <th className="px-4 py-3 text-left">User Agent</th>
                    <th className="px-4 py-3 text-left">Referrer</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.map((visit: any, index: number) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3">
                        {new Date(visit.timestamp).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {visit.userAgent}
                      </td>
                      <td className="px-4 py-3">
                        {visit.referrer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;