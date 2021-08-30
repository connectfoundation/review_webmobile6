// Import React modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';

// Import pages
import { SearchRoom } from 'pages/SearchRoom';
import Login from 'pages/Login';
import RegisterUser from 'pages/RegisterUser';

// Import components
import GlobalStyle from 'components/GlobalStyle';
import Client from 'service/NetworkClient';

// App
const App = () => {
    return (
        <ApolloProvider client={Client}>
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/user/register" component={RegisterUser} />
                    <Route path="/main" component={SearchRoom} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
};

export default App;
