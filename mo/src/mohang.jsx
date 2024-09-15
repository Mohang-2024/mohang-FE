import React, { useEffect, useState} from "react";
import styled from "styled-components";
import Logo from './svg/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import ReadingGlasses from "./svg/readingGlasses.svg";
import Mike from "./svg/mike.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import ChatbotBenner from "./svg/ChatbotBenner.svg";
import RoadmapVenner from "./svg/RoadmapVenner.svg";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade} from 'swiper/modules';
import axios from "axios";
import { getAPi } from "./api/test";
import './mohang.css';
import MoHangFont from './svg/mohangFont.svg';
import Now from './svg/Now.svg';
import Credit from './svg/credit.svg';

function Mohang(){

  //api 연동
  // useEffect(() => {
  //   getAPi().then(({data}) => console.log(data));


  // }, []);
  const onClick = () =>{
    alert("로그인이 필요합니다");
  } 

  const [position, setPosition] = useState(1);
  function onScroll(){
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener("scroll",onScroll);
    return() => {
      window.removeEventListener("scroll",onScroll);
    };
  }, []);
  
  //SearchButton
  const onClickSearch = () => {
    console.log("Click");
  }

  const onClickRecording = () =>{
    console.log("recording");
  }

  const [scroll, setscroll] = useState(0);

  const updateScroll = () =>{
    setscroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll",updateScroll);
  }, []);

  return(
    <Main>
       <Header>
        <LogoImg>
          <Img src={Logo}alt="logo"/> 
        </LogoImg>
        <Search>
          <Find>
            <FindInput></FindInput>
            <SearchMain>
              <SearchImg>
                <img  src={ReadingGlasses} width={25} onClick={onClickSearch}/>
              </SearchImg>
            </SearchMain>
            <MikeImg src={Mike} width={40} onClick={onClickRecording}/>
          </Find>
        </Search>
        <Login>
          <LoginButton><Linkblack to='/Login' style={{textDecoration: "none"}} onClick={onClick}>동작인식</Linkblack></LoginButton>
          <LoginButton><Linkblack to='/Login' style={{textDecoration: "none"}} onClick={onClick}>추천 로드맵</Linkblack></LoginButton>
          <LoginButton><Linkblack to='/Login' style={{textDecoration: "none"}} onClick={onClick}>지도</Linkblack></LoginButton>
          <LoginButton><Linkblack to='/Login' style={{textDecoration: "none"}} onClick={onClick}>여행안내봇</Linkblack></LoginButton>
          <LoginButton><Linkblack to='/Login' style={{textDecoration: "none"}} onClick={onClick}>마이페이지</Linkblack></LoginButton>
        </Login>
      </Header>
      <SlideVenner>
        <SlideMain>
          <Slide>
            <Swiper
              width={1300}
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={false}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link 
                to='/Login' style={{textDecoration: "none"}}>
                  <img src={ChatbotBenner}
                  onClick={onClick}
                />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <img src={RoadmapVenner}
                />
              </SwiperSlide>
            </Swiper>
          </Slide>
        </SlideMain>
      </SlideVenner>
      <MohangFont>
        <img src={MoHangFont}
        width={700}
        style={{
          opacity: (position-500)/100
        }}/>
        <MohangMain>
          <Font1
          style={{
            opacity: (position-600)/100
          }}>
            <SmallP>당장 어디로 떠나고 싶다면?</SmallP>
              <SmallSmallP1>떠나고 싶은데 당장 계획이 없다면<strong className="Strong"> 모행</strong>에서</SmallSmallP1>
              <SmallSmallP2><strong className="Strong">AI 도우미 딥딥이</strong>에게<strong className="Strong"> 도움</strong>을 받으세요!</SmallSmallP2>
          </Font1>
          <Font2
          style={{
            opacity: (position-900)/100
          }}>
            <SmallP>어디로 떠나야 할지 잘 모르겠다면?</SmallP>
              <SmallSmallP1>항상<strong className="Strong"> 여행</strong>을 떠날 때 어디로 갈지 막막했다면 <strong className="Strong">모행</strong>에서</SmallSmallP1>
              <SmallSmallP2><strong className="Strong">AI 도우미 딥딥이</strong>에게<strong className="Strong"> 도움</strong>을 받으세요!</SmallSmallP2>
          </Font2>
          <Font3
          style={{
            opacity: (position-1400)/100
          }}>
            <SmallP><LinkWhite to='/Login' style={{textDecoration: "none"}} onClick={onClick}>당장 시작하러 가기.</LinkWhite></SmallP>
          </Font3>
        </MohangMain>
      </MohangFont>
      <Footer>
        <img src={Now} width={450}/>
        <FooterLogin><LinkWhite to='/Login' style={{textDecoration: "none"}} onClick={onClick}>로그인 하기</LinkWhite></FooterLogin>
        <Last>
          <img src={Credit} width={1381}/>
        </Last>
      </Footer>
    </Main>
  );
}

export default Mohang;

const Main = styled.div`
  width: 100%;
  height: 440vh;
  background-color: #fff;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  background-color: #fff;
`;

const LogoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 80%;
  margin-left: 20px;
`;

const Find = styled.div`
  height: 60px;
  width:  600px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: -100px;
`;

const FindInput = styled.input`
  width: 75%;
  height: 40px;
  border-radius: 30px;
  border: 2px solid #3619CC;
  outline: none;
  margin-left: 10px;
`;

const Search = styled.div`
  display: flex;
  position: relative;
`;

const SearchMain = styled.div`
  position: absolute;
  width: 445px;
  display: flex;
  justify-content: end;
`;

const SearchImg = styled.div`
  width: 25px;
`;

const MikeImg = styled.img`
  margin-left: 10px;
`;

const Login = styled.div`
  width: 30%;
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

const Slide = styled.div`
  padding-top: 100px;
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const SlideMain = styled.div` 
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SlideVenner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MohangFont = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 150px; 
`;

const MohangMain = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180.07deg, #2A1F63 52.33%, #CCCCCC 99.94%);
  margin-top: 30px;
`;

const Font1 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const SmallP = styled.p`
  color: white;
  font-size: 60px;
  font-weight: 700;
  margin-left: 60px;
`;

const SmallSmallP1 = styled.p`
  color: #86868B;
  font-size: 30px;
  font-weight: 700;
  margin-left: 65px;
  margin-top: -60px;
`;

const SmallSmallP2 = styled.p`
  color: #86868B;
  font-size: 30px;
  font-weight: 700;
  margin-left: 65px;
  margin-top: -35px;
`;

const Font2 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  margin-top: 200px;
`

const Font3 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

const LinkWhite = styled(Link)`
  color: white;
`

const Linkblack = styled(Link)`
  color: black;
`

const Footer = styled.div`
  margin-top: 350px;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogin = styled.div`
  margin-top: 60px;
  width: 30%;
  height: 70px;
  background: #36229D;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
`;

const Last = styled.div`
  height: 500px;
  display: flex;
  align-items: end;
  background-color: #fff;
`;