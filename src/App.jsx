import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>

  );
}

export default App;