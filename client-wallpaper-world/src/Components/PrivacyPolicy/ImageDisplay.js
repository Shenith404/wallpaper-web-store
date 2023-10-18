import React, { useState, useEffect } from 'react';

function ImageDisplay(imageData) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {


    // Create a Blob from the image data
    const blob = new Blob([new Uint8Array(imageData)], { type: 'image/jpeg' });

    // Create a URL from the Blob
    const imageUrl = URL.createObjectURL(blob);

    // Set the URL as the image source
    setImageSrc(imageUrl);

    // Clean up by revoking the URL when the component unmounts
    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, []);

  return (
    <div>
      <img src={imageSrc} alt="Image" />
    </div>
  );
}

export default ImageDisplay;
