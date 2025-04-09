
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import AuthToggle from './AuthToggle';

const AuthForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const handleToggle = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
        <AuthToggle activeTab={activeTab} onToggle={handleToggle} />
        {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default AuthForm;
