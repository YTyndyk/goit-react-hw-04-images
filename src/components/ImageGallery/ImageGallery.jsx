import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from 'Services/getImages';
import css from '../styles.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button/Button';
import Loader from 'components/Loader/Loader';

const ImageGallery = ({
  searchText,
  getModalImage,
  handleLoadMore,
  data,
  setDatas,
  page,
}) => {
  const [isLoading, setIsLoadind] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchText === '') {
      return;
    }
    setIsLoadind(true);
    api
      .getImages(searchText, page)
      .then(data => setDatas(data.hits))
      .catch(error => setError(error))
      .finally(() => {
        setIsLoadind(false);
      });
  }, [searchText, page, setDatas]);

  return (
    <>
      {isLoading && <Loader />}
      {!searchText && (
        <div className={css.text}>Let`s find images together!</div>
      )}
      {error && <h1>{error}</h1>}
      <ul className={css.ImageGallery} onClick={getModalImage}>
        <ImageGalleryItem data={data} />
      </ul>
      {data.length > 1 && <Button onClick={handleLoadMore}>Load More</Button>}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  getModalImage: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  perpage: PropTypes.number.isRequired,
  searchText: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};
