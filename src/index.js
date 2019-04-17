import React from 'react';
import ReactDOM from 'react-dom';
// import '';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk' // 异步
import {Provider} from 'react-redux'
import {counter} from './index.redux'
import * as serviceWorker from './serviceWorker';

// 这个是让数据生效，和结合谷歌插件的代码
const store = createStore(counter,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>)
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
