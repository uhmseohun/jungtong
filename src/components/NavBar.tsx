import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Nav>
    <Title>🌎 네트워크 관리사</Title>
    <MenuList>
      <Menu><Link to="/writting/0">필기 - 1</Link></Menu>
      <Menu><Link to="/practical/0">실기 - 1</Link></Menu>
      <Menu><Link to="/practical/1">실기 - 2</Link></Menu>
    </MenuList>
  </Nav>
);

export default NavBar;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.5rem;
  padding: 0 10%;
`;

const Title = styled.span`
  font-weight: 800;
`;

const MenuList = styled.ul`
  margin-left: auto;
  display: flex;
`;

const Menu = styled.li`
  list-style: none;
  margin-left: 1.5rem;
`;
