import React from 'react';
/*ImageList maps through 'props.images'*/
const ImageList = (props) => {
  const images = props.images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.small} alt={description} />;
  });
  console.log(props.images);
  return <div>{images}</div>;
};

export default ImageList;
