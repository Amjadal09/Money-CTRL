export const mockPortfolioData = {
  totalValue: 125000,
  dailyChange: 2.5,
  monthlyChange: 8.3,
  yearlyChange: 15.7,
  assets: [
    { 
      id: 1,
      name: 'Apple Inc.',
      symbol: 'AAPL',
      value: 45000,
      change: 1.2,
      shares: 120,
      price: 375.00,
      allocation: 36
    },
    { 
      id: 2,
      name: 'Alphabet Inc.',
      symbol: 'GOOGL',
      value: 32000,
      change: -0.8,
      shares: 80,
      price: 400.00,
      allocation: 25.6
    },
    { 
      id: 3,
      name: 'Tesla Inc.',
      symbol: 'TSLA',
      value: 28000,
      change: 3.1,
      shares: 140,
      price: 200.00,
      allocation: 22.4
    },
    { 
      id: 4,
      name: 'Microsoft Corp.',
      symbol: 'MSFT',
      value: 20000,
      change: 0.5,
      shares: 60,
      price: 333.33,
      allocation: 16
    }
  ],
  chartData: [
    { date: '2024-01', value: 100000 },
    { date: '2024-02', value: 108000 },
    { date: '2024-03', value: 115000 },
    { date: '2024-04', value: 112000 },
    { date: '2024-05', value: 118000 },
    { date: '2024-06', value: 125000 }
  ],
  assetAllocation: [
    { name: 'أسهم', value: 70, color: '#3B82F6' },
    { name: 'سندات', value: 20, color: '#10B981' },
    { name: 'عقارات', value: 7, color: '#F59E0B' },
    { name: 'نقد', value: 3, color: '#6B7280' }
  ],
  recentTransactions: [
    { 
      id: 1,
      type: 'شراء',
      symbol: 'AAPL',
      shares: 10,
      price: 375.00,
      date: '2024-01-15',
      total: 3750
    },
    { 
      id: 2,
      type: 'بيع',
      symbol: 'GOOGL',
      shares: 5,
      price: 400.00,
      date: '2024-01-14',
      total: 2000
    },
    { 
      id: 3,
      type: 'شراء',
      symbol: 'TSLA',
      shares: 15,
      price: 200.00,
      date: '2024-01-13',
      total: 3000
    }
  ]
};

export const featuresData = [
  {
    id: 1,
    title: 'تتبع المحفظة في الوقت الفعلي',
    description: 'راقب أداء استثماراتك لحظة بلحظة مع تحديثات مباشرة للأسعار والأرباح',
    icon: 'TrendingUp'
  },
  {
    id: 2,
    title: 'تحليل متقدم للأداء',
    description: 'احصل على رؤى عميقة حول أداء محفظتك مع تحليلات متقدمة وتقارير مفصلة',
    icon: 'BarChart3'
  },
  {
    id: 3,
    title: 'إدارة المخاطر',
    description: 'تقييم وإدارة المخاطر في محفظتك مع أدوات تحليل المخاطر المتقدمة',
    icon: 'Shield'
  },
  {
    id: 4,
    title: 'تنويع الاستثمارات',
    description: 'تحليل توزيع الأصول وضمان التنويع الأمثل لتقليل المخاطر',
    icon: 'PieChart'
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: 'المبتدئ',
    price: 0,
    period: 'شهرياً',
    features: [
      'تتبع حتى 10 أسهم',
      'تحديثات يومية',
      'تقارير أساسية',
      'دعم عبر البريد'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'المحترف',
    price: 29,
    period: 'شهرياً',
    features: [
      'تتبع غير محدود',
      'تحديثات لحظية',
      'تحليلات متقدمة',
      'تنبيهات مخصصة',
      'دعم أولوية'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'المؤسسي',
    price: 99,
    period: 'شهرياً',
    features: [
      'جميع المميزات المحترفة',
      'إدارة محافظ متعددة',
      'تقارير مخصصة',
      'API للتكامل',
      'دعم مخصص'
    ],
    popular: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    role: 'مستثمر',
    content: 'منصة رائعة ساعدتني في تتبع استثماراتي بشكل احترافي وزيادة أرباحي بنسبة 25%',
    avatar: '/api/placeholder/64/64'
  },
  {
    id: 2,
    name: 'فاطمة السعيد',
    role: 'مديرة استثمار',
    content: 'الأدوات التحليلية المتقدمة والواجهة البسيطة جعلت إدارة المحفظة أسهل بكثير',
    avatar: '/api/placeholder/64/64'
  },
  {
    id: 3,
    name: 'محمد العلي',
    role: 'رائد أعمال',
    content: 'التقارير المفصلة والتحليلات الذكية ساعدتني في اتخاذ قرارات استثمارية أفضل',
    avatar: '/api/placeholder/64/64'
  }
];