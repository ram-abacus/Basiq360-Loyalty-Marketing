"use client"
import { useState, useEffect } from 'react';
import { Users, Zap, RefreshCw } from 'lucide-react';

export const AnimatedNumber = ({ value, shouldAnimate = true , className = ""}: { value: string; shouldAnimate?: boolean; className?: string}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (!shouldAnimate) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 1;
    const hasDecimals = value.includes('.');
    let current = 0;
    const increment = Math.max(numericValue / 50, 0.05);
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(hasDecimals ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, [shouldAnimate, value]);

  const suffix = value.includes('%') ? '%' : value.includes('x') ? 'x' : value.includes('k') ? 'k' : '';
  const prefix = value.includes('+') ? '+' : '';
  
  return <span className={className}>{prefix}{displayValue}{suffix}</span>;
};

const MiniTrendChart = ({ animate }: { animate: boolean }) => {
  return (
    <svg viewBox="0 0 120 50" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Gradient fill under line */}
      <path
        d="M 0 45 L 15 42 L 30 40 L 42 38 L 50 30 L 65 28 L 80 18 L 95 12 L 110 5 L 120 0 L 120 50 L 0 50 Z"
        fill="url(#areaGradient)"
        className="transition-all duration-1500 ease-out"
        style={{
          opacity: animate ? 1 : 0
        }}
      />
      
      {/* Trend line path */}
      <path
        d="M 0 45 L 15 42 L 30 40 L 42 38 L 50 30 L 65 28 L 80 18 L 95 12 L 110 5 L 120 0"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-1500 ease-out"
        style={{
          strokeDasharray: '200',
          strokeDashoffset: animate ? '0' : '200'
        }}
      />
    </svg>
  );
};

const MetricCard = ({ 
  icon: Icon, 
  title, 
  value, 
  subtitle
}: { 
  icon: any; 
  title: string; 
  value: string; 
  subtitle: string;
}) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Icon className="w-5 h-5 text-[#004bab]" />
            <div className="text-sm font-medium text-slate-600">{title}</div>
          </div>
          <div className="text-5xl font-bold text-[#004bab] mb-1">
            <AnimatedNumber value={value} />
          </div>
          <div className="text-sm text-slate-500">{subtitle}</div>
        </div>
        <div className="w-40 h-20 flex items-center">
          <MiniTrendChart animate={animate} />
        </div>
      </div>
    </div>
  );
};

export default function RTBHighlights() {
  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Your Growth Plan in Numbers — Visualized.
          </h1>
          <p className="text-xl text-slate-600">
            See how your loyalty strategy transforms users into brand advocates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={Users}
            title="Active Users"
            value="200%"
            subtitle="QoQ Growth"
          />
          <MetricCard
            icon={Zap}
            title="Onboarding Speed"
            value="3x"
            subtitle="Activation Faster"
          />
          <MetricCard
            icon={RefreshCw}
            title="Repeat Transactions"
            value="+40%"
            subtitle="6-Month Uplift"
          />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <span className="text-lg font-semibold text-slate-900">
              Want your own 90-day projection?
            </span>
            <button className="bg-[#004bab] hover:bg-[#003d8f] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg">
              Get a free strategy session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}