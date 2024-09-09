import './App.css';
import Trip from './trip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from "./join";
import Login from "./login";
import Mohang from "./mohang";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trip/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mohang' element={<Mohang/>}/>
      </Routes>
    </BrowserRouter>  
      </div> 
  );
}

export default App;
