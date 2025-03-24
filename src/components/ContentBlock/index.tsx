import { Row, Col, Carousel } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  ImageWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  carousel,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          { carousel ?
          <Col lg={11} md={11} sm={12} xs={24}>
              <Carousel style={{borderRadius: 100, objectFit: 'contain'}} autoplay autoplaySpeed={4000} infinite>
                <ImageWrapper>
                  <img src='/img/carousel/fish1.jpeg' width="80%" height="80%" alt='carousel  '/>
                </ImageWrapper>
                <ImageWrapper>
                  <img src='/img/carousel/shrimp1.jpeg' width="80%" height="80%" alt='carousel  '/>
                </ImageWrapper>
                <ImageWrapper>
                  <img src='/img/carousel/fish2.jpeg' width="80%" height="80%" alt='carousel  '/>
                </ImageWrapper>
                <ImageWrapper>
                  <img src='/img/carousel/shrimp2.jpeg' width="80%" height="80%" alt='carousel  '/>
                </ImageWrapper>
                <ImageWrapper>
                  <img src='/img/carousel/fish3.jpeg' width="80%" height="80%" alt='carousel  '/>
                </ImageWrapper>
              </Carousel>
          </Col>
          :
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon!} width="100%" height="100%" />
          </Col>
          }
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("about")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="120px"
                                height="120px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
