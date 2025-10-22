import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

export  default function HeroCarousel()
{
    const heroSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

    const [animeSliderList,setSliderAnimeList] = useState([]);
    useEffect(()=>{
    fetch("https://corsproxy.io/?https://api.jikan.moe/v4/seasons/now?limit=10")
    .then(res=>res.json())
    .then(data=>(setSliderAnimeList(data.data)))
    .catch((err)=>console.error("Error fetching anime list:", err))
    },[])
      if (animeSliderList.length ==0 || !animeSliderList)
    {
        return <p>Anime is Loading</p>
    }
 return (
    <div className="slider-wrapper" >
           <Carousel settings={heroSettings} >
                   {animeSliderList.map((anime) => (
                    <HeroCarouselItem key={anime.mal_id} anime={anime} />
                   ))}
            </Carousel>
    </div>
 )
}
 function HeroCarouselItem({anime})
{
    return (
        <div className="h-[500px] overflow-hidden w-full slider-item">
            <img   src={anime.images.webp.large_image_url} />
        </div>
       
    )
}