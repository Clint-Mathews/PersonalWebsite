import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWarpper } from './styles'
import Img from '../../images/aboutme.png';
const Services = () => {
    return (
        <ServicesContainer id="services">
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWarpper>
                <ServicesCard>
                    <ServicesIcon src={Img} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help helphelphelphelphelphelphelphelp</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img} />
                    <ServicesH2>Reduce expenses2</ServicesH2>
                    <ServicesP>We3 help helphelphelphelphelphelphelphelp</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img} />
                    <ServicesH2>Reduce expenses2</ServicesH2>
                    <ServicesP>We3 help helphelphelphelphelphelphelphelp</ServicesP>
                </ServicesCard>
            </ServicesWarpper>  
        </ServicesContainer>
    )
}

export default Services
