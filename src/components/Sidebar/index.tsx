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
                    <SidebarLink to="contactme" onClick={toggle}>
                        Contact me
                    </SidebarLink>
                    <SidebarLink to="/downloadresume" onClick={toggle}>
                        Download Resume
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SiderbarRoute to="/signIn" onClick={toggle}>Sign in</SiderbarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
