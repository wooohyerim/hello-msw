import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { setupWorker } from 'msw/browser'
import { getMSWPokeList } from './api/pokeApi.ts'

// pnpm msw init 후
// 가짜 api 등록
const worker = setupWorker(getMSWPokeList)
worker.start()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
