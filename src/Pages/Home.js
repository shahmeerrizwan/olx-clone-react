import React from 'react'
import Add from '../Components/Add'
import Category from '../Components/Category'
import EndAdd from '../Components/EndAdd'
import HomeCard from '../Components/HomeCard'
import HomeCard1 from '../Components/HomeCard1'
import HomeCard2 from '../Components/HomeCard2'
import HomeCard3 from '../Components/HomeCard3'





export default function Home() {
    return (
        <div>
            <Add />
            <Category />
            <br />
            <br />
            <HomeCard />
            <HomeCard1 />

            <HomeCard2 />
            <HomeCard3 />
            <br />

            <br />
            <EndAdd />
            <br />
            <br />

        </div>
    )
}
