import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './styles.module.css';
import Modal from './Modal/Modal';
export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [perpage, setPerpage] = useState(12);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const handleSearch = searchText => {
    setSearchText(searchText);
    setPage(1);
    setData([]);
  };

  const getModalImage = e => {
    setImage(e.target.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const setDatas = ({ data }) => {
    setData(prevdData => [...prevdData, ...data]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
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
        data={data}
        setData={setDatas}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};
