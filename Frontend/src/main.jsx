import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css'

import WardenPage from './landing_Page/Warden/WardenPage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/WardenPanel" element={<WardenPage/>}> </Route>
    </Routes>
  </BrowserRouter>
)