import React from 'react';

const MusicTop20 = (props) => {

    const newProps = props;

    // const options = props.top20Songs.map(song => {
    //     return <option value={song["im:name"].label} key={song["im:name"].label}>{song["im:name"].label}</option>
    // })
    // const top20 = props;

    // const options = top20.map(song => (
    //     <option value={song} key={song.id}>{song["im:name"].label}</option>
    // ))

    return ( 
        <select id="song-selector" defaultValue="default">
            <option disabled value="default">Choose a song...</option>
            {/* { options } */}
        </select>
    )
}
 
export default MusicTop20;