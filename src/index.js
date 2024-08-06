import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import UserContextProvider from './Context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools}from 'react-query/devtools'
const root = ReactDOM.createRoot(document.getElementById('root'));
let query = new QueryClient()
root.render(
    <QueryClientProvider client={query}>
        <UserContextProvider>
            <App />
        </UserContextProvider>
        <ReactQueryDevtools initialIsOpen="false" position='bottom-right'/>
    </QueryClientProvider>


);


