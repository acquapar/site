import styled from "styled-components";

export const ContentWrapper = styled("div")`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const StaffBlockSection = styled("section")`
  padding: 7.5rem 0 3rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const ServiceWrapper = styled("div")`
  width: 100%;
`;