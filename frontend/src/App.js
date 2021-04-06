import React from 'react';
import { useQuery, gql } from '@apollo/client';

import ErrorMessage from './components/ErrorMessage';

const STORE_CONFIG = gql`
  query {
    storeConfig{
      default_titless,
      welcome
    }
  }
`;

const App = () => {
    const { loading, error, data } = useQuery(STORE_CONFIG);

    if (loading) return <p>Loading...</p>;
    if (error) return <ErrorMessage error={error}/>;

    const { storeConfig } = data;
    const { default_title, welcome } = storeConfig;

    const shouldDisplayContent = data ? <main>
        <h1>{welcome}</h1>

        <h2>This app is connected with <strong>{default_title}</strong></h2>
    </main> : null;

    return shouldDisplayContent;
}

export default App;
