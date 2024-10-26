import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Logo from './svg/logo.svg';
import ReadingGlasses from "./svg/readingGlasses.svg";
import Mike from "./svg/mike.svg";  
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Navigation, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MoHangFont from "./svg/mohangFont.svg";
import Slide from './svg/slide.svg';

function mainpage(){

  const onClickSearch = () => {
    console.log("Click");
  }

  const onClickRecording = () =>{
    console.log("recording");
  }

  const items = [
    {src:'./svg/RoadmapVenner.svg'},
    {scr:'./svg/ChatbotBenner.svg'},
  ];

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
       <LoginButton>동작인식</LoginButton>
       <LoginButton>추천 로드맵</LoginButton>
       <LoginButton>지도</LoginButton>
       <LoginButton>여행안내봇</LoginButton>
       <LoginButton>마이페이지</LoginButton>
     </Login>
   </Header>
   <SlideVenner>
        <SlideMain>
          <Slides>
            <Swiper
              width={1300}
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={true}
              circleLoop={true}
              loop={false}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {items.map((item, idx)=>{
                return(
                <SwiperSlide key={idx}>
                    <img src={item.scr} width={300} height={100}/>
                </SwiperSlide>
                );  
              })}
            </Swiper>
          </Slides>
        </SlideMain>  
      </SlideVenner>
      <MohangFont>
        <img src={MoHangFont}
        width={700}
        />
        <MohangMain>
          <ToDay>오늘의 추천</ToDay>
          <DeepDeep>딥딥이가 __님에게 어울리는 곳을 찾아봤어요!</DeepDeep>
          </MohangMain>
        <SmallSlideMain>
          <SmallSlide>
            <Swiper
              width={180}
              slidesPerView={1}
              spaceBetween={50}
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
                <Trip></Trip>
              </SwiperSlide>
              <SwiperSlide>
                <Trip></Trip>
              </SwiperSlide>
              <SwiperSlide>
                <Trip></Trip>
              </SwiperSlide>
              <SwiperSlide>
                <Trip></Trip>
              </SwiperSlide>
              <SwiperSlide>
                <Trip></Trip>
              </SwiperSlide>
            </Swiper>
          </SmallSlide>
        </SmallSlideMain>
      </MohangFont>
   </Main>
  );
}

export default mainpage;

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

const Slides = styled.div`
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
  height: 60%;
  background-color: aqua;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MohangMain = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 50px;
  background-color: bisque;
`;

const ToDay = styled.div`
  width: 100%;
  height: 20%;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const DeepDeep = styled.div`
  width: 100%;
  height: 80%;
  font-weight: 700;
  font-size: 25px;
  color: #B2B2B2;
  background-color: blueviolet;
`;

const SmallSlideMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
  z-index: 0;
  position: relative
`;

const SmallSlide = styled.div`
  width:100%;
  height:300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aqua;
`;

const Trip = styled.div`
  background-color: #e22b43;
  width:100%;
  height: 100%;
`;