import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

//components
import { Container } from 'components/Container';
import { Title, Text } from 'components/Typography';

const LoginContainer = () => {
  return (
    <ThemeConsumer>
      {() => (
        <CustomContainer>
          <LoginWrap>
            <Title style={{ marginBottom: '25px' }}>Login</Title>
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
              <Divider />
              <Text style={{ textAlign: 'center' }}>Create Account</Text>
            </Footer>
          </LoginWrap>
        </CustomContainer>
      )}
    </ThemeConsumer>
  );
};

export default LoginContainer;

const CustomContainer = styled(Container)`
  min-height: calc(100vh - 180px);
`;

const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 410px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 30px;
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
    padding: 15px 5px;
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

const Divider = styled.div`
  width: 100%;
  position: relative;
  margin: 30px 0px;
  border: 1px solid ${(props) => props.theme.color.GRAY1};

  :after {
    content: 'OR';
    position: absolute;
    top: -8px;
    left: 45%;
    font-size: 16px;
    color: ${(props) => props.theme.color.GRAY2};
    background: ${(props) => props.theme.color.PRIMARY};
    z-index: 3;
  }
`;
