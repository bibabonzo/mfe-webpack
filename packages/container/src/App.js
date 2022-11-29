import React, { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

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

  return (
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
  )
};