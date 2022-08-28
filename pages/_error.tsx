import { NextPage } from 'next';
import styled from 'styled-components';

//components
import { Container } from 'components/Container';
import { Title } from 'components/Typography';

const ErrorPage: NextPage = () => {
  return (
    <Container>
      <Wrap>
        <Title>500 Error</Title>
      </Wrap>
    </Container>
  );
};

export default ErrorPage;

const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
