import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider, UserContext } from './contexto/UserContext';
import { CartContext } from './contexto/CartContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CartContext>
        <App />
        </CartContext>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
