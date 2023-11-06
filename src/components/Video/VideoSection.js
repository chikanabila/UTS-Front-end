import React, { useState } from 'react';

function VideoSection() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const toggleVideo = () => {
    const videoElement = document.getElementById('video-file');

    if (videoElement.paused) {
      videoElement.play();
      setVideoPlaying(true);
    } else {
      videoElement.pause();
      setVideoPlaying(false);
    }
  };

  return (
    <section className="video section" id="video">
      <h2 className="section__title">Video Tour</h2>

      <div className="video__container container">
        <p className="video__description">Find out more with our video of the most beautiful and pleasant places for you and your family.</p>

        <div className="video__content">
          <video id="video-file">
            <source src="./video.mp4" type="video/mp4" />
          </video>

          <button className={`button button--flex video__button ${isVideoPlaying ? 'playing' : ''}`} onClick={toggleVideo}>
            <i className={`ri-${isVideoPlaying ? 'pause' : 'play'}-line video__button-icon`} id="video-icon"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
