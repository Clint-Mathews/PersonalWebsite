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
                    <SidebarLink to="experience" onClick={toggle}>
                        Contact me
                    </SidebarLink>
                    {/* <SidebarLink to="/ContactMe" onClick={toggle}>
                        Contact Me
                    </SidebarLink> */}
                </SidebarMenu>
                <SidebtnWrap>
                    <SiderbarRoute to="footer" onClick={toggle}> Contact Me</SiderbarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
