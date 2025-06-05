import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Wallet, TrendingUp, BrainCircuit, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const features = [
    {
      title: 'מסחר',
      path: '/trading',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'מסחר ב-Spot וב-Futures'
    },
    {
      title: 'Argento AI',
      path: '/ai',
      icon: <BrainCircuit className="w-6 h-6" />,
      description: 'ניתוח בינה מלאכותית ולמידת שוק'
    },
    {
      title: 'יעד כלכלי',
      path: '/goal',
      icon: <Target className="w-6 h-6" />,
      description: 'בנה מסלול מ-500 ל-50K'
    },
    {
      title: 'ארנק',
      path: '/wallet',
      icon: <Wallet className="w-6 h-6" />,
      description: 'גישה לארנק Bitcoin, Solana ועוד'
    }
  ];

  const statsData = [
    { name: 'יום 1', value: 120 },
    { name: 'יום 2', value: 210 },
    { name: 'יום 3', value: 160 },
    { name: 'יום 4', value: 300 },
    { name: 'יום 5', value: 260 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">לוח מחוונים Argento</h1>

      <div className="bg-white dark:bg-muted p-4 rounded-xl shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-2">סטטיסטיקות יומיות</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={statsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, path, icon, description }) => (
          <Card key={title} className="rounded-2xl shadow-md hover:shadow-xl transition-all">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="mb-4 text-primary">{icon}</div>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{description}</p>
              <Link to={path}>
                <Button>כניסה</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;