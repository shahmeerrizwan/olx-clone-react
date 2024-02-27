import React from 'react'
import Add from '../Components/Add'
import Category from '../Components/Category'
import EndAdd from '../Components/EndAdd'
import HomeCard from '../Components/HomeCard'
import HomeCard1 from '../Components/HomeCard1'
import HomeCard2 from '../Components/HomeCard2'
import HomeCard3 from '../Components/HomeCard3'
import HomeCard4 from '../Components/HomeCard4'
import HomeCard5 from '../Components/HomeCard5'
import HomeCard6 from '../Components/HomeCard6'
import BannerAdd from '../Components/BannerAdd'








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
            <HomeCard4 />
            <HomeCard5 />
            <HomeCard6 />



            <br />

            <br />
            <EndAdd />
            <br />

            <BannerAdd />
        </div>
    )
}
