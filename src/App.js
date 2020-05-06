import React from 'react';
import './config/ReactotronConfig';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import Routes from './Routes';
import GlobalStyes from './styles/global';
import Header from './components/Header';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyes />
                <ToastContainer
                    autoClose={3000}
                    position={toast.POSITION.BOTTOM_RIGHT}
                />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
