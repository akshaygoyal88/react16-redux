/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/App'
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());


const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
	    <Router history={browserHistory} routes={routes} />
	  </Provider>,
    document.getElementById('root')
  );
};

render(App);
