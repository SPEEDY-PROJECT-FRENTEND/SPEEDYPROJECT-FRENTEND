import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landingpage';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
const routes = () => {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default routes
