import {StarIcon,PlusIcon} from '@heroicons/react/24/solid'
export default function AnimeList({animeList})
{
    return<>
    <h1 className="text-4xl">The Best Anime</h1>
    <AnimeCard />
    </>
}

 function AnimeCard()
{
    return (
        <div className='w-50 relativerounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-xl overflow-hidden'>
        <img className='w-full shadow-xl' src="./punch.webp" alt="Girl in a jacket"/>
        <div className='p-4'>
        <h3>One Punch Man</h3>
        <div className='flex  justify-between'>
            <div className='flex justify-between items-center gap-1'>
                <StarIcon className='text-amber-400 w-5 h-5 text-sm'/><span>5.8</span>
            </div>
                <span className=' bg-light-orange pr-2 pl-2 rounded-md text-xs flex items-center justify-center text-black'>TV</span>
        </div>
        <div>
            <span className='text-gray-400 text-sm'>Aired : </span><span className='text-sm'>Oct 4, 2025</span>
        </div>
         <div>
            <span className='text-gray-400 text-sm'>Status : </span><span className='text-sm'>Currently Airing</span>
        </div>
         <div>
            <span className='text-gray-400 text-sm'>Genres : </span><span className='text-sm'>Action,School</span>
        </div>
         <div className='flex justify-center gap-1.5 items-center mt-3'>
            <button className='bg-light-orange  text-black rounded-3xl p-2 w-full cursor-pointer'>Watch Now</button>
            <button className='bg-white rounded-full w-8 h-8 p-2 flex justify-center items-center cursor-pointer'><PlusIcon  className='text-black text-sm w-5 h-5'/></button>
        </div>
        </div>
       
        </div>
    )
}