import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0px 15px;

  ${(props) => props.theme.window.mobile} {
    max-width: unset;
    width: 100%;
  }
`;
