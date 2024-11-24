import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css'
import HomePage from './landing_Page/Home/HomePage'
import StudentPage from './landing_Page/Student/StudentPage'
import WorkerPage from './landing_Page/Worker/WorkerPage'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/workerpanel" element={<WorkerPage/>}> </Route>
    </Routes>
  </BrowserRouter>
)
