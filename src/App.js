import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import NewsAdminPortal from './Components/NewsAdminPortal';
import UserNewsPortal from './Components/NewsUserPortal';

// Protected Route Component for Admin
const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = user.email === 'admin@gmail.com';
  
  return isAdmin ? children : <Navigate to="/login" />;
};

// Protected Route Component for Users
const UserRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <NewsAdminPortal />
            </AdminRoute>
          } 
        />
        
         <Route 
          path="/user" 
          element={
            <UserRoute>
              <UserNewsPortal />
            </UserRoute>
          } 
        />
    
        {/* Default Route - Redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;