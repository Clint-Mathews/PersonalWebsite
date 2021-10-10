import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
interface sidebarStyledPros {
    isOpen: boolean;
}
const SidebarContainer = styled.aside<sidebarStyledPros>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen })=>(isOpen ? '0':'-100%')};
`;

const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const SidebarWrapper = styled.div`
    color: #fff;
`;

const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    fonr-size: 1.5rem;
    text-decoration: none;
    list-styles: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        color: #7AE5F5;
        transition: 0.2s ease-in-out;
    }
`;

const SidebtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;


const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;
`;

const SiderbarRoute = styled(LinkR)`
    border-radius:50px;
    background: #7AE5F5;
    white-space: nowrap;
    padding: 16px 64px;
    color: #101522;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #101522;
    }
`;

export {SidebarContainer, SidebarMenu, CloseIcon, Icon, SidebarWrapper, SiderbarRoute, SidebtnWrap, SidebarLink};