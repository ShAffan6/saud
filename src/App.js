import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
 
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom"




import Loginbox from './loginbox';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <>
    <div>Nav Bar</div>
    <Router>
      <Routes>
        <Route path='/' element={<Link to="/Authorise/Login">Login</Link>}/>
        <Route path="/Authorise" element={<div>
          <h1 className="TitanicFitness">Titanic Fitness</h1>
          <Outlet/>
          <div>Page Footer Here</div>
          </div>}>
          <Route path="Login" element={<Loginbox/>}/>
          <Route path="CreateAccount" element={<CreateAccount/>}/>
        </Route>
        <Route path="/Home" element={<div className="LoggedIn">You are logged in</div>}/>
      </Routes>
    </Router>
    </>
  );
}


export default App