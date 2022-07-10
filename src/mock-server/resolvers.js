import songs, { genres } from './songDb'

const resolvers = {
    Query: {
        genres: () => genres,
        songGroups: () => {

            // get distinct years from songs
            const years = [...new Set(songs.map(song => song.year))]

            const songGroups = []

            // for each year, create a songGroup
            years.forEach(year => {
                const songsForYear = songs.filter(song => song.year === year)
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