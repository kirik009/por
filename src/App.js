import React from 'react';
import Navbar from './components/navbar'
import AppRouter from './components/AppRouter'
import {Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import {useState} from 'react';
import { store} from './redux/store';
function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
     
            <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        </BrowserRouter>
        </Provider>
    )
}

export default App;