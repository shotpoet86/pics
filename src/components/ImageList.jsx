import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard.jsx';
/*ImageList maps through 'props.images and return each 'image'*/
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  console.log(props.images);
  return <div className="image-list">{images}</div>;
};

export default ImageList;
