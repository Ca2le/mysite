import github from "/assets/git.png";
import linkedin from "/assets/linked.png";
import styled from "styled-components";

const ContactFooter = () => {
  return (
    <Footer>
      <Header>message@carlsporrong.com</Header>
      <Container style={{ display: "flex", gap: "15px" }}>
        <a href="https://github.com/Ca2le">
        <Img
          src={github}
          alt="github"
        />
        </a>
        {/* <Img
          onClick={() => navigateTo("twitter")}
          src={twitter}
          alt="twitter"
        /> */}
        <a href="https://www.linkedin.com/in/carl-sporrong-400a84157/">
          <Img src={linkedin} alt="linkedin" />
        </a>
      </Container>
      <Copyright>All rights reserved. © 2024</Copyright>
    </Footer>
  );
};
export default ContactFooter;

const Header = styled.h1`
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    gap: 5px;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  font-family: "Roboto", sans-serif;
  border: 1px solid #000;
  gap: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  height: 200px;

  background-color: #fff576;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    justify-content: center;

    gap: 15px;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #313131;
  margin-top: 20px;
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;
