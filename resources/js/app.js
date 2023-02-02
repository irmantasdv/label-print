import AppRouter from './Router';

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';


render(<Provider store={store}><AppRouter /></Provider>,
    document.getElementById('root'));
