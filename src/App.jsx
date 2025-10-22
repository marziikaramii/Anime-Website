import { useEffect, useState } from 'react'
import './App.css'
import AnimeList from './components/AnimeList'
import HeroCarousel from './components/HeroCarousel'
import { useQuery, gql } from "@apollo/client";
const animeSlider = gql `{
  Page(perPage: 10) {
    media(type: ANIME, sort: POPULARITY_DESC) {
      id
      title {
        english
        romaji
      }
      coverImage {
        extraLarge
        large
        color
      }
      bannerImage
      description
      averageScore
      episodes
      seasonYear
    }
  }
}
`;
function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <ul>
        {data.animeSLider.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
