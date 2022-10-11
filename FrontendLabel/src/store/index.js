import { configureStore } from 'redux';

const loginReducer = (state = { loged: false }, action) => {
    if (action.type === 'logout') {
        return { loged: false };
    }
    if (action.type === 'login') {
        return { loged: true };
    }
    return state;
}
const store = configureStore(loginReducer);

export default store;