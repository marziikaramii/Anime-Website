import {StarIcon,PlusIcon} from '@heroicons/react/24/solid'
import Carousel from './Carousel'
import { useState , useEffect} from 'react'
export default function AnimeList()
{
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
};

     const [animeList,setAnimeList] = useState([])
      useEffect(()=>{
        /*https://api.jikan.moe/v4/anime?status=airing&limit=10&sort=desc*/
        fetch("https://api.jikan.moe/v4/seasons/now?status=airing&limit=10&sort=desc")
        .then(res=>res.json())
        .then(data=>setAnimeList(data.data))
        .catch((err)=>console.log(err))
      },[]) 
    if (animeList.length ==0 || !animeList)
    {
        return <p>Anime is Loading</p>
    }
    return<>
    <h1 className="text-4xl mb-3">Latest Episode</h1>
     <Carousel settings={carouselSettings}>
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </Carousel>
    </>
  

}

 function AnimeCard({anime})
{
    return (
        <div className='md:w-55 w-[90%] relativerounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-xl overflow-hidden h-[420px]'>
        <img className='w-full shadow-xl h-[200px] object-cover object-right-top'  src={anime.images.webp.image_url} alt="Girl in a jacket"/>
        <div className='px-3 flex flex-col justify-around h-[200px] '>
        <h3 className='text-sm truncate w-48' title={anime.title_english}>{anime.title_english.split('season')}</h3>
        <div className='flex justify-between'>
            <div className='flex justify-between items-center gap-1'>
                <StarIcon className='text-amber-400 w-5 h-5 text-sm'/><span className='text-xs'>{anime.score}</span>
            </div>
                <span className=' bg-light-orange pr-2 pl-2 rounded-md text-xs flex items-center justify-center text-black'>{anime.type}</span>
        </div>
         {/*title and description*/}
        <div>
            <div>
            <span className='text-gray-400 text-sm'>Aired : </span><span className='text-sm'>{new Date(anime.aired.from).toLocaleDateString("en-US",{
            month: "short",
            day: "numeric",
            year: "numeric"
            })}</span>
        </div>
         <div>
            <span className='text-gray-400 text-sm'>Status : </span><span className='text-sm'>{anime.status}</span>
        </div>
         <div>
            <span className='text-gray-400 text-sm'>Genres : </span><span className='text-sm'>{anime.genres.slice(0, 2).map((g) => g.name).join(", ")}</span>
        </div>
        </div>
        {/*title and description*/}
        {/*button*/}
        <div className='flex justify-center gap-1.5 items-center mt-3'>
            <button className='bg-light-orange  text-black rounded-3xl p-2 w-full cursor-pointer'>Watch Now</button>
            <button className='bg-white rounded-full w-8 h-8 p-2 flex justify-center items-center cursor-pointer'><PlusIcon  className='text-black text-sm w-5 h-5'/></button>
        </div>
        {/*button*/}
        </div>
       
        </div>
      
    )
}