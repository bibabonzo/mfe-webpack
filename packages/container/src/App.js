import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

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
                  <Suspense fallback={<div>Loading...</div>}>
                      <Switch>
                          <Route path="/auth" component={AuthAppLazy} />
                          <Route path="/" component={MarketingAppLazy} />
                      </Switch>
                  </Suspense>
              </div>
          </StylesProvider>
      </BrowserRouter>
  )
};