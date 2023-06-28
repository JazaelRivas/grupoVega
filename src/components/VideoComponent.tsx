import React, { useRef, useEffect } from 'react';
import "../styles/global.scss"

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust the playback rate as desired
    }
  }, []);

  return (
    <div className='videoContainer'>
      <video ref={videoRef} src="/static/video/video4k.mp4" className='videoSource' loop muted autoPlay>
        Your browser does not support the video tag.
      </video>
      <h2 className='videoTitle'>
        Potencia tu camino con llantas de calidad y servicio excepcional, <br/>siempre listos para llevarte más lejos.
        </h2>
    </div>
  );
};

export default VideoComponent;
