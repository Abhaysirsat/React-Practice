import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [Mode, setMode] = useState('light'); 

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode =() =>{
    if(Mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
      <NavBar title="TextUtils" aboutText="About TextUtils" mode = {Mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {Mode}/>} />
        </Routes>
      </div>
      </Router>
      {/* <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {Mode}/>npm  */}
      {/* <About/> */}
    </>
  );
}

export default App;
