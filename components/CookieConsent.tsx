"use client"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3, Settings, Sparkles } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

type PreferenceKey = keyof CookiePreferences;

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(rejected));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const togglePreference = (key: PreferenceKey) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-end">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => !showDetails && setIsVisible(false)}
      />
      
      <div className="relative w-full bg-black border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Cookie Settings</h2>
                <p className="text-blue-100 text-xs">Your privacy matters</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-all"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-5 bg-black">
          {!showDetails ? (
            <>
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="text-gray-300 text-sm flex-1">
                  We use cookies to enhance your experience and analyze traffic.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:shadow-lg hover:shadow-blue-500/30 transition-all whitespace-nowrap"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-gray-800 transition-all whitespace-nowrap"
                  >
                    Reject
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-800">
                <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 text-xs hover:underline">
                  Privacy Policy
                </Link>
                <span className="text-gray-700">•</span>
                <Link href="/cookies" className="text-blue-400 hover:text-blue-300 text-xs hover:underline">
                  Cookie Policy
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2 scrollbar-custom mb-5">
                {/* Necessary Cookies */}
                <div className="border border-green-500/30 rounded-lg p-3 bg-green-500/5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-white">Necessary</h3>
                        <p className="text-xs text-gray-400">Essential for site functionality</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-5 bg-green-500 rounded-full relative flex items-center">
                        <div className="w-4 h-4 bg-white rounded-full ml-auto mr-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-700 rounded-lg p-3 hover:border-blue-500/50 transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <BarChart3 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-white">Analytics</h3>
                        <p className="text-xs text-gray-400">Track website interactions</p>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className="flex-shrink-0"
                    >
                      <div className={`w-10 h-5 rounded-full relative flex items-center transition-all ${
                        preferences.analytics ? 'bg-blue-500' : 'bg-gray-700'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.analytics ? 'ml-auto mr-0.5' : 'ml-0.5'
                        }`} />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-700 rounded-lg p-3 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-white">Marketing</h3>
                        <p className="text-xs text-gray-400">Personalized advertisements</p>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className="flex-shrink-0"
                    >
                      <div className={`w-10 h-5 rounded-full relative flex items-center transition-all ${
                        preferences.marketing ? 'bg-purple-500' : 'bg-gray-700'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.marketing ? 'ml-auto mr-0.5' : 'ml-0.5'
                        }`} />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Preferences Cookies */}
                <div className="border border-gray-700 rounded-lg p-3 hover:border-indigo-500/50 transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Settings className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-white">Preferences</h3>
                        <p className="text-xs text-gray-400">Remember your settings</p>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePreference('preferences')}
                      className="flex-shrink-0"
                    >
                      <div className={`w-10 h-5 rounded-full relative flex items-center transition-all ${
                        preferences.preferences ? 'bg-indigo-500' : 'bg-gray-700'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.preferences ? 'ml-auto mr-0.5' : 'ml-0.5'
                        }`} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-lg font-semibold text-xs hover:bg-gray-800 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-2 rounded-lg font-semibold text-xs hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #1f1f1f;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
}