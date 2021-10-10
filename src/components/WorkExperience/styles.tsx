import styled from "styled-components";

const ServicesContainer = styled.div`
height: 600px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: white;

@media screen and (max-width:768px) {
    height: 1100px;
}
@media screen and (max-width:480px) {
    height: 1300px;
}
`;

const ServicesWarpper = styled.div`
// max-width: 1000px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 50px;
color: black;
& div {
    padding: 10px 20px;
}
@media screen and (max-width:1000px) {
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`;

const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: black;
margin-bottom: 64px;
@media screen and (max-width:480px) {
    font-size: 2rem;
}
`;

const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`;

export {ServicesContainer,ServicesWarpper,ServicesCard,ServicesIcon,ServicesH1,ServicesH2,ServicesP};