import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 76px 24px 56px;
  scroll-margin-top: 88px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1040px;
`;

const Eyebrow = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 8px 0 16px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 34px;
  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

const Summary = styled.p`
  max-width: 900px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  line-height: 1.8;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Focus = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  line-height: 1.7;
`;

const About = () => (
  <Container id="about" aria-labelledby="about-title">
    <Content>
      <Eyebrow>Quality Engineering</Eyebrow>
      <Title id="about-title">About Me</Title>
      <Summary>
        Test Automation Engineer with nearly 2 years of experience across the
        Software Testing Life Cycle, from requirements analysis and test design
        through functional, regression, API, and end-to-end testing. At LTM, I
        contribute to quality engineering for a Health &amp; Benefits Broker
        platform and build maintainable automation with Playwright, TypeScript,
        Selenium, Java, and Cucumber.
      </Summary>
      <Focus>
        Focus Areas: Continuous Learning, Scalable Automation Architecture, AI-Augmented Quality
        Engineering, and Reliable Software Delivery.
      </Focus>
    </Content>
  </Container>
);

export default About;