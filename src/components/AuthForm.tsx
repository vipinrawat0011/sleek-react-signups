
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import SkincareSignupForm from './SkincareSignupForm';
import AuthToggle from './AuthToggle';

const AuthForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'skincare'>('skincare');

  const handleToggle = (tab: 'login' | 'signup' | 'skincare') => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="p-6 bg-white rounded-2xl shadow-lg border border-[#F2FCE2]">
        <AuthToggle activeTab={activeTab} onToggle={handleToggle} />
        {activeTab === 'login' && <LoginForm />}
        {activeTab === 'signup' && <SignupForm />}
        {activeTab === 'skincare' && <SkincareSignupForm />}
      </div>
    </div>
  );
};

export default AuthForm;
