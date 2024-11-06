import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css'
import ProblemFormPage from './landing_Page/Student/Form/ProblemFormPage'
import StudentPage from './landing_Page/Student/StudentPage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/studentPanel" element={<StudentPage/>}> </Route>
      <Route path="/studentPanel/problem-from" element={<ProblemFormPage/>}> </Route>

    </Routes>
  </BrowserRouter>
)
