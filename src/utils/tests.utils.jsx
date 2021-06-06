import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const defaultMiddleWares = [];

export function getMockStore({
                                 key = 'initialState',
                                 state,
                                 middlewares = defaultMiddleWares
                             }) {
    return configureMockStore(middlewares)({[key]: state});
};

const StoreMockProvider = ({store, children}) => (
    <Provider store={store}>
        {children}
    </Provider>
);


export default StoreMockProvider;