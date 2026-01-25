import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextoGlobalProvider from './contexto/ContextoGlobal.jsx'
import { UserContext } from './contexto/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextoGlobalProvider>
        <UserContext>
          <App/>
        </UserContext>
      </ContextoGlobalProvider>
    </BrowserRouter> 
  </StrictMode>,
)
