import React, { useEffect, useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import theme from '../theme';
import { init } from 'ityped';
import {Link} from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  text-align: center;
  top: 0px;
  position: fixed;
  z-index: 99;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  flex-direction: row;
`;

const Time = styled.div`
  flex: 3.2;
  margin-left: 40px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
  font-weight: 700;
  transition: transform 0.8s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.textColor};
    transform: scale(1.1);
  }
`;

const Title = styled.span`
  color: ${(props) => props.theme.textColor};
  margin-left: -79px;
  flex: 4.6;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2.01px;
`;

const Links = styled.div`
  color: ${(props) => props.theme.textColor};
  align-content: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  flex: 2.9;
  gap: 2px;
  justify-content: space-around;
`;

const Quotess = styled.span``;

const Share = styled.span``;

const Register = styled.span``;
const SliderLink= styled.span`
`;
const Moon = styled.div`
  flex: 1;
`;
const Linkk = styled(Link)`
color: ${(props) => props.theme.textColor};
text-decoration: none !important;

`

const Navbar = ({ isNightMode, handleToggleMoon }) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backspeed: 60,
      strings: ['YOUR SAFE PLACE', 'YOUR HOME'],
    });
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);


  const selectedTheme = isNightMode ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Container>
        <Time>
          <AccessTimeIcon style={{ color: isNightMode ? 'white' : 'black' }} />
          {currentTime.toLocaleTimeString()}
        </Time>
        <Title ref={textRef}>
        <span></span>
        </Title>
        <Links>
          <Quotess>
            <Linkk to='/quotes'>Quotes</Linkk>
            </Quotess>
          <Share>
            <Linkk to='/communicate'>Communicate</Linkk>
            </Share>
          <Register>
            <Linkk to='/Register'>Register</Linkk>
          </Register>
          <SliderLink>
    <Linkk to='/Slider'>Slider</Linkk>
  </SliderLink>
        </Links>
        <Moon>
          <ModeNightIcon
            onClick={handleToggleMoon}
            style={{
              transition: 'transform ease 0.5s',
              transform: isNightMode ? 'rotate(45deg)' : 'rotate(0deg)',
              color: isNightMode ? 'white' : 'black',
            }}
          />
        </Moon>        
     </Container>
    </ThemeProvider>
  );
};

export default Navbar;
