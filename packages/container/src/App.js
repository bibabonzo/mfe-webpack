import React, { useState, useEffect } from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "marketingAppPricingClicked",
      (data) => {
        const { newCount } = data.detail;

        setCount(newCount);
      }
    );
  }, []);

  return <div>
    <h1>Hi there!!! { count }</h1>
    <br />
    <MarketingApp />
  </div>
};