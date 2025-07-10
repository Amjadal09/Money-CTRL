'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, BarChart3, Shield, PieChart } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'تتبع المحفظة في الوقت الفعلي',
    description: 'راقب أداء استثماراتك لحظة بلحظة مع تحديثات مباشرة للأسعار والأرباح'
  },
  {
    icon: BarChart3,
    title: 'تحليل متقدم للأداء',
    description: 'احصل على رؤى عميقة حول أداء محفظتك مع تحليلات متقدمة وتقارير مفصلة'
  },
  {
    icon: Shield,
    title: 'إدارة المخاطر',
    description: 'تقييم وإدارة المخاطر في محفظتك مع أدوات تحليل المخاطر المتقدمة'
  },
  {
    icon: PieChart,
    title: 'تنويع الاستثمارات',
    description: 'تحليل توزيع الأصول وضمان التنويع الأمثل لتقليل المخاطر'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            مميزات متقدمة لإدارة استثماراتك
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            استخدم أدواتنا المتطورة لتحليل محفظتك الاستثمارية واتخاذ قرارات مدروسة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}