// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm.js';
// import About from './Components/About.js';
import Alert from './Components/Alert';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light') //dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Router>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm heading='Enter the text to analyze below' showAlert={showAlert} mode={mode} />
            {/* </Route>
          </Switch>
        </Router> */}
      </div>
    </>

  );
}

export default App;
