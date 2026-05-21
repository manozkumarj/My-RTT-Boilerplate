import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// @ts-expect-error: No declaration file for this module
import App from './App.jsx'
// @ts-expect-error: No declaration file for this module
import CounterContextProvider from './contexts/counterContext.jsx'
import { Provider } from 'react-redux'
// @ts-expect-error: No declaration file for this module
import store from './redux/store.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CounterContextProvider>
  </StrictMode>,
)
