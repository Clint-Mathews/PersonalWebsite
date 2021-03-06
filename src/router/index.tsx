import ContactMe from "pages/ContactMe";
import { ReactElement } from "react";
import {Redirect, Route} from 'react-router-dom';
import Home from "../pages/home";

function AppRouter(): ReactElement {
    return (
        <switch>
            <Route exact path="/PersonalWebsite">
                <Home />
            </Route>
            <Route exact path="/PersonalWebsite/ContactMe">
                <ContactMe />
            </Route>
            <Route> 
                <Redirect to="/"/>
                <Redirect from="*" to="/PersonalWebsite" />
            </Route>
        </switch>
    );
}
export default AppRouter;