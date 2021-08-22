import Footer from "components/Footer";
import Services from "components/Services";
import InfoSection from "pages/info";
import { homeObjOne, homeObjTwo } from "pages/info/data";
import { useState } from "react";
import { ReactElement } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Main from "../main";

function Home(): ReactElement {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Main />
        <InfoSection {...homeObjOne} />
        <Services />
        <InfoSection {...homeObjTwo} />
        <Footer />
        </>
    );
}

export default Home;