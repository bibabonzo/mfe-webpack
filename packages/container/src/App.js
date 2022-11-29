import React, { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

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
          <StylesProvider generateClassName={generateClassName}>
              <div>
                  <Header />
                  <MarketingApp />
              </div>
          </StylesProvider>
      </BrowserRouter>
  )
};