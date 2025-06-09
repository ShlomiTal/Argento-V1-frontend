import React from 'react';
import { useTranslation } from 'react-i18next';

const UpgradeButton = () => {
  const { t } = useTranslation();

  return (
    <button className="upgrade-button">
      {t('upgrade.button')}
    </button>
  );
};

export default UpgradeButton;