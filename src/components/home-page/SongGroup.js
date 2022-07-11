import { Cover, CoverContainer, Hstack, Song, SongAlbum, SongArtist, SongDuration, SongGenre, SongGroupTitle, SongInfo, SongTitle, SongGroup as Group } from "./index";

export default function SongGroup({ songGroup }) {
    console.log(songGroup);
    return (
        <Group>
            {songGroup.songs.length > 0 && <SongGroupTitle>{songGroup.year}</SongGroupTitle>}
            {songGroup.songs.length > 0 && songGroup.songs.map(song => (
                <Song key={song.title}>
                    <Hstack>
                        <CoverContainer>
                            <Cover src={song.cover} />
                        </CoverContainer>
                        <SongInfo>
                            <SongTitle>{song.title}</SongTitle>
                            <SongArtist>Artist: {song.artist}</SongArtist>
                            <SongAlbum>Album: {song.album}</SongAlbum>
                            <SongDuration>length: {song.duration + ' mins'}</SongDuration>
                            <SongGenre>Genre: {song.genre}</SongGenre>
                        </SongInfo>
                    </Hstack>

                </Song>
            ))}
        </Group>
    )
}
