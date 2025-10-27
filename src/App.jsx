import './App.css'
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react';

const GET_ANIME = gql`
  query {
    Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  }
`

export default function App() {
  const { data, loading, error } = useQuery(GET_ANIME)

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>
  if (error) return <p className="text-red-500 text-center">خطا: {error.message}</p>

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {data.Page.media.map(anime => (
        <div key={anime.id} className="bg-white rounded-2xl shadow p-2">
          <img
            src={anime.coverImage.large}
            alt={anime.title.romaji}
            className="rounded-xl w-full"
          />
          <h3 className="text-center mt-2 font-semibold">
            {anime.title.english || anime.title.romaji}
          </h3>
        </div>
      ))}
    </div>
  )
}