import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './app/app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/*
Purpose Tailwind class 
Main background bg-zinc-950 
Secondary background bg-purple-950 
Cards bg-zinc-900 
Borders border-purple-900 
Main accent bg-violet-700 
Secondary accent bg-purple-500 
Pink accent bg-fuchsia-500 
Soft text text-zinc-300 
Muted text text-zinc-500
Main text text-purple-50
*/