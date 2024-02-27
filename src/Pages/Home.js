import React from 'react'
import Add from '../Components/Add'
import Category from '../Components/Category'
import EndAdd from '../Components/EndAdd'
// import HomeCard from '../Components/HomeCard'
import HomeCard1 from '../Components/HomeCard1'




export default function Home() {
    return (
        <div>
            <Add />
            <Category />
            <br />
            <br />
            {/* <HomeCard /> */}
            <br />
            <br />

            <HomeCard1 />
            <br />

            <br />
            <EndAdd />
            <br />
            <br />

        </div>
    )
}
