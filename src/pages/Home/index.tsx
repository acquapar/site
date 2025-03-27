import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import SeafoodContent from "../../content/SeafoodContent.json";
import LogisticsContent from "../../content/LogisticsContent.json";
import ContactContent from "../../content/ContactContent.json";
import StaffBlock from "../../components/StaffBlock";
import { Staff } from "../../components/StaffBlock/types";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="altino.svg"
        id="intro"
      />
      <MiddleBlock
        title={AboutContent.title}
        content={AboutContent.text}
        button={AboutContent.button}
        id="about"
      />
      <ContentBlock
        direction="right"
        title={SeafoodContent.title}
        content={SeafoodContent.text}
        carousel
        id="seafood"
      />
      <ContentBlock
        direction="left"
        title={LogisticsContent.title}
        content={LogisticsContent.text}
        icon="logistics.png"
        id="logistics"
      />

      <StaffBlock 
        title="Staff"
        content={Staff}
        id="staff"
      />

      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
