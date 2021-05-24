import React from 'react'
import styled from 'styled-components'
import avatar from '../img/avatar.jpg'
import { NavLink } from 'react-router-dom'

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch'
import { useState } from "react";
import { useEffect } from "react";


function Navigation() {
    const [checked, setChecked] = useState(false);
    const [theme, setTheme] = useState('dark-theme');

    useEffect(()=>{
        document.documentElement.className = theme;
    }, [theme]);

    const themeToggler = () =>{
        if(theme === 'light-theme'){
            setTheme('dark-theme');
            setChecked(false)
        }else{
            setTheme('light-theme');
            setChecked(true)
        }
    }




    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="profile" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                {/* <p>@2021 all rights reserved</p> */}
                <div className="theme">
                    <div className="light-dark-mode">
                        <div className="left-content">
                            <Brightness4Icon style={{ fontSize: 20}}/>
                        </div>
                        <div className="right-content">
                            <Switch
                                value=""
                                checked={checked}
                                inputProps={{ 'aria-label': '' }}
                                size="small"
                                onClick={themeToggler}                
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);


    .avatar {
        width: 100%;
        /* height: 40%; */
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img {
            width: 70%;
            /* height: auto; */
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;
        .active-class {
            background-color: var(--primary-color-light);
            color: white;
        }
        li {
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover {
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: red;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;

                }
            }
            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid var(--border-color);
        width: 100%;
        padding: 1rem 0;
        .theme {
            .light-dark-mode {
            }
        }
        p {
            padding: 2rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }



`;

export default Navigation
