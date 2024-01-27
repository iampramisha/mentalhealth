import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../theme'
const Container=styled.div`
    height: 90vh;
    width: 100vw;
    padding-top:60px;
    align-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${(props) => props.theme.backgroundd};
    color: ${(props) => props.theme.textColor};
    justify-content: center;
`
const Title=styled.span`
font-size: 23px;
`
const Form=styled.div`
margin-top: 30px;
    gap: 2px;
    flex-direction: column;
`
const Box=styled.div`
    margin-top: 26px;
    
`
const Question=styled.div`
letter-spacing: 0.9px;
font-size: 18px;
`
const Input=styled.input`
margin-top: 10px;
    width: 320px;
`
const Submit=styled.button`
    height: 30px;
    width: 90px;
    margin-top: 10px;
    justify-content: center;
    text-align: center;
    align-content: center;
`
const Messagee=styled.h1`
    font-size: 18px;
`
const AlertMessage=styled.span`
font-size: 19px;
margin-top: 11px;
`

const Communicate = ({ isNightMode}) => {
    const [Inputt,setInput]=useState(false);
    
const [input1,setInput1]=useState('');
const [input2,setInput2]=useState('');
const [input3,setInput3]=useState('');

const [input4,setInput4]=useState('');
const [input5,setInput5]=useState('');

const [showAlert, setShowAlert] = useState(false);
    const handleSubmit=(e)=>{
e.preventDefault();
if (!input1.trim() || !input2.trim() || !input3.trim() || !input4.trim() || !input5.trim()) {
    setShowAlert(true);
    return;
}
setInput(true);
setShowAlert(false);
setInput1('');
setInput2('');
setInput3('');
setInput4('');
setInput5('');
    }
    const selectedTheme = isNightMode ? theme.dark : theme.light;
  return (
    <>
     <ThemeProvider theme={selectedTheme}>
    <Container>
        <Title>
            Feel free to answer and share your thoughts.We donot judge:)
        </Title>
        <Form>
            <Box>
            <Question>
            How are you feeling today?
            </Question>
            <Input value={input1} onChange={(e) => setInput1(e.target.value)}>
        
            </Input>
            </Box>
            <Box>
            <Question>
            Can you share any activities or coping mechanisms that have helped you in the past?
            </Question>
            <Input value={input2} onChange={(e) => setInput2(e.target.value)}>
        
            </Input>
            </Box>
            <Box>
            <Question>
            What is your preferred method of communication?
          </Question>
          <Input  value={input3} onChange={(e) => setInput3(e.target.value)}>
      
          </Input>
          </Box>
          <Box>
          <Question>
          Do you have a safety plan or specific steps you take when you're in distress?
          </Question>
          <Input  value={input4} onChange={(e) => setInput4(e.target.value)}>
      
          </Input>
          </Box>
          <Box>
          <Question>
          On a scale from 1 to 10, how would you rate the severity of your current feelings or symptoms?
          </Question>
          <Input  value={input5} onChange={(e) => setInput5(e.target.value)}>
      
          </Input>
          </Box>
        </Form>
        <Submit onClick={handleSubmit}> 
            Submit
        </Submit>
        {showAlert && <AlertMessage>Please fill in all input fields.</AlertMessage>}
      
        {Inputt && !showAlert && (<Messagee>
            Thankyou for responses.We are proud of you for opening up.
            </Messagee>)}
    </Container>
    </ThemeProvider>
    </>
 
  )
}

export default Communicate