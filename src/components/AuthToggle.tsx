
import React from 'react';

interface AuthToggleProps {
  activeTab: 'login' | 'signup' | 'skincare';
  onToggle: (tab: 'login' | 'signup' | 'skincare') => void;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ activeTab, onToggle }) => {
  return (
    <div className="flex w-full mb-6 bg-[#F2FCE2] rounded-lg p-1">
      <button
        type="button"
        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
          activeTab === 'login'
            ? 'bg-white text-[#7E69AB] shadow-sm'
            : 'text-[#8E9196] hover:text-[#7E69AB]'
        }`}
        onClick={() => onToggle('login')}
      >
        Sign In
      </button>
      <button
        type="button"
        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
          activeTab === 'signup'
            ? 'bg-white text-[#7E69AB] shadow-sm'
            : 'text-[#8E9196] hover:text-[#7E69AB]'
        }`}
        onClick={() => onToggle('signup')}
      >
        Sign Up
      </button>
      <button
        type="button"
        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
          activeTab === 'skincare'
            ? 'bg-white text-[#7E69AB] shadow-sm'
            : 'text-[#8E9196] hover:text-[#7E69AB]'
        }`}
        onClick={() => onToggle('skincare')}
      >
        Skincare
      </button>
    </div>
  );
};

export default AuthToggle;
