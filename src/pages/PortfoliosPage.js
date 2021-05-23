import React, { useState } from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title';
import portfolio from '../data/portfolio'
import Menu from '../Components/Menu'
import FilterButton from '../Components/FilterButton'

const allButtons = ['All', ...new Set(portfolio.map(item => item.category))]
// set data structure, values occur only once




function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolio);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All') {
            setMenuItems(portfolio);
            return;
        }

        const filteredData = portfolio.filter(item => item.category === button);
        setMenuItems(filteredData)
    }


    return (
        <MainLayout>
            <Title title={'Portfolio'} span={'portfolio'} />
            <InnerLayout>
                <FilterButton filter={filter} button={button}/>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
