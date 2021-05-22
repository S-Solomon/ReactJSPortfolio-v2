import React from 'react'
import styled from 'styled-components'
import resume from '../img/resume.jpg'
import PrimaryButton from './PrimaryButton'



function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume" />
            </div>
            <div className="right-content">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus aliquam
                    doloremque quis eligendi et iusto cupiditate provident. Quos, tenetur? Nostrum nulla architecto
                    ipsum totam nesciunt porro ipsam quisquam laudantium inventore! Nam ea rerum doloribus.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name :</p>
                        <p>Age :</p>
                        <p>Nationality :</p>
                        <p>Languages :</p>
                        <p>Location :</p>
                        <p>Service :</p>
                    </div>
                    <div className="info">
                        <p>Lorem Ipsum</p>
                        <p>36</p>
                        <p>Spanish </p>
                        <p>Spanish, French, English </p>
                        <p>London, United Kingdom</p>
                        <p>Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div `
    margin-top: 5rem;
    display: flex;
    .left-content {
        width: 100%;
        img {
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content {
        width: 100%;
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
    }
    .paragraph {
        padding: 1rem 0;
    }
    .about-info {
        display: flex;
        padding-bottom: 1.5rem;
        .info-title {
            padding-right: 3rem;
            p {
                font-weight: 600;
            }
        }
        .info-title, .info {
            p {
                padding: .3rem 0;
            }
        }
    }
`;

export default ImageSection
