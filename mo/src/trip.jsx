import React from "react";
import styled from "styled-components"; 
import Logo from "./svg/logo.svg";
import Look from "../src/svg/look.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import XO from './svg/xo.svg';
import { FaEyeSlash } from "react-icons/fa"


function Add(){

  const [userId, setUserId] = useState({
    userId:'',
  });

  const [password, setpassword] = useState({
    Password:'',
  });

  const [passreturn,setPassreturn] = useState({
    Passreturn:'',
  });

  const onUserId = e =>{
    setUserId(e.target.value);
    console.log(e.target.value);
  }

  const onPassword = e =>{
    setpassword(e.target.value);
    console.log(e.target.value);
  }

  const onPassreturn = e =>{
    setPassreturn(e.target.value);
    console.log(e.target.value);
  }

  const [click, setClick] = useState("");

  const nav = useNavigate();

const handleClick = () => {
    if(userId.userId !== "" && password.Password !== "" && passreturn.Passreturn !== ""){
      nav('/join',{state:{click}});
    }
  }

  return(
    <Main>
      <Header>
        <Img src={Logo}alt="logo"/>
        <Login>
          <JoinButton><Link to="/trip" style={{ textDecoration: "none"}}>회원가입</Link></JoinButton>
          <LoginButton><Link to='/Login' style={{textDecoration: "none"}}>로그인</Link></LoginButton>
        </Login>
      </Header>
      <Body>
        <Section>
          <ImgBody src={Logo} alt="logo"/>
              <Fieldset>
                <legend>아이디</legend>
                <LoginInput
                onInput= {(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(0, e.target.minLength);
                }}
                maxLength={20}
                minLength={3}
                type="text"
                name="userId"
                onChange={onUserId}
                placeholder="3자에서 20자까지 입력 가능"
                ></LoginInput>
              </Fieldset>
              <Fieldset>
                <legend>비밀번호</legend>
                <LoginInput
                onInput= {(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(0, e.target.minLength);
                }}
                maxLength={20}
                minLength={8}
                type="password"
                name="password"
                onChange={onPassword}
                placeholder="8자에서 20자까지 입력 가능"
                >
                </LoginInput>
              </Fieldset>
              <Fieldset>  
                <legend>비밀번호 확인</legend>
                <LoginInput
                onInput= {(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(0, e.target.minLength);
                }}
                maxLength={20}
                minLength={8}
                type="password"
                name="passreturn"
                onChange={onPassreturn}
                placeholder="비밀번호를 다시 한번 입력하세요"
                >
                </LoginInput>
              </Fieldset> 
              <img src={XO} alt="logo"/>
        </Section>
      </Body>
      <Footer>
        <Enter>
          <Button onClick={handleClick}>다음</Button>
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
  background-color: #fff;
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
`;

const Body = styled.div`
margin-top: 40px;
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
  height: 15%;
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
  font-size: 15px;
`;

const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const Enter = styled.div`
  width: 35%;
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  width: 90px;
  height: 40px;
  font-weight: 700;
  border-radius: 10px;
  background-color: #36229D;
  color: #fff;
  border: #fff;
`;

