import React, { useEffect, useState } from "react";
import server from './mock-server'
import logo from './logo.svg';
import './App.css';

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [songGroups, setSongGroups] = useState([]);

  useEffect(() => {
    fetchGenres();
    fetchSongGroups();
    setIsFetching(false);
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await server.query(`
      query Query {
        genres
      }
    `)
      setGenres(response.data.genres);
    } catch (error) {
      setError(error);
    }
  }

  const fetchSongGroups = async () => {
    try {
      const response = await server.query(`
      query Query {
        songGroups {
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
  `)
      setSongGroups(response.data.songGroups);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
