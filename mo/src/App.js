import './App.css';
import Trip from "./trip";
import { BrowserRouter, Routes, Route } from 'react-router-dom';    
import Join from "./join";
import Login from "./login";
import Mainpage from "./mainpage";
import LoginMainPage from "./Loginmainpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/trip" element={<Trip/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/LoginMainPage' element={<LoginMainPage/>}/>
      </Routes>
    </BrowserRouter>  
      </div> 
  );
}

export default App;
