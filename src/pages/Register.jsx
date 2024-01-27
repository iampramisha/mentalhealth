import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../theme'

const Container=styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: ${(props) => props.theme.backgroundd};
    color: ${(props) => props.theme.textColor};

`
const Intro=styled.span`
    font-size: 29px;
    margin-bottom: 40px;
    font-weight: bold;
`
const Wrapper=styled.div`
height: 41vh;
width: 40vh;
/* background-color: #85c4fc; */

text-align: center;
display: flex;
flex-direction: column;
border-radius: 40px;
box-shadow: 4px 4px 4px 4px black;
`
const Form=styled.form`
display: flex;
align-items: center;
    text-align: center;
    
    justify-content: center;
flex-direction: column;
`
const InpEmail=styled.input`
width: 180px;
height: 23px;
`
const Submit=styled.button`
margin-top: 20px;
align-items: center;
background-color: teal;
    text-align: center;
    height: 29px;
    justify-content: center;
`
const Reg=styled.h1`
`
const P=styled.p`
font-size: 22px;
color: ${(props) => props.theme.textColor};

`
const Register = ({ isNightMode}) => {
 

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any necessary validation before submitting
  
      // Assuming validation passes, update state
      setSubmitted(true);
      setEmail('');
  
      // You can now send the email to the server or perform any other necessary actions
    };
  const selectedtheme= isNightMode? theme.dark : theme.light;
    return (
      <>
      <ThemeProvider theme={selectedtheme}>
        <Container>
          <Intro>Session with Nagendra P Luitel</Intro>
          <Wrapper>
            <Reg>
                Register
            </Reg>
            <Form onSubmit={handleSubmit}>
              <InpEmail
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Submit type="submit">Register</Submit>
            </Form>
            {submitted && <P>We will email the appointment date soon!</P>}
          </Wrapper>
        </Container>
        </ThemeProvider>
      </>
    );

  };

export default Register