import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './08-UseReducer/intro-reducer.ts'
import { TodoApp } from './08-UseReducer/TodoApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
