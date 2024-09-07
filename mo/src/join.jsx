import React from "react";
import styled from "styled-components"; 
import Logo from "./svg/logo.svg";
import Look from "../src/svg/look.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add(){

  const [userNumber, setUserNumber] = useState({
    userNumber:'',
  });

  const [userYear, setUserYear] = useState({
    userYear:'',
  });

  const onUserNumber = e =>{
    setUserNumber(e.target.value);
    console.log(e.target.value);
  }

  const onUserYear = e =>{
    setUserYear(e.target.value);
    console.log(e.target.value);
  }

  const [click, setClick] = useState("");

  const nav = useNavigate();

  const handleClick = () => {
    if(userNumber.userNumber !== "" && userYear.userYear !== ""){
      nav('/login',{state:{click}});
    }
  }

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
          <Fieldset>
            <legend>전화번호</legend>
            <LoginInput
            type="number"
            name="userId"
            onChange={onUserNumber}
            placeholder="공백없이 숫자만 입력하세요"
            ></LoginInput>
          </Fieldset>
          <Fieldset>
            <legend>출생년도</legend>
            <LoginInput
            type="number"
            name=""
            onChange={onUserYear}
            placeholder="숫자만 입력하세요 ex)2007"
            ></LoginInput>
          </Fieldset>
        </Section>
      </Body>
      <Footer>
        <Enter>
          <Button onClick={handleClick}>회원가입</Button>
        </Enter>
      </Footer>
    </Main>
  );
}

export default Add;

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

const Fieldset = styled.fieldset`
  width: 500px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const LoginInput = styled.input`
  border-radius: 10px;
  width: 500px;
  height: 30px;
  border: #fff;
  background-color: #fff;
  outline: none;
`;

const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const Enter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 35%;
  height: 45px;
  font-weight: 700;
  border-radius: 10px;
  background-color: #36229D;
  color: #fff;
  border: #fff;
`;