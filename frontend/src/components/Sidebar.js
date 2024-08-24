import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2c2c2c;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
`;

const SidebarItem = styled.a`
  display: block;
  color: #fff;
  margin: 10px 0;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #ff9900;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem href="/">Home</SidebarItem>
      <SidebarItem href="/games">Games</SidebarItem>
      <SidebarItem href="/leaderboard">Leaderboard</SidebarItem>
      <SidebarItem href="/profile">Profile</SidebarItem>
      <SidebarItem href="/promotions">Promotions</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
