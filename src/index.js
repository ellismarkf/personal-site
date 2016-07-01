import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(
    <App />,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./components/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./components/App.js').default;
        render(
            <NextApp />,
            document.getElementById('root')
        )
    });
}