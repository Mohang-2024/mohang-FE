import './App.css';
import Trip from './trip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from "./join";
import Login from "./login";
import MainMo from "./mainMo"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trip/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mainMo' element={<MainMo/>}/>
      </Routes>
    </BrowserRouter>  
      </div> 
  );
}

export default App;
