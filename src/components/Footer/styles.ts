import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled("div")`
  display: flex;
  align-self: center;
`;
