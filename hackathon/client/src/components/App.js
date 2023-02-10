// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { EmployeeDirectory } from './EmployeeDirectory';
import { LoginPage } from './LoginPage';
import { useState } from 'react';



function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <LoginPage setToken={setToken} />
  // }
  return (
    <>
    <div className='container'>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/people" element={<EmployeeDirectory />} />
      <Route path="/people/:id" element={<EmployeeDirectory />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
