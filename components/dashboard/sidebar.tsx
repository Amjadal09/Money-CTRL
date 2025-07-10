'use client';

import { motion } from 'framer-motion';
import { 
  Home, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Settings, 
  User,
  Bell,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const navItems = [
  { icon: Home, label: 'لوحة التحكم', href: '/dashboard' },
  { icon: BarChart3, label: 'المحفظة', href: '/dashboard' },
  { icon: PieChart, label: 'التوزيع', href: '/dashboard' },
  { icon: TrendingUp, label: 'الأداء', href: '/dashboard' },
  { icon: Bell, label: 'التنبيهات', href: '/dashboard' },
  { icon: User, label: 'الملف الشخصي', href: '/dashboard' },
  { icon: Settings, label: 'الإعدادات', href: '/dashboard' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            محفظتي
          </h1>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
          >
            <LogOut className="w-5 h-5" />
            تسجيل الخروج
          </Button>
        </div>
      </div>
    </motion.aside>
  );
}