import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from 'Services/getImages';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
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

  useEffect(() => {
    if (searchText === '') {
      return;
    }
    setIsLoadind(true);
    api
      .getImages(searchText, page)
      .then(data => setDatas(data.hits))
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoadind(false);
      });
  }, [searchText, page]);

  return (
    <>
      {isLoading && <Loader />}
      {!searchText && (
        <div className={css.text}>Let`s find images together!</div>
      )}

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
  setDatas: PropTypes.func.isRequired,
};
