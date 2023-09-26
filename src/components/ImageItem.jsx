const ImageItem = ({ id, urls, alt_description, endResult }) => {
  return (
    <div className="image-container" key={id}>
      <img
        src={urls.regular}
        alt={alt_description}
        onClick={() => {
          window.open(urls.raw, '_blank');
        }}
        key={id}
      />
    </div>
  );
};

export default ImageItem;
