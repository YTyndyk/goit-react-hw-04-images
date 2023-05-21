import { useState } from 'react';
import Proptypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css';

const Searchbar = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleChange = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      return alert('Please enter a valid name!');
    }

    onSearch(name);
    setName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button
          type="submit"
          className={css['SearchForm-button']}
          onClick={handleSubmit}
        >
          <span className={css['SearchForm-button-label']}>
            <AiOutlineSearch fill="black" size="20px" />
          </span>
        </button>

        <input
          className={css['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={name}
        />
      </form>
    </header>
  );
};

export default Searchbar;
Searchbar.propTypes = {
  onSearch: Proptypes.func.isRequired,
};
