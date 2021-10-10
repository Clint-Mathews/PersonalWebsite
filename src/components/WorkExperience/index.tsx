import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWarpper } from './styles'
import Img from '../../images/aboutme.png';
const WorkExperience = () => {
    const data  = [
        "Responsible for Designing/Implementing new features for both Web/Mobile applications.",
        "Responsible for creating robust and scalable application components using ReactJS.",
        "Responsible for maintaining the development schedules based on customer commitments.",
        "Responsible for Designing/Implementing new features in the product and also redesigning the existing enterprise system.",
       "Responsible for Documenting User Stories, High-Level Design (HLD) and Low-Level Design (LLD) documents.",
        "Full Stack Developer developing reusable API methods for Web/Mobile Applications in .NET Core Framework.",
        "Worked as Client Consultant in different Life Cycle Activities such as Client Requirement Collection, Coding and Development, User Test Cases Creation, and Go-Live Support.",
        "Responsible for writing self-documented code, in conducting design and code reviews.",
        "Worked with Build and Release, Systems Integration, Estimations/Planning & DevOps.",
        "Prioritize work and address multiple tasks concurrently",
        "Worked as part of the Experion discovery team to research and analyze newer technologies."
    ];
    return (
        <ServicesContainer id="experience">
          <ServicesH1>Experience</ServicesH1>
          <ServicesWarpper>
              <div>
                  <h2>SOFTWARE ENGINEER   </h2>
                  <h3>Experion Technologies, Lulu Cyber Tower, Kochi, India</h3>
                  <p>
                  <h4>2019 - PRESENT</h4>
                  <br/>
                  <div>
                    <ul>
                        {data.map((x:any)=>
                        <li>{x}</li>
                        )}
                    </ul>
                    </div>
                  </p>
              </div>
              </ServicesWarpper>
        </ServicesContainer>
    )
}

export default WorkExperience
