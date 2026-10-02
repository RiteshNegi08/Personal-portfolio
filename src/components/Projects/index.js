import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({setOpenModal}) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Featured Automation Projects</Title>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects