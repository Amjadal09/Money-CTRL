'use client';

import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { mockPortfolioData } from '@/lib/mock-data';

export default function AssetTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-900 dark:text-white">
            الأصول في المحفظة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">الأصل</TableHead>
                  <TableHead className="text-right">الأسهم</TableHead>
                  <TableHead className="text-right">السعر</TableHead>
                  <TableHead className="text-right">القيمة</TableHead>
                  <TableHead className="text-right">التغيير</TableHead>
                  <TableHead className="text-right">التوزيع</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPortfolioData.assets.map((asset) => (
                  <motion.tr
                    key={asset.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {asset.symbol}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {asset.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{asset.shares}</TableCell>
                    <TableCell>${asset.price.toFixed(2)}</TableCell>
                    <TableCell className="font-semibold">
                      ${asset.value.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className={`flex items-center gap-1 ${
                        asset.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {asset.change >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {asset.change >= 0 ? '+' : ''}{asset.change}%
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${asset.allocation}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{asset.allocation}%</span>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}