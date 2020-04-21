import React, { Component } from 'react';

class MusicHeader extends Component {

    render() { 
        return ( 
        <h2>{this.props.title}</h2>
         );
    }
}
 
export default MusicHeader;