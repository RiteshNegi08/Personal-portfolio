import styled from "styled-components";
import { achievements, certifications } from "../../data/constants";

const Section = styled.section`
  width: min(100%, 1100px);
  margin: 0 auto;
  padding: 24px;
  scroll-margin-top: 88px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 32px;
  @media (max-width: 768px) { font-size: 27px; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const Item = styled.article`
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_secondary}33;
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
`;

const CredentialPreviewLink = styled.a`
  display: block;
  margin: -4px -6px 14px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.text_secondary}44;
  border-radius: 6px;
  background: #fff;
  aspect-ratio: 4 / 3;
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.primary}; outline-offset: 3px; }
`;

const CredentialPreview = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ItemTitle = styled.h3`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  line-height: 1.45;
`;

const ItemDetail = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.55;
`;

const CredentialLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 600;
  text-underline-offset: 3px;
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.primary}; outline-offset: 3px; }
`;

const Credentials = () => (
  <>
    <Section id="certifications" aria-labelledby="certifications-title">
      <Title id="certifications-title">Certifications</Title>
      <Grid>
        {certifications.map((certification) => (
          <Item key={certification.title}>
            <CredentialPreviewLink
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open and verify ${certification.title} on Udemy`}
            >
              <CredentialPreview src={certification.preview} alt={`${certification.title} certificate preview`} />
            </CredentialPreviewLink>
            <ItemTitle>{certification.title}</ItemTitle>
            <ItemDetail>{certification.provider} · {certification.date}</ItemDetail>
            <CredentialLink
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certification.title} certificate on Udemy`}
            >
              View credentials
            </CredentialLink>
          </Item>
        ))}
      </Grid>
    </Section>
    <Section id="achievements" aria-labelledby="achievements-title">
      <Title id="achievements-title">Achievements</Title>
      <Grid>
        {achievements.map((achievement) => (
          <Item key={achievement.title}>
            <ItemTitle>{achievement.title}</ItemTitle>
            <ItemDetail>{achievement.description}</ItemDetail>
          </Item>
        ))}
      </Grid>
    </Section>
  </>
);

export default Credentials;
