
import React from 'react';
import AuthForm from '@/components/AuthForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-auth-accent/50 to-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-auth-text mb-2">Welcome to AuthDemo</h1>
        <p className="text-auth-muted max-w-md mx-auto">
          A beautiful, modern authentication system with elegant forms and smooth interactions
        </p>
      </div>
      
      <AuthForm />
      
      <div className="mt-8 text-center text-auth-muted text-sm">
        <p>© 2025 AuthDemo. All rights reserved.</p>
        <p className="mt-1">
          <a href="#" className="text-auth-primary hover:underline">Privacy Policy</a> · 
          <a href="#" className="text-auth-primary hover:underline ml-2">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default Index;
