
import React from 'react';
import AuthForm from '@/components/AuthForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDE1D3] to-[#FFDEE2] flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#7E69AB] mb-2 font-playfair">GlowEssence</h1>
        <p className="text-[#8E9196] max-w-md mx-auto">
          Discover your perfect skincare routine with personalized products tailored to your unique skin
        </p>
      </div>
      
      <AuthForm />
      
      <div className="mt-8 text-center text-[#8E9196] text-sm">
        <p>© 2025 GlowEssence. All rights reserved.</p>
        <p className="mt-1">
          <a href="#" className="text-[#9b87f5] hover:underline">Privacy Policy</a> · 
          <a href="#" className="text-[#9b87f5] hover:underline ml-2">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default Index;
