import {StarIcon,PlusIcon} from '@heroicons/react/24/solid'
export default function AnimeList({animeList})
{
    return<>
    <h1 className="text-4xl mb-3">The Best Anime</h1>
    <div className='flex gap-2 justify-start flex-wrap h-full'>
    {
    animeList.map(anime=> <AnimeCard key={anime.mal_id} anime={anime}/> )
    }
    </div>
    </>
}

 function AnimeCard({anime})
{
    console.log(anime)
    return (
        <div className='w-50 relativerounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-white rounded-xl overflow-hidden'>
        <img className='w-full shadow-xl' src={anime.images.webp.image_url} alt="Girl in a jacket"/>
        <div className='p-4'>
        <h3>{anime.title_english}</h3>
        <div className='flex  justify-between'>
            <div className='flex justify-between items-center gap-1'>
                <StarIcon className='text-amber-400 w-5 h-5 text-sm'/><span>{anime.score}</span>
            </div>
                <span className=' bg-light-orange pr-2 pl-2 rounded-md text-xs flex items-center justify-center text-black'>{anime.type}</span>
        </div>
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
            <span className='text-gray-400 text-sm'>Genres : </span><span className='text-sm'>{anime.genres.map(genre=><span>{`${genre.name},`}</span>)}</span>
        </div>
         <div className='flex justify-center gap-1.5 items-center mt-3'>
            <button className='bg-light-orange  text-black rounded-3xl p-2 w-full cursor-pointer'>Watch Now</button>
            <button className='bg-white rounded-full w-8 h-8 p-2 flex justify-center items-center cursor-pointer'><PlusIcon  className='text-black text-sm w-5 h-5'/></button>
        </div>
        </div>
       
        </div>
    )
}