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

export default Header;
