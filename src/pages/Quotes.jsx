import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';

import theme from '../theme';

const Container = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  height: 93vh;
  background-color: ${(props) => props.theme.backgroundd};
`;

const Title = styled.span`
margin-top: -150px;
  color: ${(props) => props.theme.textColor};
  font-size: 39px; // Adjust the font size as needed
`;
const Button=styled.span`
justify-content: center;
align-content: center;
text-align: center;
margin-top: 45px;
 color: ${(props) => props.theme.textColor};
`
const Message=styled.span`
width: 50vw;
align-items: center;
text-align: center;
justify-content: center;
margin-top: 20px;
font-size: 34px;
color: ${(props) => props.theme.textColor};
`
const Quotes = ({ isNightMode, handleToggleMoon }) => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [showQuote, setShowQuote] = useState(false);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setCurrentQuote(`${data.slip.advice}`);
      setShowQuote(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // setShowQuote(false);
    // fetchRandomQuote();
   
  }, []);

  const generateRandomQuote = () => {
    setShowQuote(false);
    fetchRandomQuote();
  };

  const selectedTheme = isNightMode ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Container>
        <Title>
          Random Quote Generator
          <FavoriteIcon style={{color: 'red', marginLeft:'7px' }}></FavoriteIcon>
        </Title>
        <Button>
        <button onClick={generateRandomQuote} style={{ color: isNightMode ? 'white' : 'black',width: '130px' ,height: '41px', backgroundColor:isNightMode ? 'black' : 'white'}}>Generate Quote</button>
        </Button>
        {showQuote && 
        <Message>
        <p style={{ color: isNightMode ? 'white' : 'black' }}>{currentQuote}</p>
        </Message>
}
      </Container>
    </ThemeProvider>
  );
};

export default Quotes;
