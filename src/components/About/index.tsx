import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWarpper } from './styles'
import Img from '../../images/aboutme.png';
const About = () => {
    return (
        <ServicesContainer id="about">
          <ServicesH1>About</ServicesH1>
          <ServicesWarpper>
              <div>
                  <h3>2+ years of experience in building SaaS applications that add value to the end-users. Expertise in creating robust and complicated software modules for enterprise and e-commerce companies, using React, Angular, and Microsoft .NET Technologies.</h3>
              </div>
              
            </ServicesWarpper>  
        </ServicesContainer>
    )
}

export default About
