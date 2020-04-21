import React, { Component } from 'react';
import MusicHeader from '../components/MusicHeader';
import MusicTop20 from '../components/MusicTop20';

class MusicContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            top20Songs: []
        }
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

        // top20Songs: payload.feed.entry[0]

        fetch(url)
            .then(res => res.json())
            .then(payload => this.setState({
                top20Songs: payload.map((song.feed.entry[0]) => {
                    const cleanPayload{

                    }
                });
            }))
    }

    render() { 

        return ( 
            <div>
                <MusicHeader title="iTunes UK Top 20"></MusicHeader>
                <MusicTop20 top20Songs={this.state.top20Songs}></MusicTop20>
            </div>
        );
    }
}
 
export default MusicContainer;