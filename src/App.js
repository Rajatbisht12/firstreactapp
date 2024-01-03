import { useState } from 'react';
import './App.css';

// import '../build/static/css/main.2543b9d3.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "dark")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const toggleMode1 = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const toggleMode2 = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'blue';
      showAlert("Blue mode has been enabled", "primary")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
  <>
  {/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>}/>
  </Routes> */}
  <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
  {/* <About/> */}
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;