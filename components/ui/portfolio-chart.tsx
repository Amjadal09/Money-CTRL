'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface PortfolioChartProps {
  data: Array<{ date: string; value: number }>;
  className?: string;
}

export default function PortfolioChart({ data, className = '' }: PortfolioChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-80 ${className}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="date" 
            className="text-xs"
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            className="text-xs"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border">
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-sm text-green-600">
                      القيمة: ${payload[0].value?.toLocaleString()}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ fill: '#10B981', r: 4 }}
            activeDot={{ r: 6, fill: '#10B981' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}