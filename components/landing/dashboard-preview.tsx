'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PortfolioChart from '@/components/ui/portfolio-chart';
import AssetPieChart from '@/components/ui/asset-pie-chart';
import { mockPortfolioData } from '@/lib/mock-data';

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            لوحة التحكم المتقدمة
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            واجهة سهلة الاستخدام تجمع كل ما تحتاجه لإدارة محفظتك الاستثمارية
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Portfolio Value Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-gray-600 dark:text-gray-300">
                    إجمالي القيمة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${mockPortfolioData.totalValue.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    +{mockPortfolioData.dailyChange}% اليوم
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-gray-600 dark:text-gray-300">
                    الأرباح الشهرية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    +{mockPortfolioData.monthlyChange}%
                  </div>
                  <div className="text-sm text-blue-600 mt-1">
                    ${(mockPortfolioData.totalValue * mockPortfolioData.monthlyChange / 100).toLocaleString()}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-gray-600 dark:text-gray-300">
                    الأرباح السنوية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    +{mockPortfolioData.yearlyChange}%
                  </div>
                  <div className="text-sm text-purple-600 mt-1">
                    ${(mockPortfolioData.totalValue * mockPortfolioData.yearlyChange / 100).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Portfolio Chart */}
            <div className="lg:col-span-2">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    أداء المحفظة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PortfolioChart data={mockPortfolioData.chartData} />
                </CardContent>
              </Card>
            </div>

            {/* Asset Allocation */}
            <div className="lg:col-span-1">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    توزيع الأصول
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AssetPieChart data={mockPortfolioData.assetAllocation} />
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}