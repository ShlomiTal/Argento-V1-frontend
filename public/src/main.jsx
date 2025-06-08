import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const logos = ['🪙', '₿', 'Ξ', '🚀', '💰'];

function App() {
  const [showLogo, setShowLogo] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLogo(true), 3000);
    const timer2 = setTimeout(() => setShowDashboard(true), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (showDashboard) return <div className="dashboard">Welcome to Argento Dashboard</div>;

  return (
    <div className="splash">
      {logos.map((logo, index) => (
        <div className="coin" key={index} style={{ left: `${Math.random() * 100}%` }}>{logo}</div>
      ))}
      {showLogo && <div className="argento-logo">ARGENTO 🚀</div>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);