import { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'Services/getImages';
import css from '../styles.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button/Button';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchText, page, setData } = this.props;

    if (prevProps.searchText !== searchText || prevProps.page !== page) {
      this.setState({ isLoading: true });
      api
        .getImages(this.props.searchText, page)
        .then(data => setData(data.hits))
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { isLoading, error } = this.state;
    const { searchText, getModalImage, handleLoadMore, data } = this.props;

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
  }
}

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
