import songs, { genres } from './songDb'
import { searchItems } from '../utils'

const resolvers = {
    Query: {
        genres: () => genres,
        songGroups: (_, args) => {
            const { genre, search } = args;
            // get distinct years from songs and sort them in ascending order
            const years = [...new Set(songs.map(song => song.year))].sort((a, b) => b - a)

            const songGroups = []

            let songsThroughtFilter = songs



            if (genre !== '') {
                songsThroughtFilter = songs.filter(song => song.genre === genre)
                console.log(songsThroughtFilter)
            }
            if (search !== '') {
                // search across multiple fields
                songsThroughtFilter = searchItems(songs, search, ['title', 'artist', 'album'])
            }
            // for each year, create a songGroup
            years.forEach(year => {
                const songsForYear = songsThroughtFilter.filter(song => {

                    return song.year === year

                })
                songGroups.push({
                    year,
                    songs: songsForYear
                })
            })
            return songGroups
        }
    }
}

export default resolvers