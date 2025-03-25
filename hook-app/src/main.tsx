import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-UseReducer/TodoApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
