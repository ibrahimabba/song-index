import styled from '@emotion/styled'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100vh',
})

export const Input = styled.input({
    width: '80%',
    height: '50%',
    border: 'none',
    margin: '50px 0',
    padding: '10px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#d4d0cf',
    borderRadius: '15px',
})

export const GenreContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    height: '8%',
    margin: '50px 0',
})


export const Button = styled.button({
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '10%',
    height: '200%',
    marginRight: '3px',
    marginLeft: '3px',

})



export const SongGroupContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    height: '300%'
})

export const SongGroup = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '5px 0',
    padding: '10px',
    paddingBottom: '50px',
})

export const SongGroupTitle = styled.h1({
    width: '7%',
    height: '8%',
    padding: '10px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#30414f',
    borderRadius: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
})



export const Song = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: '10px 0',
    padding: '20px',
})

export const SongTitle = styled.h1({
    fontSize: '1rem',
    color: 'white',
})

export const SongArtist = styled.h1({
    fontSize: '0.8rem',
    color: 'white',
})

export const SongAlbum = styled.h1({
    fontSize: '0.8rem',
    color: 'white',
})


export const SongDuration = styled.h1({
    fontSize: '0.6rem',
    color: 'white',
})

export const SongGenre = styled.h1({
    fontSize: '0.8rem',
    color: 'white',
})

export const Hstack = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const CoverContainer = styled.div({
    display: 'flex',
    width: '13%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
})
export const SongInfo = styled.div({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 10px 16px 15px',
    width: '80%',
    height: '80%',
    backgroundColor: '#30414f',
    borderRadius: '15px',
})

export const Cover = styled.img({
    width: '100px',
    height: '100px',
    borderRadius: '50px',
})