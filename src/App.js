
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  
  const [alert, setAlert] = useState(null);
  const alertMe=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      alertMe("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      alertMe("Light mode enabled","success");
    }
    console.log("fired")
  }

  
  return (
    <>
    <Router>
    <Navbar title="Txtutil" about="AboutUS" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Textform heading="Enter text" mode={mode} alertMe={alertMe}/>
          </Route>
    </Switch>
    
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
