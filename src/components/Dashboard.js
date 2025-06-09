import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = ({ balance, tradeLimit }) => {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <h2>{t('dashboard.title')}</h2>
      <p>{t('dashboard.balance')}: {balance || t('dashboard.loading')}</p>
      <p>{t('dashboard.tradeLimit', { count: tradeLimit })}</p>
    </div>
  );
};

export default Dashboard;