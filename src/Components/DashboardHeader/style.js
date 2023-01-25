import styled from "styled-components";

export const TopHeader = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0.5rem 3rem;
  align-items: center;
  box-shadow: 0px 13px 20px -4px rgba(207, 207, 207, 1);

  nav {
    ul {
      display: flex;
      li {
        margin-inline: 1rem;
      }
    }
  }
`;

export const NavLogo = styled.h1`
  font-size: 1rem;
`;

export const Menu = styled.div`
  padding: 0.2rem;
  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
