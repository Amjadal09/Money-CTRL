'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import AnimatedNumber from './ui/animated-number';

interface PortfolioSummaryCardProps {
  title: string;
  value: number;
  change: number;
  changeType: 'currency' | 'percentage';
  icon?: React.ReactNode;
  className?: string;
}

export default function PortfolioSummaryCard({
  title,
  value,
  change,
  changeType,
  icon,
  className = ''
}: PortfolioSummaryCardProps) {
  const isPositive = change >= 0;
  const formatCurrency = (val: number) => `$${val.toLocaleString()}`;
  const formatPercentage = (val: number) => `${val.toFixed(1)}%`;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
    >
      <Card className="glass-card backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-white/20 hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {icon}
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h3>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              isPositive 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {changeType === 'currency' ? formatCurrency(Math.abs(change)) : formatPercentage(Math.abs(change))}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              <AnimatedNumber 
                value={value} 
                format={changeType === 'currency' ? formatCurrency : formatPercentage}
              />
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((value / 150000) * 100, 100)}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}