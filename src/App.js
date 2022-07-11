import React, { useEffect, useState } from "react";
import server from './mock-server'
import { Container, GenreContainer, Input, SongGroupContainer, Button } from "./components/home-page";
import SongGroup from "./components/home-page/SongGroup";

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [songGroups, setSongGroups] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    fetchGenres();
    if (searchQuery.length > 0) {
      fetchSongGroups('', searchQuery);
    } else {
      fetchSongGroups('', searchQuery)
    }
    setIsFetching(false);
  }, [searchQuery]);

  const fetchGenres = async () => {
    try {
      const response = await server.query(`
      query Query {
        genres
      }
    `)
      setGenres(['All', ...response.data.genres]);
    } catch (error) {
      setError(error);
    }
  }

  const fetchSongGroups = async (filter = '', query = '') => {
    filter = filter === 'All' ? '' : filter;
    try {
      const response = await server.query(`
      query Query($filter: String, $query: String) {
        songGroups(genre: $filter, search: $query) {
          year
          songs {
              title
              artist
              album
              year
              duration
              genre
              cover
          }
        }
      }
  `, {
        filter,
        query
      })
      setSongGroups(response.data.songGroups);
    } catch (error) {
      setError(error);
    }
  }

  const handleChooseGenre = (genre) => {
    setSelectedGenre(genre);
    fetchSongGroups(genre)
  }

  if (isFetching) return <Container style={{ alignItems: 'center', justifyContent: 'center' }}><h1>Loading...</h1></Container>

  if (error) return <Container style={{ alignItems: 'center', justifyContent: 'center' }}><h1>Error: {error.message}</h1></Container>

  return (
    <Container>
      <Input type={"search"} placeholder={'Search Song'} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <GenreContainer>
        {genres.map(genre => (
          <Button style={{ color: selectedGenre === genre ? 'green' : 'white' }} key={genre} onClick={() => handleChooseGenre(genre)} >{genre}</Button>
        ))}
      </GenreContainer>
      <SongGroupContainer>
        {songGroups.map(songGroup => <SongGroup key={songGroup.year} songGroup={songGroup} />)}
      </SongGroupContainer>

    </Container>
  );
}

export default App;