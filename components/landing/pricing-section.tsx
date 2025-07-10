'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { pricingPlans } from '@/lib/mock-data';

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            خطط تسعير تناسب احتياجاتك
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ابدأ مجاناً أو اختر الخطة التي تناسب حجم محفظتك الاستثمارية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    الأكثر شعبية
                  </div>
                </div>
              )}
              
              <Card className={`h-full ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-xl' 
                  : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700'
              }`}>
                <CardHeader className="text-center pb-4">
                  <h3 className={`text-2xl font-bold ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className={`text-4xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${
                      plan.popular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${
                          plan.popular ? 'text-green-300' : 'text-green-500'
                        }`} />
                        <span className={`text-sm ${
                          plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                    size="lg"
                  >
                    {plan.price === 0 ? 'ابدأ مجاناً' : 'اشترك الآن'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}