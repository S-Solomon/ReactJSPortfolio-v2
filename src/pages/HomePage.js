import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>lorem ipsum</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ut ullam dolorum laborum ea inventore vero itaque cum
                    suscipit cumquelaboriosam?
                </p>
                <div className="icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/S-Solomon" target="_blank" rel="noreferrer" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://codepen.io/s-solomon" target="_blank" rel="noreferrer" className="icon i-youtube">
                        <YouTubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header `
    width: 100%;
    height: 100vh;
    position: relative;

    .particle-con {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                &:hover {
                    cursor: pointer;
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                svg {
                    margin: .5rem;
                }
            }
            .i-youtube {
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: red;
                }
            }
            .i-github {
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: purple;
                }
            }
            .i-facebook {
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: blue;
                }
            }
        }
    }

`;

export default HomePage
