import styled from 'styled-components';

//font-size mobile, tab, pc unify the size

const TypoStyle = {
  padding: '0px',
  color: '#fff',
  margin: '0px',
  background: "transparent"
};

export const Text = styled.p`
  ${TypoStyle}

  font-weight: 400;
  line-height: 18px;

  ${(props) => props.theme.window.mobile} {
    line-height: 24px;
  }

  ${(props) => props.theme.window.mobile} {
    line-height: 36px;
  }
`;

export const Title = styled.h1`
  ${TypoStyle}
  line-height: 42px;

  font-family: 'Fira Sans', sans-serif;
  font-weight: bold;

  ${(props) => props.theme.window.tab} {
    line-height: 24px;
  }

  ${(props) => props.theme.window.mobile} {
    line-height: 36px;
  }
`;
