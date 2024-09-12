import React from "react";
import styled from "styled-components";
import Logo from './svg/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import ReadingGlasses from "./svg/readingGlasses.svg";
import Mike from "./svg/mike.svg";

function Mohang(){
  return(
    <Main>
       <Header>
        <Img src={Logo}alt="logo"/>
        <Find>
          <FindInput></FindInput>
          <img src={ReadingGlasses} width={30}/>
          <img src={Mike} width={40}/>
        </Find>
        <Login>
          <LoginButton><Link to='/Login' style={{textDecoration: "none"}}>동작인식</Link></LoginButton>
          <LoginButton><Link to='/Login' style={{textDecoration: "none"}}>추천 로드맵</Link></LoginButton>
          <LoginButton><Link to='/Login' style={{textDecoration: "none"}}>지도</Link></LoginButton>
          <LoginButton><Link to='/Login' style={{textDecoration: "none"}}>여행안내봇</Link></LoginButton>
          <LoginButton><Link to='/Login' style={{textDecoration: "none"}}>마이페이지</Link></LoginButton>
        </Login>
      </Header>
    </Main>
  );
}

export default Mohang;

const Main = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 60px;
  margin-left: 20px;
`;

const Find = styled.div`
  margin-right: 100px;
  height: 60px;
  width: 600px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const FindInput = styled.input`
  width: 450px;
  height: 40px;
  border-radius: 30px;
  border: 2px solid #3619CC;
  outline: none;
`;

const Login = styled.div`
  width: 450px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

const LoginButton = styled.button`  
  width: 90px;
  border: none;
  background-color: #fff;
  font-weight: 700;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
  }
`;
