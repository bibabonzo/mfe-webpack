import React, {useState, useEffect, lazy, Suspense} from 'react'
import {Router, Route, Switch, Redirect} from "react-router-dom";
import Header from './components/Header';
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import {createBrowserHistory} from 'history';
import Progress from "./components/Progress";

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [count, setCount] = useState(0);
    const userEvent = new CustomEvent('user', {
        isSignedIn: isSignedIn
    });

    useEffect(() => {
        window.addEventListener(
            "marketingAppPricingClicked",
            (data) => {
                const { newCount } = data.detail;

                setCount(newCount);

                console.log(newCount);
            }
        );
    }, []);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    useEffect(() => {
        window.addEventListener(
            "userStatus",
            (data) => {
                const { isSignedIn } = data.isSignedIn;

                console.log('User status: ', isSignedIn);
            }
        );
    }, []);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={() => setIsSignedIn(true)}/>
                            </Route>
                            <Route path={"/dashboard"}>
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardLazy/>
                            </Route>
                            <Route path="/" component={MarketingAppLazy}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
};