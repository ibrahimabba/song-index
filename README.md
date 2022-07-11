# Song Index

This simple Reactjs project aim to showcase important front-end skills such as data fetching, error handling and data filtering
skills with Graphql mock server and mock data.

The app provides an archive of songs, and allows the user to search and filter songs.

## Built With

The project is built with Reactjs,  Graphql and graphql tools

## Decisions

I choose Graphql because it gives a predictable response from fetched data since you only get what you ask for, On the other hand
graphql tools provides tools to mock a graphql server with schema and resolvers so you don't have to setup an actual server.

## Suggestions for Imporvement

Caching mechanism could be put in place to prevent refetching unchanged data, especially when the data grows in the future.



## Installation

Clone my repo
```bash
git clone https://github.com/iamvucms/react-native-facebook-clone.git
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
