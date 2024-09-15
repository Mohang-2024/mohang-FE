import React from "react";
import styled from "styled-components"; 
import Logo from "./svg/logo.svg";
import Look from "../src/svg/look.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AutoLogo from "../src/svg/auto.svg";
import Clicked from "../src/svg/click.svg";

function MainApp(){
  
  const [imageSrc, setImageSrc] = useState(Clicked);
  const [isClicked, setIsClicked] = useState(false);

  const ButtonClick = () =>{
    if(isClicked){
      setImageSrc(Clicked);
      setIsClicked(false);
    }
    else{
      setImageSrc(AutoLogo);
      setIsClicked(true);
    }
  };

  const [id, setId] = useState({
    userId:"",
  });

  const onChange = e =>{
    setId(e.target.value);
    console.log(e.target.value);
  }
  
  const [password, setPassword] = useState({
    userPassword:"",
  });

  const onPassword = e =>{
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  const [form, setform] = useState();

  const nav = useNavigate();

  const handleClick = () => {
    if(id.userId !== "" && password.userPassword !== ""){
      nav('/',{state:{form}});
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
          <LoginDiv>
            <LoginInput
            type="text"
            name="userId"
            value={id.userId}
            onChange={onChange}
            placeholder="아이디"
            ></LoginInput>
          </LoginDiv>
            <LoginInput
            type="password"
            name="userId"
              value={password.userPassword}
              onChange={onPassword}
            placeholder="비밀번호"
            ></LoginInput>
          <LoginAuto>
            <AutoButton><AutoImg src={imageSrc} onClick={ButtonClick}/><AutoFont>자동로그인</AutoFont></AutoButton>
          </LoginAuto>
          <LoginBigDiv>
            <LoginBigButton onClick={handleClick}>로그인
            </LoginBigButton>
          </LoginBigDiv>
          <Buttons>
            <Find>
              <FindLogin>아이디 찾기</FindLogin>
              <FindJoin>비밀번호 찾기</FindJoin>
              <JoinAgain><Link to="/trip" style={{ textDecoration: "none"}}>회원가입</Link></JoinAgain>
            </Find>
          </Buttons>
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
  height: 90%;
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
  margin-left: -60px;
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

const LoginBigDiv = styled.div`
  width: 500px;
  height: 40px;
  margin-top: 20px;
  `;

const LoginBigButton = styled.button`
  border-radius: 10px;
  background-color: #36229D;
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  margin-top: 30px;
  `;

  const Buttons = styled.div`
    width: 500px;
    height: 40px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Find =styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
  `;

  const FindLogin = styled.button`
    font-size: 10px;
    font-weight: 700;
    border: none;
    border-right: 3px solid black;
    background-color: #fff;
    width: 90px;
  `;

  const FindJoin = styled.button`
    width: 90px;
    font-size: 10px;
    font-weight: 700;
    border: none;
    border: none;
    border-right: 3px solid black;
    background-color: #fff;
  `;

const JoinAgain = styled.button`
    width: 90px;
    font-size: 10px;
    font-weight: 700;
    border: none;
    background-color: #fff;
    color: #0084FF;
  `;