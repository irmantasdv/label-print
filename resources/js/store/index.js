import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import labelComponentReducer from './labelComponent';
import templateReducer from './template';
import labelsReducer from './labels';

const store = configureStore({
    reducer: {
        auth: authReducer,
        labelComponent: labelComponentReducer,
        template: templateReducer,
        labels: labelsReducer
    }
});

export default store;
