import React from "react";
import styled from "styled-components"; 
import Logo from "./svg/logo.svg";
import Look from "../src/svg/look.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AutoLogo from "../src/svg/auto.svg";

function MainApp(){
  return(
    <Main>
      <Header>
        <Img src={Logo}alt="logo"/>
        <Login>
          <JoinButton><Link to="/" style={{ textDecoration: "none"}}>회원가입</Link></JoinButton>
          <LoginButton>로그인</LoginButton>
        </Login>
      </Header>
      <Body>
        <Section>
        <ImgBody src={Logo} alt="logo"/>
          <LoginDiv>
            <LoginInput
            type="text"
            name="userId"
            placeholder="아이디"
            ></LoginInput>
          </LoginDiv>
            <LoginInput
            type="password"
            name="userId"
            placeholder="비밀번호"
            ></LoginInput>
          <LoginAuto>
            <AutoButton><AutoImg src={AutoLogo}/><AutoFont>자동로그인</AutoFont></AutoButton>
          </LoginAuto>
        </Section>
      </Body>
    </Main>
  );
}

export default MainApp;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 60px;
  margin-left: 20px;
`;

const Login = styled.div`
  width: 170px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;

const JoinButton = styled.button`
  width: 70px;
  border: none;
  background-color: #fff;
  color: #0084FF;
  font-weight: 700;
`;

const LoginDiv = styled.div`
  margin-bottom: 20px;
`;

const LoginButton = styled.button`  
  width: 70px;
  border: none;
  background-color: #fff;
  font-weight: 700;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
  }
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
`;

const Section =styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgBody = styled.img`
  height: 90px;
  margin-bottom: 50px;
`;

const LoginInput = styled.input`
  border-radius: 10px;
  width: 500px;
  height: 40px;
  outline: none;
  border: 2px solid black;
`;

const LoginAuto = styled.div`
  width: 65%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
`;

const AutoButton = styled.button`
  background-color: #fff;
  border: #fff;
  display: flex;
  `;

const AutoImg = styled.img`
  margin-right: 10px;
`;

const AutoFont = styled.div`
`;