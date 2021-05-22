import React from 'react'
import { InnerLayout } from '../styles/Layouts'
import styled from 'styled-components'
import Title from './Title'
import ServiceCard from '../Components/ServiceCard'
import design from '../img/design.svg'
import intelligence from '../img/intelligence.svg'
import gamedev from '../img/game-dev.svg'


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'}/>
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={'Web Design'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    />
                    <ServiceCard
                        image={intelligence}
                        title={'Artificial Intelligence'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    />
                    <ServiceCard
                        image={gamedev}
                        title={'Game Development'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section `
    .services {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
    }
`;

export default ServicesSection
