import React, { Component } from 'react';
import Nprogress from 'nprogress';
import ReactPlacholder from 'react-placeholder';
import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';

export default function BaseComponent(importComponent) {

   class AsyncBase extends Component {
        constructor(props) {
            super(props);
            this.state - {
                component: null,
            }
        }
        componentWillMount() {
            Nprogress.start();
        }
        componentWillUnmount() {
            this.mounted = false;
        }
        async componentDidMount() {
            this.mounted = true;
            const { default: Component } = await importComponent();
            Nprogress.done();
            if (this.mounted) {
                this.setState({
                    component: <Component {...this.props} />
                });
            }
        }

        render() {
            const Component = this.state.component || <div />;
            return (
                <ReactPlacholder type='text' rows={7} ready={Component !== null}>
                    {Component}
                </ReactPlacholder>
            );
        }
   }
   return AsyncBase;
}