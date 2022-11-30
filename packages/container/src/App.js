import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
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
                  <Switch>
                      <Route path="/" component={MarketingApp} />
                      <Route path="/auth" component={AuthApp} />
                  </Switch>
              </div>
          </StylesProvider>
      </BrowserRouter>
  )
};