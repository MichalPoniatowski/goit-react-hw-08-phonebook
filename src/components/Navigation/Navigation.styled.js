import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  // padding: 8px 0;

  border-bottom: 1px solid black;

  > nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    pading: 0;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const RegisterMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 12px;
`;
