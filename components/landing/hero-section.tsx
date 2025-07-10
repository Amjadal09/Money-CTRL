'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            إدارة محفظتك الاستثمارية
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}بذكاء
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            تتبع استثماراتك، حلل الأداء، وأتخذ قرارات استثمارية ذكية مع منصتنا المتقدمة 
            التي تجمع بين البساطة والقوة في مكان واحد
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                ابدأ الآن مجاناً
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold backdrop-blur-sm"
            >
              شاهد العرض التوضيحي
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+50K</div>
              <div className="text-gray-300">مستثمر نشط</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$2.5B</div>
              <div className="text-gray-300">قيمة المحافظ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">وقت التشغيل</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/3 right-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <TrendingUp className="w-8 h-8 text-green-400" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-1/3 left-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <BarChart3 className="w-8 h-8 text-blue-400" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Shield className="w-8 h-8 text-purple-400" />
        </div>
      </motion.div>
    </section>
  );
}