const songs = [
    {
        "title": "Kiss",
        "artist": "Colin",
        "album": "mechanism",
        "year": 2021,
        "duration": "2",
        "genre": "Pop",
        "cover": "https://loremflickr.com/640/512/car"
    },
    {
        "title": "Pistol Packin' Mama",
        "artist": "Emelia",
        "album": "consideration",
        "year": 2021,
        "duration": "7",
        "genre": "Classical",
        "cover": "https://loremflickr.com/640/512/nature"
    },
    {
        "title": "More Than Words",
        "artist": "Rachelle",
        "album": "tumbler",
        "year": 2021,
        "duration": "1",
        "genre": "Country",
        "cover": "https://loremflickr.com/640/512/fashion"
    },
    {
        "title": "The Wanderer",
        "artist": "Petra",
        "album": "work",
        "year": 2022,
        "duration": "4",
        "genre": "Blues",
        "cover": "https://loremflickr.com/640/511/car"
    },
    {
        "title": "Addicted to Love",
        "artist": "Irving",
        "album": "baboon",
        "year": 2019,
        "duration": "7",
        "genre": "Funk",
        "cover": "https://loremflickr.com/640/511/nature"
    },
    {
        "title": "Total Eclipse of the Heart",
        "artist": "Ardith",
        "album": "sister",
        "year": 2022,
        "duration": "1",
        "genre": "Latin",
        "cover": "https://loremflickr.com/640/500/fashion"
    },
    {
        "title": "Stayin' Alive",
        "artist": "Baylee",
        "album": "chronometer",
        "year": 2022,
        "duration": "9",
        "genre": "Folk",
        "cover": "https://loremflickr.com/640/500/car"
    },
    {
        "title": "Big Bad John",
        "artist": "Gilda",
        "album": "need",
        "year": 2019,
        "duration": "8",
        "genre": "Folk",
        "cover": "https://loremflickr.com/640/580/nature"
    },
    {
        "title": "Cat's in the Cradle",
        "artist": "Tyra",
        "album": "construction",
        "year": 2022,
        "duration": "7",
        "genre": "Blues",
        "cover": "https://loremflickr.com/640/580/car"
    },
    {
        "title": "Sunshine Superman",
        "artist": "Trystan",
        "album": "lover",
        "year": 2017,
        "duration": "4",
        "genre": "Blues",
        "cover": "https://loremflickr.com/640/580/fashion"
    },
    {
        "title": "The Way You Move",
        "artist": "Tomasa",
        "album": "safety",
        "year": 2019,
        "duration": "6",
        "genre": "Latin",
        "cover": "https://loremflickr.com/640/410/car"
    },
    {
        "title": "My Love",
        "artist": "Grover",
        "album": "trash",
        "year": 2017,
        "duration": "7",
        "genre": "Country",
        "cover": "https://loremflickr.com/640/410/nature"
    },
    {
        "title": "The Thing",
        "artist": "Gaetano",
        "album": "banquette",
        "year": 2021,
        "duration": "2",
        "genre": "Latin",
        "cover": "https://loremflickr.com/640/496/fashion"
    },
    {
        "title": "Lean On Me",
        "artist": "Oswald",
        "album": "vegetation",
        "year": 2017,
        "duration": "8",
        "genre": "Rap",
        "cover": "https://loremflickr.com/640/495/car"
    },
    {
        "title": "Help Me",
        "artist": "Lexie",
        "album": "mail",
        "year": 2017,
        "duration": "8",
        "genre": "Folk",
        "cover": "https://loremflickr.com/640/495/fashion"
    },
    {
        "title": "The Hustle",
        "artist": "Chester",
        "album": "shorts",
        "year": 2022,
        "duration": "4",
        "genre": "Metal",
        "cover": "https://loremflickr.com/640/480/car"
    },
    {
        "title": "Pop Muzik",
        "artist": "Orion",
        "album": "killing",
        "year": 2017,
        "duration": "1",
        "genre": "Rap",
        "cover": "https://loremflickr.com/640/504/fashion"
    },
    {
        "title": "Groovin'",
        "artist": "Johnathon",
        "album": "feng",
        "year": 2019,
        "duration": "2",
        "genre": "Rap",
        "cover": "https://loremflickr.com/640/503/nature"
    },
    {
        "title": "Bye Bye",
        "artist": "Hobart",
        "album": "gas",
        "year": 2022,
        "duration": "1",
        "genre": "Classical",
        "cover": "https://loremflickr.com/640/502/fashion"
    },
    {
        "title": "Cherry Pink & Apple Blossom White",
        "artist": "Elisabeth",
        "album": "icon",
        "year": 2022,
        "duration": "4",
        "genre": "Jazz",
        "cover": "https://loremflickr.com/640/501/nature"
    },
    {
        "title": "Call Me",
        "artist": "Jadyn",
        "album": "prior",
        "year": 2022,
        "duration": "4",
        "genre": "Electronic",
        "cover": "https://loremflickr.com/640/500/fashion"
    },
    {
        "title": "Secret Love",
        "artist": "Jazmin",
        "album": "fiberglass",
        "year": 2021,
        "duration": "2",
        "genre": "Hip Hop",
        "cover": "https://loremflickr.com/640/488/fashion"
    },
    {
        "title": "Black Velvet",
        "artist": "Ward",
        "album": "course",
        "year": 2022,
        "duration": "3",
        "genre": "Country",
        "cover": "https://loremflickr.com/640/487/fashion"
    },
    {
        "title": "Hound Dog",
        "artist": "Cloyd",
        "album": "colonial",
        "year": 2019,
        "duration": "9",
        "genre": "Country",
        "cover": "https://loremflickr.com/640/486/fashion"
    },
    {
        "title": "Disco Lady",
        "artist": "Daija",
        "album": "footprint",
        "year": 2018,
        "duration": "8",
        "genre": "Rap",
        "cover": "https://loremflickr.com/640/485/fashion"
    },
    {
        "title": "Killing Me Softly With His Song",
        "artist": "Anabel",
        "album": "infarction",
        "year": 2019,
        "duration": "9",
        "genre": "Electronic",
        "cover": "https://loremflickr.com/640/482/fashion"
    },
    {
        "title": "Roll With It",
        "artist": "Rogers",
        "album": "perspective",
        "year": 2018,
        "duration": "7",
        "genre": "World",
        "cover": "https://loremflickr.com/640/481/fashion"
    },
    {
        "title": "All Night Long (All Night)",
        "artist": "Earnest",
        "album": "cation",
        "year": 2018,
        "duration": "4",
        "genre": "World",
        "cover": "https://loremflickr.com/640/480/fashion"
    },
    {
        "title": "You've Lost That Lovin' Feelin'",
        "artist": "Vivienne",
        "album": "instrumentation",
        "year": 2018,
        "duration": "2",
        "genre": "Pop",
        "cover": "https://loremflickr.com/640/480/fashion"
    },
    {
        "title": "Poker Face",
        "artist": "Justice",
        "album": "liability",
        "year": 2018,
        "duration": "2",
        "genre": "World",
        "cover": "https://loremflickr.com/640/480/fashion"
    }
]

export const genres = [
    "World",
    "Pop",
    "Jazz",
    "Metal",
    "Classical",
    "Hip Hop",
    "Rap",
    "Latin",
    "Folk",
    "Country",
    "Electronic",
    "Blues",
    "Funk",
]

export default songs;