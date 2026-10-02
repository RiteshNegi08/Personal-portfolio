import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, PhoneLink, ContactMe } from './HeroStyle'
import HeroImg from '../../images/HeroImage.png'
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="home">
            <HeroContainer>
                <HeroBg>
                    <div aria-hidden="true"><HeroBgAnimation /></div>
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{Bio.roles[0]}</Title>
                        <TextLoop>{Bio.name}</TextLoop>
                        <Span>Playwright | TypeScript | AI-Augmented Testing </Span>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ContactMe href="#contact">Contact Me</ContactMe>
                        <PhoneLink href={`tel:${Bio.phone.replace(/\s/g, "")}`}>{Bio.phone}</PhoneLink>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="Portrait of Ritesh Negi" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection