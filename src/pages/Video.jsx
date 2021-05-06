import React, { Component } from "react";
import ReactPlayer from 'react-player';


export class Video extends Component {
    render() {
        return (
            <ReactPlayer
                url='http://crossmediaplus.com/s3/bcsvideos/Farmacia.MP4'
                width='100%'
                height='100%'
                playing
                loop
            />);
    }
}
export default Video;