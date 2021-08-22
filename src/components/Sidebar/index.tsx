import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper , SidebtnWrap, SiderbarRoute} from './styles';

const Sidebar = ({isOpen,toggle}:any) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="info" onClick={toggle}>
                        Info
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact me
                    </SidebarLink>
                    <SidebarLink to="/ContactMe" onClick={toggle}>
                        Contact Me
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SiderbarRoute to="/PersonalWebsite/ContactMe" onClick={toggle}>Sign in</SiderbarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
