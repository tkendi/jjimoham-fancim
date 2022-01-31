import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

//components
import { Container } from 'components/Container';
import { Title, Text } from 'components/Typography';

const LoginContainer = () => {
  return (
    <ThemeConsumer>
      {() => (
        <Container>
          <LoginWrap>
            <Title>Login</Title>
            <LoginInputWrap>
              <label>
                <Text>Email</Text>
              </label>
              <LoginInput placeholder="Input your email" />
            </LoginInputWrap>
            <LoginInputWrap>
              <label>
                <Text>Password</Text>
              </label>
              <LoginInput type="password" placeholder="Input your password" />
            </LoginInputWrap>
            <Footer>
              <SubmitButton>
                <Text style={{ fontWeight: 'bold' }}>Login</Text>
              </SubmitButton>
            </Footer>
          </LoginWrap>
        </Container>
      )}
    </ThemeConsumer>
  );
};

export default LoginContainer;

const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 410px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.color.GRAY4};
  border-radius: 10px;

  > div:nth-of-type(2) {
    margin-top: 15px;
  }
`;

const LoginInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > label {
    padding: 0px 5px;
  }
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 13px 15px;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.GRAY2};
  background: transparent;
  outline: none;

  :focus {
    color: #fff;
  }
`;

const Footer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.color.GRAY5};
  border: 0px;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`;
