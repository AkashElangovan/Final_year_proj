import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Camera, Upload, Key } from 'lucide-react';

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Handle camera stream
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
      }
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setStep(2);
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
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="text-gray-400">Complete verification to get started</p>
          </div>

          <div className="space-y-6">
            {step === 1 && (
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
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center
                             hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400">Upload Aadhaar Card</p>
                    {previewUrl && (
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="mt-4 max-h-32 mx-auto rounded"
                      />
                    )}
                  </div>

                  <button
                    onClick={startCamera}
                    className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg
                             flex items-center justify-center space-x-2
                             hover:bg-gray-600 transition-colors"
                  >
                    <Camera className="w-5 h-5" />
                    <span>Start Face Scan</span>
                  </button>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-sm text-gray-400">
                      Please write the following OTP on a paper and take a photo holding it:
                      <span className="block text-xl font-mono text-white mt-2">
                        {Math.random().toString(36).substring(2, 8).toUpperCase()}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg
                             flex items-center justify-center space-x-2 transform transition-all duration-300
                             hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                  >
                    <span>Complete Verification</span>
                  </button>
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <button 
                  onClick={() => navigate('/login')}
                  className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}