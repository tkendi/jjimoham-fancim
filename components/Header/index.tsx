import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//components
import { Container } from "components/Container";

//style
import {
  Nav,
  Wrap,
  MenuWrap,
  Menu,
  MobileMenu,
  LinkTitle,
  Title,
} from "./style";

const Header = () => {
  const router = useRouter();
  const [bgColor, setBgColor] = useState("#1a1a1a");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY <= 80) {
        setBgColor("#1a1a1a");
      } else {
        setBgColor("#444444");
      }
    });
  }, []);

  return (
    <Nav id="header" bgColor={bgColor}>
      <Container>
        <Wrap>
          <Title onClick={() => router.push("/")}>Tkendi</Title>
          <MenuWrap>
            <Menu onClick={() => router.push("/#")}>
              <LinkTitle>Next</LinkTitle>
            </Menu>
            <Menu onClick={() => router.push("/nest")}>
              <LinkTitle>Nest</LinkTitle>
            </Menu>
            <MobileMenu></MobileMenu>
          </MenuWrap>
        </Wrap>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  height: max-content;
  background-color: #1a1a1a;
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
  color: #fff;
`;

const MenuWrap = styled.div`
  width: calc(100% - 120px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 50px;
`;

const Menu = styled.div`
  border: none;
  outline: none;
  margin: 0px 15px;
  position: relative;
  color: #fff;
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
