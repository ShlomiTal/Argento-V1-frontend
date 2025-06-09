import React from 'react';
import { useTranslation } from 'react-i18next';

const TradeForm = () => {
  const { t } = useTranslation();

  return (
    <div className="trade-form">
      <h3>{t('trade.form.title')}</h3>
      <input type="text" placeholder={t('trade.form.pair')} />
      <input type="number" placeholder={t('trade.form.amount')} />
      <select>
        <option value="buy">{t('trade.form.buy')}</option>
        <option value="sell">{t('trade.form.sell')}</option>
      </select>
      <button>{t('trade.form.submit')}</button>
    </div>
  );
};

export default TradeForm;