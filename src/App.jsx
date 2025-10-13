import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimeList from './components/AnimeList'

function App() {

  const [animeList,setAnimeList] = useState([])
  useEffect(()=>{
    /*https://api.jikan.moe/v4/anime?status=airing&limit=10&sort=desc*/
    fetch("https://api.jikan.moe/v4/seasons/now?status=airing&limit=10&sort=desc")
    .then(res=>res.json())
    .then(data=>{setAnimeList(data.data);})
  },[]) 
  return (
    <>
      <div className='max-w-7xl mx-auto'>
      <AnimeList animeList={animeList} />
      </div>
    </>
  )
}

export default App
