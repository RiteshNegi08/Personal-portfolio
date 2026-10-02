import styled from "styled-components";
import ImageOutlined from "@mui/icons-material/ImageOutlined";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: min(100%, 348px);
  min-height: 390px;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.text_secondary}44;
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
  transition: transform 180ms ease, border-color 180ms ease;
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
  }
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

const ProjectVisual = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.text_secondary}33;
  border-radius: 6px;
  background: ${({ theme }) => theme.card_light};
`;

const ProjectImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  padding: 14px;
  object-fit: contain;
`;

const ImagePlaceholder = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  color: ${({ theme }) => theme.text_secondary};
  svg { width: 30px; height: 30px; opacity: 0.7; }
`;

const Domain = styled.p`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary};
  font-size: 13px;
  font-weight: 600;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 19px;
  line-height: 1.4;
`;

const Description = styled.p`
  margin: 12px 0;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.6;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 2px 0 12px;
  padding: 0;
  list-style: none;
`;

const Tag = styled.li`
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary}55;
  border-radius: 5px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 12px;
`;

const Highlights = styled.ul`
  display: grid;
  gap: 7px;
  margin: 0 0 18px;
  padding-left: 18px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  line-height: 1.45;
`;

const DetailsButton = styled.button`
  margin-top: auto;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover, &:focus-visible {
    background: ${({ theme }) => theme.primary}22;
    outline-color: ${({ theme }) => theme.primary};
  }
`;

const ProjectCards = ({ project, setOpenModal }) => (
  <Card>
    <ProjectVisual>
      {project.image
        ? <ProjectImage src={project.image} alt={`${project.title} project screenshot`} />
        : <ImagePlaceholder aria-hidden="true"><ImageOutlined /></ImagePlaceholder>}
    </ProjectVisual>
    <Domain>{project.domain}</Domain>
    <Title>{project.title}</Title>
    <Description>{project.description}</Description>
    <Tags aria-label="Technology stack">
      {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
    </Tags>
    <Highlights>
      {project.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}
    </Highlights>
    <DetailsButton
      type="button"
      onClick={() => setOpenModal({ state: true, project })}
      aria-label={`View details for ${project.title}`}
    >
      Project details
    </DetailsButton>
  </Card>
);

export default ProjectCards;
