import React, {useState} from 'react';
import logo from './svg/logo.svg';
import APPlogo from './svg/logo.svg';
import acc from './svg/accession.svg';
import login from './svg/login.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="APP-logo" alt="logo" />
        <div className='APP-login-acc'>
          <img src={acc}  className="APP-acc" alt='logo' />
          <img src={login} className="APP-login" alt='logo' />
        </div>
      </header>
      <section className='APP-body'>
       <img src={APPlogo} className="APP-logo-body" alt="logo" />
       <form className='input'>
        <fieldset>
         <div>
           <legend>정</legend>
           <input type="text" id="user-name"/>
           <label for="user-id"/>
          </div>
        </fieldset>
       </form>
      </section>
    </div>
  );
}

export default App;
