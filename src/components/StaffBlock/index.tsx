import { Row, Col } from "antd";
import { ServiceWrapper, StaffBlockSection } from "./styles";
import { ContentWrapper } from "./styles";
import { MinPara, MinTitle } from "../ContentBlock/styles";
import { SvgIcon } from "../../common/SvgIcon";

interface StaffBlockProps {
  title: string;
  content: StaffProps[]
  id: string;
}

export interface StaffProps {
  name: string
  image: string
  position: string
  email: string
  id: number
}

const StaffBlock = ({ title, content, id }: StaffBlockProps) => {
  return (
        <StaffBlockSection id={id}>
                <ContentWrapper>
                    <ServiceWrapper>
                      <h6>{title}</h6>
                      <Row justify="center" gutter={[24, 24]}>
                        {content.map((staff) => (
                          <Col key={staff.id} xs={24} sm={12} md={8} lg={8} xl={6}>
                            <SvgIcon src={staff.image} width="180px" height="180px" />
                            <MinTitle>{staff.name}</MinTitle>
                            <MinPara>{staff.position}</MinPara>
                            <MinPara>{staff.email}</MinPara>
                          </Col>
                        ))}
                      </Row>
                    </ServiceWrapper>
                </ContentWrapper>
        </StaffBlockSection>
  );
};

export default(StaffBlock);
