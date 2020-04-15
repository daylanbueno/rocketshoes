import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import GlobalStyes from './styles/global';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyes />
        </BrowserRouter>
    );
}

export default App;
