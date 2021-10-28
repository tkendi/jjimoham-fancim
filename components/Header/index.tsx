import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

//components
import { Container } from "components/Container";

const Header = () => {
  const router = useRouter();

  return (
    <Nav>
      <CustomContainer>
        <Wrap>
          <Title onClick={() => router.push("/")}>Tkendi</Title>
          {/* <MenuWrap>
            <Menu onClick={() => router.push("/korea")}>
              <LinkTitle>Korea</LinkTitle>
            </Menu>
            <Menu onClick={() => router.push("/world")}>
              <LinkTitle>World</LinkTitle>
            </Menu>
          </MenuWrap> */}
        </Wrap>
      </CustomContainer>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: max-content;
  background-color: #fdfdfd;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const CustomContainer = styled(Container)`
  padding: 0px 15px;
`;

const Title = styled.h1`
  width: 120px;
  font-family: "Fredoka One", cursive;
  font-weight: "400";
  font-size: 30px;
  display: flex;
  white-space: pre;
  user-select: none;
  cursor: pointer;
`;

const MenuWrap = styled.div`
  width: calc(100% - 120px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 50px;
`;

const Menu = styled.div`
  border: none;
  outline: none;
  margin: 0px 15px;
  position: relative;
`;

const LinkTitle = styled.p`
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  text-align: center;
  font-family: "Hind", sans-serif;
  font-size: 17px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;
