import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import Dashboard from './containers/Dashboard';
import asyncComponent from './helpers/AsyncFunc';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest}) => (
    <Route
     {...rest}
     render={props => isLoggedIn
        ? <Component {...props} />
        : <Redirect
            from='/'
            to={{
                pathname: '/signin',
                state: { from: props.location },
            }}
        />}
    />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                {/* <Route
                  exact
                  path={'/'}
                  component={asyncComponent(() => import('./containers/Page/comingSoon'))}
                /> */}
                <Route
                  exact
                  path={'/signin'}
                  component={asyncComponent(() => import('./containers/Page/signin'))}
                />
                <Route
                  exact
                  path={'/404'}
                  component={asyncComponent(() => import('./containers/Page/404'))}
                />
                <Route
                  exact
                  path={'/500'}
                  component={asyncComponent(() => import('./containers/Page/500'))}
                />
                <Route
                  exact
                  path={'/forgotpassword'}
                  component={asyncComponent(() => import('./containers/Page/forgotPassword'))}
                />
                <Route
                  exact
                  path={'/resetpassword'}
                  component={asyncComponent(() => import('./containers/Page/resetPassword'))}
                />
                <RestrictedRoute
                  path={'/dashboard'}
                  component={Dashboard}
                  isLoggedIn={isLoggedIn}
                />
                {/* Todo if main site will have a homepage */}
                {/* <Redirect exact from='/' to='/signin' /> */}
            </div>
        </ConnectedRouter>
    );
};

export default connect(state => ({
    isLoggedIn: state.Auth.get('token') !== null,
    // isLoggedIn: true,
  }))(PublicRoutes);