import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Layout } from './components/Layout'
import HomePage from './pages/Home'
import ComponentsPage from './pages/Components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
