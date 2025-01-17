import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fingerprint, Shield, Key } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
      }
      
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <Shield className="w-12 h-12 text-blue-500 animate-float" />
            </div>
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-400">Login to verify your identity securely</p>
          </div>

          <div className="space-y-6">
            <button
              onClick={connectWallet}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg
                         flex items-center justify-center space-x-2 transform transition-all duration-300
                         hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Key className="w-5 h-5" />
              <span>{isLoading ? 'Connecting...' : 'Connect with MetaMask'}</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">or</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <button 
                  onClick={() => navigate('/signup')}
                  className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="bg-gray-700/50 p-3 rounded-lg mb-2">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-sm text-gray-400">Secure</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-700/50 p-3 rounded-lg mb-2">
                  <Fingerprint className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-sm text-gray-400">Private</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}