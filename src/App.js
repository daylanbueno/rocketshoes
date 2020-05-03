import React from 'react';
import './config/ReactotronConfig';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import GlobalStyes from './styles/global';
import Header from './components/Header';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
