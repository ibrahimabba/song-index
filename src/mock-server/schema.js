const schema = `

    type SongGroup {
        year: Int
        songs: [Song!]!
    }

    type Song {
        title: String
        artist: String
        album: String
        year: Int
        duration: String
        genre: String
        cover: String
    }

    type Query {
        genres: [String!]
        songGroups(genre: String, search: String): [SongGroup!]
    }
`;

export default schema