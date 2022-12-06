function VideoPlayer(props) {
//   let { url, start, end } = props;
  return (
    
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4NRXx6U8ABQ?controls=0&amp;start=145"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
  
  );
}

export default VideoPlayer;
