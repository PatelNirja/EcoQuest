import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout.jsx'
import Home from './pages/Home.jsx'
import Student from './pages/Student.jsx'
import Teacher from './pages/Teacher.jsx'
import Admin from './pages/Admin.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout><Home /></AppLayout>} />
        <Route path="/student" element={<AppLayout><Student /></AppLayout>} />
        <Route path="/teacher" element={<AppLayout><Teacher /></AppLayout>} />
        <Route path="/admin" element={<AppLayout><Admin /></AppLayout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
