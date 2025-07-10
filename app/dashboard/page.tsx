'use client';

import { motion } from 'framer-motion';
import { Wallet, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import PortfolioSummaryCard from '@/components/portfolio-summary-card';
import PortfolioChart from '@/components/ui/portfolio-chart';
import AssetPieChart from '@/components/ui/asset-pie-chart';
import AssetTable from '@/components/dashboard/asset-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockPortfolioData } from '@/lib/mock-data';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          لوحة التحكم
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          نظرة عامة على محفظتك الاستثمارية
        </p>
      </motion.div>

      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PortfolioSummaryCard
          title="إجمالي القيمة"
          value={mockPortfolioData.totalValue}
          change={mockPortfolioData.dailyChange * 1000}
          changeType="currency"
          icon={<Wallet className="w-6 h-6 text-blue-500" />}
        />
        <PortfolioSummaryCard
          title="الأرباح اليومية"
          value={mockPortfolioData.dailyChange}
          change={mockPortfolioData.dailyChange}
          changeType="percentage"
          icon={<TrendingUp className="w-6 h-6 text-green-500" />}
        />
        <PortfolioSummaryCard
          title="الأرباح الشهرية"
          value={mockPortfolioData.monthlyChange}
          change={mockPortfolioData.monthlyChange}
          changeType="percentage"
          icon={<DollarSign className="w-6 h-6 text-purple-500" />}
        />
        <PortfolioSummaryCard
          title="الأرباح السنوية"
          value={mockPortfolioData.yearlyChange}
          change={mockPortfolioData.yearlyChange}
          changeType="percentage"
          icon={<PieChart className="w-6 h-6 text-orange-500" />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">
              أداء المحفظة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioChart data={mockPortfolioData.chartData} />
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
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

      {/* Assets Table */}
      <AssetTable />

      {/* Recent Transactions */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900 dark:text-white">
            آخر المعاملات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPortfolioData.recentTransactions.map((transaction) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    transaction.type === 'شراء' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {transaction.type} {transaction.shares} أسهم من {transaction.symbol}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {transaction.date}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    ${transaction.total.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    ${transaction.price.toFixed(2)} للسهم
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}