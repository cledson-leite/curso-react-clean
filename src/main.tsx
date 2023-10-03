import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProviderTheme } from './styles/theme/provider'
import { App } from './main/App'
import { Global } from './styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderTheme>
      <Global />
      <App />
    </ProviderTheme>
  </React.StrictMode>,
)
