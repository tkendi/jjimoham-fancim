import React from 'react';

//component
import { Container } from 'components/Container';
import { Text, Title } from 'components/Typography';
import styled, { ThemeConsumer } from 'styled-components';

const SignupContainer = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Container>
          <SignupWrap>
            <Title style={{ marginBottom: '25px' }}>Signup</Title>
          </SignupWrap>
        </Container>
      )}
    </ThemeConsumer>
  );
};

export default SignupContainer;

const SignupWrap = styled.div`
  width: 100%;
  max-width: 410px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.color.GRAY4};
  border-radius: 10px;
`;
