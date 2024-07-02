

import React from "react";
import ClassicSpotlight from "./ClassicSpotlight";
import ShoeBanner from "./ShoeBanner";
import NewestSeason from "./NewestSeason";
import DontMiss from "./DontMiss";
import ShoeSport from "./ShoeSport";
import Member from "./Member";




export default function Home(){



    return(
    <>
    <ShoeBanner />
    <ClassicSpotlight />
    <NewestSeason />
    <ShoeSport />
    <Member />
    <DontMiss />
    </>
    )
}