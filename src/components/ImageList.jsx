import { useState } from 'react';
import ImageItem from './ImageItem';
useState;
const ImageList = ({ endResult }) => {
  return endResult.map((item) => {
    return (
      <div>
        <ImageItem id={item.id} urls={item.urls} endResult={endResult} />
      </div>
    );
  });
};

export default ImageList;
