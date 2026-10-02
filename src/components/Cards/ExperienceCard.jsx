import styled from 'styled-components'
import BusinessOutlined from '@mui/icons-material/BusinessOutlined';
const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const CompanyIdentity = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    min-height: 34px;
`

const CompanyLogo = styled.img`
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    object-fit: contain;
    border-radius: 5px;
    background: ${({ theme }) => theme.card_light};
`

const CompanyLogoPlaceholder = styled.div`
    display: grid;
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    place-items: center;
    border: 1px dashed ${({ theme }) => theme.text_secondary}66;
    border-radius: 5px;
    color: ${({ theme }) => theme.text_secondary};
    svg { width: 20px; height: 20px; }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Project = styled.div`
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 600;
`

const ProjectIdentity = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    min-height: 34px;
`;

const Metrics = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    @media (max-width: 480px) { grid-template-columns: 1fr; }
`

const Metric = styled.div`
    padding: 12px;
    border-left: 2px solid ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_light};
`

const MetricValue = styled.strong`
    display: block;
    color: ${({ theme }) => theme.text_primary};
    font-size: 22px;
`

const MetricLabel = styled.span`
    color: ${({ theme }) => theme.text_secondary};
    font-size: 12px;
`

const Responsibilities = styled.ul`
    padding-left: 20px;
    color: ${({ theme }) => theme.text_primary + 99};
    line-height: 1.6;
`

const Responsibility = styled.li`
    margin: 6px 0;
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Body>
                    <Role>{experience.role}</Role>
                    <CompanyIdentity>
                        {experience.companyLogo
                            ? <CompanyLogo src={experience.companyLogo} alt={`${experience.company} logo`} />
                            : <CompanyLogoPlaceholder role="img" aria-label={`${experience.company} logo placeholder`}><BusinessOutlined aria-hidden="true" /></CompanyLogoPlaceholder>}
                        <Company>{experience.company}</Company>
                    </CompanyIdentity>
                    <Date>{experience.date} · {experience.location}</Date>
                    <ProjectIdentity>
                        <Project>{experience.project}</Project>
                        {experience.projectLogo
                            ? <CompanyLogo src={experience.projectLogo} alt={`${experience.project} logo`} />
                            : <CompanyLogoPlaceholder role="img" aria-label={`${experience.project} logo placeholder`}><BusinessOutlined aria-hidden="true" /></CompanyLogoPlaceholder>}
                    </ProjectIdentity>
                </Body>
            </Top>
            <Description>
                {experience.metrics && <Metrics>
                    {experience.metrics.map((metric) => (
                        <Metric key={metric.label}>
                            <MetricValue>{metric.value}</MetricValue>
                            <MetricLabel>{metric.label}</MetricLabel>
                        </Metric>
                    ))}
                </Metrics>}
                {experience.desc && <Responsibilities>
                    {experience.desc.map((item) => <Responsibility key={item}>{item}</Responsibility>)}
                </Responsibilities>}
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={skill}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
        </Card>
    )
}

export default ExperienceCard