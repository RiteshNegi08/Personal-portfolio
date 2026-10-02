import styled from "styled-components";
import { expertise, skills } from "../../data/constants";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 24px 76px;
  scroll-margin-top: 88px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.text_primary};
  font-size: 34px;
  @media (max-width: 768px) { font-size: 28px; }
`;

const Desc = styled.p`
  margin: 8px 0 28px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
`;

const ExpertiseGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 44px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const ExpertiseItem = styled.article`
  min-height: 96px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.text_secondary}33;
  border-radius: 8px;
  padding: 16px;
`;

const ExpertiseTitle = styled.h3`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
`;

const ExpertiseDescription = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.5;
`;

const SkillGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  @media (max-width: 760px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const SkillGroup = styled.article`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.text_secondary}33;
  border-radius: 8px;
  padding: 18px;
`;

const SkillTitle = styled.h3`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 17px;
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
`;

const SkillItem = styled.li`
  padding: 7px 10px;
  border: 1px solid ${({ featured, theme }) => featured ? theme.primary : `${theme.text_secondary}55`};
  border-radius: 6px;
  color: ${({ featured, theme }) => featured ? theme.text_primary : theme.text_secondary};
  background: ${({ featured, theme }) => featured ? `${theme.primary}22` : "transparent"};
  font-size: 14px;
  font-weight: ${({ featured }) => featured ? 600 : 400};
`;


const Skills = () => (
  <Container id="skills" aria-labelledby="skills-title">
    <Wrapper>
      <Title id="skills-title">Testing &amp; Automation Expertise</Title>
      <ExpertiseGrid>
        {expertise.map((item) => (
          <ExpertiseItem key={item.title}>
            <ExpertiseTitle>{item.title}</ExpertiseTitle>
            <ExpertiseDescription>{item.description}</ExpertiseDescription>
          </ExpertiseItem>
        ))}
      </ExpertiseGrid>
      <Title>Technical Skills</Title>
      <SkillGroups>
        {skills.map((group) => (
          <SkillGroup key={group.title}>
            <SkillTitle>{group.title}</SkillTitle>
            <SkillList>
              {group.skills.map((skill) => (
                <SkillItem key={skill} featured={["Playwright", "TypeScript", "Selenium", "Cucumber", "Azure DevOps", "MSSQL Server", "GitHub Actions"].includes(skill)}>
                  {skill}
                </SkillItem>
              ))}
            </SkillList>
          </SkillGroup>
        ))}
      </SkillGroups>
    </Wrapper>
  </Container>
);

export default Skills