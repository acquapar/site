import { Row } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  NavLink,
  Extra,
  LogoContainer,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <>
      <Extra>
        <Container border={true}>
            <NavLink to="/">
            <Row justify="center">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="200px"
                  height="150px"
                />
              </LogoContainer>
              </Row>
            </NavLink>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
