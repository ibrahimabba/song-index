import React, { useEffect, useState } from "react";
import server from './mock-server'
import { Container, Cover, CoverContainer, GenreContainer, Hstack, Input, Song, SongAlbum, SongArtist, SongDuration, SongGenre, SongGroup, SongGroupContainer, SongGroupTitle, SongInfo, SongTitle, Button } from "./components/home-page";

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [songGroups, setSongGroups] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    fetchGenres();
    if (searchQuery.length > 4) {
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


  return (
    <Container>
      <Input type={"search"} placeholder={'Search Song'} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <GenreContainer>
        {genres.map(genre => (
          <Button style={{ color: selectedGenre === genre ? 'green' : 'white' }} key={genre} onClick={() => handleChooseGenre(genre)} >{genre}</Button>
        ))}
      </GenreContainer>
      <SongGroupContainer>
        {songGroups.map(songGroup => {
          return (
            <SongGroup key={songGroup.year}>
              {songGroup.songs.length > 0 && <SongGroupTitle>{songGroup.year}</SongGroupTitle>}
              {songGroup.songs.length > 0 && songGroup.songs.map(song => (
                <Song key={song.title}>
                  <Hstack>
                    <CoverContainer>
                      <Cover src={song.cover} />
                    </CoverContainer>
                    <SongInfo>
                      <SongTitle>{song.title}</SongTitle>
                      <SongArtist>{song.artist}</SongArtist>
                      <SongAlbum>{song.album}</SongAlbum>
                      <SongDuration>{song.duration + ' ' + 'mins'}</SongDuration>
                      <SongGenre>{song.genre}</SongGenre>
                    </SongInfo>
                  </Hstack>

                </Song>
              ))}
            </SongGroup>
          )
        })}
      </SongGroupContainer>

    </Container>
  );
}

export default App;