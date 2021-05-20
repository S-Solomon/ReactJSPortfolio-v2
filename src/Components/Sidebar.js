import React from 'react'
import styled from 'styled-components'
import Navigation from '../Components/Navigation'

function Sidebar() {
    return (
        <SidebarStyled>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div `
    position: fixed;
    /* left: 0; */
    width: 16.3rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
`;



export default Sidebar
