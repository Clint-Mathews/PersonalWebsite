import { ReactElement } from "react";
import { ArrowForward, ArrowRight, MainBg, MainBtnWrapper, Maincontainer, MainContent, MainH1, MainP, VideoBg } from "./styles";
import Video from '../../videos/video.mp4';
import { useState } from "react";
import {Button} from '../../ui-components/Button';
function Main(): ReactElement {
    const [hover, setHover] = useState(false);
    const onHover =() => {
        setHover(!hover);
    }
    return (
        <Maincontainer id='info'>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video}/>
            </MainBg>
            <MainContent>
                <MainH1>Main Page</MainH1>
                <MainP>Thallu</MainP>
                <MainBtnWrapper>
                    <Button to="about"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={true}
                        dark={true}
                        smooth={true} duration={500} spy={true} offset={-80}
                        >
                            
                        Get started{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </Maincontainer>
    );
}

export default Main;