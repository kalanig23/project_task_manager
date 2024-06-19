import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import Registration from "./pages/registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
