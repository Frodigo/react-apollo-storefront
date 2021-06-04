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
import PageHeader from './components/PageHeader';


const App = () => {
    return <Router>
        <>
            <PageHeader/>
            <Switch>
                <Route path="/category/:categoryUrlKey" component={CategoryRoute}/>
            </Switch>
        </>
    </Router>
}

export default App;
