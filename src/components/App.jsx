import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './App.module.css';
import Modal from './Modal/Modal';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [perpage] = useState(12);
  const [page, setPage] = useState(1);

  const handleSearch = searchText => {
    setSearchText(searchText);
    setPage(1);
  };

  const getModalImage = e => {
    setImage(e.target.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLoadMore = () => {
    setPage(s => s + 1);
  };

  return (
    <div className={css.App}>
      {showModal && <Modal image={image} closeModal={closeModal} />}
      <Searchbar onSearch={handleSearch} />
      <ImageGallery
        page={page}
        searchText={searchText}
        perpage={perpage}
        getModalImage={getModalImage}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};
