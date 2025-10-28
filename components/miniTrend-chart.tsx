"use client"
import { useState, useEffect, useRef } from 'react';
import { Users, Zap, RefreshCw } from 'lucide-react';

const AnimatedNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    let current = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, [value]);

  const suffix = value.includes('%') ? '%' : value.includes('x') ? 'x' : '';
  const prefix = value.includes('+') ? '+' : '';
  
  return <>{prefix}{displayValue}{suffix}</>;
};

const MiniTrendChart = ({ animate, value }: { animate: boolean; value: number }) => {
  // Generate points based on the value (scale 0-100)
  const scale = Math.min(value / 100, 1);
  const points = [
    { x: 0, y: 45 },
    { x: 15, y: 42 - 15 * scale },
    { x: 30, y: 40 - 20 * scale },
    { x: 42, y: 38 - 22 * scale },
    { x: 50, y: 30 - 30 * scale },
    { x: 65, y: 28 - 28 * scale },
    { x: 80, y: 18 - 18 * scale },
    { x: 95, y: 12 - 12 * scale },
    { x: 110, y: 5 - 5 * scale },
    { x: 120, y: 0 }
  ];
  
  const pathString = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaString = `${pathString} L 120 50 L 0 50 Z`;

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
      
      <path
        d={areaString}
        fill="url(#areaGradient)"
        className="transition-all duration-5000 ease-out"
        style={{
          opacity: animate ? 1 : 0
        }}
      />
      
      <path
        d={pathString}
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

export default function MetricsGrid() {
  // CHANGE METRICS HERE
  const metricsData = [
    { value: "200%", label: "Active Users", numValue: 200, icon: Users },
    { value: "3x", label: "Onboarding Speed", numValue: 75 , icon: Zap },
    { value: "+40%", label: "Repeat Txn", numValue: 40 , icon: RefreshCw }
  ];

  const [animate, setAnimate] = useState(false);
  const [metrics, setMetrics] = useState(metricsData);
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(container);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMetrics(metricsData);
  }, [JSON.stringify(metricsData)]);

  
  return (
    <div ref={ref}>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
          
          <div key={index} className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex-1">
                <div className="text-4xl font-bold text-[#004bab]">
                  <AnimatedNumber value={metric.value} />
                </div>
                
              </div>
              <div className="flex items-center">
                <MiniTrendChart animate={animate} value={metric.numValue} />
              </div>
              <div className="flex gap-3 items-start">
                <Icon className="w-5 h-5 text-blue-600 shrink-0 mt-1.5" />
                <div className="text-m text-slate-600 mt-1">{metric.label}</div>
              </div>
            </div>
          </div>
        )
        }
        
        )}
      </div>
    </div>
  );
}