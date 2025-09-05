import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import Home from './pages/Home.jsx'
import Student from './pages/Student.jsx'
import Teacher from './pages/Teacher.jsx'
import Admin from './pages/Admin.jsx'
import Modules from './pages/Modules.jsx'
import Quizzes from './pages/Quizzes.jsx'
import Badges from './pages/Badges.jsx'
import Challenges from './pages/Challenges.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { useAuth } from './context/AuthContext.jsx'

function RootRedirect() {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (user.role === 'teacher') return <Navigate to="/teacher" replace />
  if (user.role === 'admin') return <Navigate to="/admin" replace />
  return <Navigate to="/student" replace />
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
          <Route path="/student" element={<ProtectedRoute roles={["student"]}><AppLayout><Student /></AppLayout></ProtectedRoute>} />
          <Route path="/student/modules" element={<ProtectedRoute roles={["student"]}><AppLayout><Modules /></AppLayout></ProtectedRoute>} />
          <Route path="/student/quizzes" element={<ProtectedRoute roles={["student"]}><AppLayout><Quizzes /></AppLayout></ProtectedRoute>} />
          <Route path="/student/badges" element={<ProtectedRoute roles={["student"]}><AppLayout><Badges /></AppLayout></ProtectedRoute>} />
          <Route path="/student/challenges" element={<ProtectedRoute roles={["student"]}><AppLayout><Challenges /></AppLayout></ProtectedRoute>} />
          <Route path="/student/profile" element={<ProtectedRoute roles={["student"]}><AppLayout><Profile /></AppLayout></ProtectedRoute>} />
          <Route path="/teacher" element={<ProtectedRoute roles={["teacher"]}><AppLayout><Teacher /></AppLayout></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute roles={["admin"]}><AppLayout><Admin /></AppLayout></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
