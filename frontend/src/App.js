import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import CategoryRoute from './routes/category';
import ProductRoute from './routes/product'
import PageHeader from './components/PageHeader';
import Messages from './components/Messages';

import { MessagesProvider } from './contexts/Messages';

const App = () => {
    return <MessagesProvider>
        <Router>
            <>
                <PageHeader/>
                <Messages/>
                <Switch>
                    <Route path="/category/:categoryUrlKey" component={CategoryRoute}/>
                    <Route path="/product/:productUrlKey" component={ProductRoute}/>
                </Switch>
            </>
        </Router>
    </MessagesProvider>
}

export default App;
