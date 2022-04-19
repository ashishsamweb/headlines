
import { MostPopular } from "../../components/MostPopular/MostPopular";
import { LatestNews } from "../../components/LatestNews/LatestNews";
import { Newsletters } from "../../components/Newsletters/Newsletters";
import { Category } from "../../components/Category/Category";
import { Slider } from "../../components/Slider/Slider";

import React from 'react'

export const Home = () => {
  return (
    <div>
    <Slider />
    <MostPopular />
    <LatestNews />
    <Newsletters />
    <Category />
    </div>
  )
}
