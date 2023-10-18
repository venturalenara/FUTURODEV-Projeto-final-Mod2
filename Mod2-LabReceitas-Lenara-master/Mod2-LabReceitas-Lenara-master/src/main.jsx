import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RecipeProvider } from './contexts/RecipeContext'

import RecipeApp from './RecipeApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider>
      <RecipeApp />
    </RecipeProvider>
  </React.StrictMode>,
)
