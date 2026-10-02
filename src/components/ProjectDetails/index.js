import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding: 24px 12px;
  background: #000000b8;
`;

const Wrapper = styled.section`
  position: relative;
  width: min(100%, 760px);
  margin: auto;
  padding: 28px;
  border-radius: 10px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 600px) { padding: 22px 18px; }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.text_secondary}55;
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.primary}; }
`;

const Domain = styled.p`
  margin: 12px 42px 8px 0;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 600;
`;

const Title = styled.h2`
  margin-right: 36px;
  font-size: 24px;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 20px; }
`;

const Description = styled.p`
  margin: 12px 0 20px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.65;
`;

const Label = styled.h3`
  margin: 22px 0 10px;
  font-size: 16px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 16px 0;
  padding: 0;
  list-style: none;
`;

const Tag = styled.li`
  padding: 5px 9px;
  border: 1px solid ${({ theme }) => theme.text_secondary}55;
  border-radius: 5px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 13px;
`;

const List = styled.ul`
  display: grid;
  gap: 8px;
  padding-left: 20px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.55;
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  if (!project) return null;

  const close = () => setOpenModal({ state: false, project: null });

  return (
    <Modal open onClose={close} aria-labelledby="project-detail-title">
      <Container>
        <Wrapper>
          <CloseButton type="button" onClick={close} aria-label="Close project details">
            <CloseRounded aria-hidden="true" />
          </CloseButton>
          <Domain>{project.domain}</Domain>
          <Title id="project-detail-title">{project.title}</Title>
          <Description>{project.description}</Description>
          <Label>Technology stack</Label>
          <Tags>
            {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </Tags>
          <Label>Automated workflows</Label>
          <List>
            {project.workflows.map((workflow) => <li key={workflow}>{workflow}</li>)}
          </List>
          <Label>Framework features</Label>
          <List>
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </List>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
