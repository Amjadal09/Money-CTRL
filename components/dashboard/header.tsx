'use client';

import { motion } from 'framer-motion';
import { Bell, Search, Sun, Moon, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="البحث في المحفظة..."
              className="pl-10 w-64 bg-gray-50 dark:bg-gray-800 border-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>

          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/api/placeholder/32/32" alt="صورة المستخدم" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium text-gray-900 dark:text-white">أحمد محمد</div>
              <div className="text-gray-500 dark:text-gray-400">مستثمر</div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}