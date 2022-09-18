import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asstes/css/main.css';
import {
  Switch,
  Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
// components
import LoginPage from './layouts/LoginPage';
import Dashboard from './layouts/Dashboard';

function App() {
const hestory = useHistory()
  useEffect(()=>{
    console.log(localStorage.getItem("username"))
    localStorage.getItem("username") != null ?
    hestory.push('./dashboard'):
    hestory.push('./')
  },[])

  return (
    <div className="App">
      <Switch>
          <Route exact path={["/","/login"]} component={LoginPage}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
  
    </div>
  );
}

export default App;
