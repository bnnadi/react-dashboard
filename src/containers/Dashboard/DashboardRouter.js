import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
    // {
    //     path: "",
    //     component: asyncComponent(() => import("../Widgets/index.js"))
    // },
    {
        path: "profile",
        component: asyncComponent(() => import("../Profile"))
    },
    {
        path: "employees",
        component: asyncComponent(() => import("../People/employees"))
    },
    {
        path: "customers",
        component: asyncComponent(() => import("../People/customers"))
    },
    {
        path: "inventory",
        component: asyncComponent(() => import("../Inventory"))
    },
    {
        path: "invoices",
        component: asyncComponent(() => import("../Invoice"))
    },
    {
        path: "timesheets",
        component: asyncComponent(() => import("../Timesheet"))
    },
];

class DashboardRouter extends Component {
    render() {
        const {url, style} = this.props;
        return (
            <div style={style}>
                {routes.map(singleRoute => {
                    const { path, exact, ...otherProps } = singleRoute;
                    return (
                        <Route
                            exact={exact === false ? false : true}
                            key={path}
                            path={`${url}/${path}`}
                            {...otherProps}
                         />
                    );
                })}
            </div>
        );
    }
}

export default DashboardRouter;