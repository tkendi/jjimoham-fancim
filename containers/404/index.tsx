import React from 'react';
import styled from 'styled-components';

//components
import { Container } from 'components/Container';
import { Title } from 'components/Typography';

const NotFoundContainer = () => {
  return (
    <Container>
      <Wrap>
        <Title>Page Not Found</Title>
      </Wrap>
    </Container>
  );
};

export default NotFoundContainer;

const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
