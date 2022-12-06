


function VideoPlayer(props) {
    let {url, start, end} = props;
        return ( 
            <div>
            <div>url: {url}</div>
            <div>start: {start}</div>
            <div>end: {end}</div>
            </div>
     );
}

export default VideoPlayer;