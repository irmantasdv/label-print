import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import labelComponentReducer from './labelComponent';
import templateReducer from './template';

const store = configureStore({
    reducer: {
        auth: authReducer,
        labelComponent: labelComponentReducer,
        template: templateReducer
    }
});

export default store;
