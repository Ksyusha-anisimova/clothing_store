import React from 'react';
import App from './components/App/App';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store/store";
import {BrowserRouter} from'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(

        <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider>

            );
}
