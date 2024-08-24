import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Spinz Casino</Logo>
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/profile">Profile</NavItem>
        <NavItem href="/promotions">Promotions</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
