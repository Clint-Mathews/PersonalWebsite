import React from 'react'
import { Button } from 'ui-components/Button'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, SubTitle, TextWrapper, TopLine } from './styles';

const InfoSection = ({lightBg,id,topLine,lightText,imgStart,darkText,headLine,description,buttonLabel,img,alt,primary,dark,dark2}:any) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                {headLine && <Heading lightText={lightText}>{headLine}</Heading>}
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                {buttonLabel && <BtnWrap>
                                    <Button to="home" smooth={true} duration={500} spy={true} dark={dark?true:false} primary={primary ? true:false} offset={-80} >{buttonLabel}</Button>
                                    {/* dark2={dark2?true:false}
                                    exact="true" */}
                                </BtnWrap>}
                            </TextWrapper>
                        </Column1>
                        {img && <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>}
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection;
