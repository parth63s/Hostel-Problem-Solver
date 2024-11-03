import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import HomePage from './landing_Page/Home/HomePage'
import StudentPage from './landing_Page/Student/StudentPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentPage/>
  </StrictMode>,
)
