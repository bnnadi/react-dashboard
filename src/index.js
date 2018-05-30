import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

if (process.env.NODE_ENV !== 'production') {
    localStorage.setItem('debug', 'Ndeputa:*');
}

ReactDOM.render(<App />, document.getElementById('root'));
// Hot Module Replacement
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(<NextApp />, document.getElementById('root'));
    })
}

registerServiceWorker();
