# Song Index

This simple Reactjs project aim to showcase important front-end skills such as data fetching, error handling and data filtering
skills with Graphql mock server and mock data.

The app provides an archive of songs, and allows the user to search and filter songs, search could be done across multiple
fields of data such as title, artist and album.

 [You can view the live app here](https://wondrous-souffle-6ae51c.netlify.app/).
 
## Built With

The project is built with Reactjs, emotionjs, Graphql and graphql tools

## Decisions

I choose Graphql because it gives a predictable response from fetched data since you only get what you ask for, On the other hand
graphql tools provides tools to mock a graphql server with schema and resolvers so you don't have to setup an actual server.

## Suggestions for Imporvement

Caching mechanism could be put in place to prevent refetching unchanged data, especially when the data grows in the future.

Unit tests could be created for data fetching and the components such as buttons and the search component



## Installation

Clone my repo
```bash
git clone https://github.com/ibrahimabba/song-index.git
cd song-index
```
Use the package manager yarn

```bash
yarn install
```

## Usage
```bash
npm start
```
