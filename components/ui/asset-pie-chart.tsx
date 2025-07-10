'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

interface AssetPieChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  className?: string;
}

export default function AssetPieChart({ data, className = '' }: AssetPieChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-80 ${className}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border">
                    <p className="text-sm font-medium">{payload[0].name}</p>
                    <p className="text-sm text-blue-600">
                      النسبة: {payload[0].value}%
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}