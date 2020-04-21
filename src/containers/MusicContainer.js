import React, { Component } from 'react';

class MusicContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            top20Songs: []
         }
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

        fetch(url)
            .then(res => res.json())
            .then(top20Songs => this.setState({
                top20Songs: top20Songs
            }))
    }

    render() { 
        return ( 
            // Header component
            // pass down title
            <h2>This is where the magic will happen!</h2>
            // MusicTop20 component
            // pass down top20Songs array
         );
    }
}
 
export default MusicContainer;