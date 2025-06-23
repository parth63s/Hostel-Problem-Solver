import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css'
import ProblemFormPage from './landing_Page/Student/Form/ProblemFormPage'
import StudentPage from './landing_Page/Student/StudentPage'
import WorkerPage from './landing_Page/Worker/WorkerPage'
import LoginPage from './landing_Page/Login/LoginPage'
import WardenPage from './landing_Page/Warden/WardenPage';
import Footer from './landing_Page/Footer';
import NavBar from './landing_Page/NavBar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <NavBar/>
      <Routes>
        <Route path="/studentPanel" element={<StudentPage />} />
        <Route path="/studentPanel/problem-from" element={<ProblemFormPage />} />
        <Route path="/*" element={<LoginPage/>} />
        <Route path="/WardenPanel" element={<WardenPage/>}> </Route>
        <Route path="/workerpanel" element={<WorkerPage/>}> </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)
