import styled from 'styled-components';

export const Nav = styled.nav<{ bgColor: string }>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0px;
  background-color: ${(props) => props.bgColor};

  transition: all 380ms ease;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Title = styled.h1`
  width: 120px;
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  font-family: 'Fredoka One', cursive;
  font-weight: '400';
  font-size: 30px;
  display: flex;
  white-space: pre;
  user-select: none;
  cursor: pointer;
  color: #fff;
`;

export const MenuWrap = styled.div`
  width: calc(100% - 120px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 50px;
`;

export const Menu = styled.div`
  border: none;
  outline: none;
  margin: 0px 15px;
  position: relative;
  color: #fff;

  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;

export const LinkTitle = styled.p`
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  text-decoration: none;
  text-align: center;
  font-family: 'Hind', sans-serif;
  font-size: 17px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div``;
