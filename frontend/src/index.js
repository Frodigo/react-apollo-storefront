import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log(graphQLErrors);
    }

    if (networkError) {
        // handle network error
        console.log(networkError);
    }
});

const httpLink = new HttpLink({ uri: 'https://magento.test/graphql' })

const appLink = from([
    errorLink, httpLink
])

const client = new ApolloClient({
    link: appLink,
    cache: new InMemoryCache(),

});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
