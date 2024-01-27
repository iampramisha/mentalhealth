import React, { useState } from 'react';

import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { ArrowRightOutlined } from "@mui/icons-material";
import { SliderItems } from "../data";

const Container = styled.div`
height: 70vh;
width: 100vw;
padding-top: 10px;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    justify-content: center;

`;
const Arrow = styled.div`

width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;

position: fixed ;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity:0.5;
z-index:99;
`;
const Wrapper = styled.div`
height: 100%;
display: flex;
width: 100vw;
transition: all 1.5s ease;
transform: translateX(${(props)=>props.slideIndex*-100}vw);
`;
const ImgContainer = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex:1;
flex-direction: column;

`;
const Image = styled.img`
width: 100vw;
height: 100vh;
border-radius: 39px;
box-shadow: 2px 4px 4px black;

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;

`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : SliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < SliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((item) => (
          <Slide key={item.id} >
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;