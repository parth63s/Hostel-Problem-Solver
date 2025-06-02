import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import ProblemFormPage from './landing_Page/Student/Form/ProblemFormPage'
import StudentPage from './landing_Page/Student/StudentPage'
import LoginPage from './landing_Page/Login/LoginPage'
import WardenPage from './landing_Page/Warden/WardenPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/studentPanel" element={<StudentPage />} />
        <Route path="/studentPanel/problem-form" element={<ProblemFormPage />} />
        <Route path="/*" element={<LoginPage/>} />
        <Route path="/WardenPanel" element={<WardenPage/>}> </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
