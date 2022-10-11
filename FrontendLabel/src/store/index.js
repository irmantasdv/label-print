import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import labelSizeReducer from './labelSize';

const store = configureStore({
    reducer: {
        auth: authReducer,
        labelSize: labelSizeReducer
    }
});

export default store;