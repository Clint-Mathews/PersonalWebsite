import React from 'react'
import { FaFacebook, FaGithub, FaHackerrank, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWarp, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './styles'
import { animateScroll as scroll } from 'react-scroll';
import { urls } from 'constants/constants.enum';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer id="footer">
            <FooterWarp>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/about">
                                Contact me
                            </FooterLink>
                            <FooterLink to="/services">
                                service
                            </FooterLink>
                            <FooterLink to="/PersonalWebsite/ContactMe">
                                Contact me
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/PersonalWebsite' onClick={toggleHome}>
                            Clint Mathews
                        </SocialLogo>
                        <WebsiteRights>
                            Clint Mathews © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href={urls.linkedIn} target='_blank' aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            {/* <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                                <FaInstagram /> */}
                            {/* </SocialIconLink> */}
                            <SocialIconLink href={urls.twitter} target='_blank' aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href={urls.gitHub} target='_blank' aria-label="GitHub">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href={urls.hackerRank} target='_blank' aria-label="HackerRank">
                                <FaHackerrank />
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWarp>
        </FooterContainer>
    )
}

export default Footer
