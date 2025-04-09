
import React from 'react';

interface AuthToggleProps {
  activeTab: 'login' | 'signup';
  onToggle: (tab: 'login' | 'signup') => void;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ activeTab, onToggle }) => {
  return (
    <div className="flex w-full mb-6 bg-gray-100 rounded-lg p-1">
      <button
        type="button"
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
          activeTab === 'login'
            ? 'bg-white text-auth-text shadow-sm'
            : 'text-auth-muted hover:text-auth-text'
        }`}
        onClick={() => onToggle('login')}
      >
        Sign In
      </button>
      <button
        type="button"
        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
          activeTab === 'signup'
            ? 'bg-white text-auth-text shadow-sm'
            : 'text-auth-muted hover:text-auth-text'
        }`}
        onClick={() => onToggle('signup')}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthToggle;
