import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './HelloWorldApp.jsx';
import {FirstApp} from './FirstApp.jsx';

import './styles.css';
import { CounterApp } from './CounterApp.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CounterApp value={20} />
    </StrictMode>
);