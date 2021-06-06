import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import {ApolloProvider} from '@apollo/client/react';
import apolloClient from "./configuration/apolloClient.configuration";
import store from "./configuration/reduxStore.configuration";
import TheHomeLike from "./components/thehomelike";

export const App:React.FC=()=>{
    return (
        <Provider store={store}>
            <ApolloProvider client={apolloClient}>
                <TheHomeLike/>
            </ApolloProvider>
        </Provider>
    );
}

export default App;
