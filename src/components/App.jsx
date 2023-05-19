import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './styles.module.css';
import Modal from './Modal/Modal';
export class App extends Component {
  state = {
    searchText: '',
    image: '',
    showModal: false,
    perpage: 12,
    page: 1,
    data: [],
  };

  handleSearch = searchText => {
    this.setState({ searchText, page: 1, data: [] });
  };

  getModalImage = e => {
    return this.setState({ image: e.target.id, showModal: true });
  };

  closeModal = () => {
    return this.setState({ showModal: false });
  };
  setData = data => {
    this.setState({ data: [...this.state.data, ...data] });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { perpage, searchText, showModal, image, data, page } = this.state;
    return (
      <div className={css.App}>
        {showModal && <Modal image={image} closeModal={this.closeModal} />}
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery
          page={page}
          searchText={searchText}
          perpage={perpage}
          getModalImage={this.getModalImage}
          data={data}
          setData={this.setData}
          handleLoadMore={this.handleLoadMore}
        />
      </div>
    );
  }
}
