import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import * as loadingCopy from './loadingCopy';
import Preloader from './Preloader';
import localAssetPath from '../image-loader';

const bgColors = {
  skiff: ['bg-gray-200', 'bg-[#4F4C59]'],
  azuki: ['bg-[#EBEBE6]', 'bg-gray-800'],
  metalink: 'bg-gray-700',
  experiments: 'bg-white/[.15]',
};

export default function ProjectMedia(props) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState('');
  const [background, setBackground] = useState();
  const [path, setPath] = useState();
  const vidRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleVideoMetadataLoaded = () => {
    if (vidRef.current) {
      setVideoDimensions({
        width: vidRef.current.videoWidth,
        height: vidRef.current.videoHeight,
      });
    }
  };

  //preloader
  const handleContentLoad = (e) => {
    setIsContentLoaded(true);
  };

  useEffect(() => {
    setPath(window.location.pathname.replace('/', ''));
    setLoadingPhrase(loadingCopy.combineCopy());
  }, []);

  // useEffect(() => {
  //   // determineBackground();
  //   if (Array.isArray(bgColors[path])) {
  //     props.dark
  //       ? setBackground(bgColors[path][1])
  //       : setBackground(bgColors[path][0]);
  //   } else {
  //     setBackground(bgColors[path]);
  //   }
  // }, [path]);

  return (
    <div className={`${props.className} relative w-full overflow-hidden`}>
      <article
        className={`object-cover w-full h-full transition duration-500 overflow-hidden ease-out ${
          isContentLoaded ? 'opacity-1' : 'opacity-0'
        }`}
      >
        {props.isVideo ? (
          <video
            ref={vidRef}
            className={`object-cover overflow-hidden w-full h-full transition duration-1000 ease-out`}
            playsInline
            loop
            autoPlay
            muted
            src={localAssetPath({ src: props.src })}
            onCanPlay={handleContentLoad}
            onLoadedMetadata={handleVideoMetadataLoaded}
          />
        ) : (
          <Image
            alt="project hero"
            className="overflow-hidden"
            {...(props.responsive
              ? { width: props.src?.width || 1280, height: props.src?.height || 720 }
              : { fill: true })}
            style={props.responsive ? { width: '100%', height: 'auto', objectFit: 'cover' } : { objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            src={props.src}
            priority
            onLoadingComplete={handleContentLoad}
          />
        )}
      </article>
      <Preloader
        loadingPhrase={loadingPhrase}
        isContentLoaded={isContentLoaded}
      />
    </div>
  );
}
