import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWarpper } from './styles'
import Img from '../../images/aboutme.png';
const Services = () => {
    return (
        <ServicesContainer id="services">
          <ServicesH1>Education</ServicesH1>
          <ServicesWarpper>
              <div>
                  <h3>Bachelor of Technology (Computer Science)- 7.88 CGPA</h3>
                  <p>
                  2015-2019, Mar Athanasius College of Engineering Kothamangalam, Kerala.
                  <br/>
                  <div>
                  Projects: 
                    <ul>
                        <li>
                        WIFALL:  Wifall is a fall detection system implemented in old-age homes which uses wifi signals for detection.
                        </li>
                        <li>
                        Book Bank (Mini project): Online book management system for collection and reuse of used books from seniors in college.

                        </li>
                    </ul>
                    </div>
                  </p>
              </div>
              <div>
                  <h3>Senior Secondary (Computer Science)- 97%
</h3>
                  <p>
                  2013-2015, SNDP HSS Aluva, Kerala.
                  </p>
              </div>
              <div>
                  <h3>SSLC - 94%

</h3>
                  <p>
                  2012-2013, ST.JOHN THE BAPTIST CSI EMHS Aluva, Kerala.

                  </p>
              </div>
                {/* <ServicesCard>
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
                </ServicesCard> */}
            </ServicesWarpper>  
        </ServicesContainer>
    )
}

export default Services
