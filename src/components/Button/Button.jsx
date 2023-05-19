import React from 'react';
import css from '../styles.module.css';
import Proptypes from 'prop-types';

const Button = props => {
  const { onClick } = props;
  return (
    <button type="button" onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
};

export default Button;
Button.propTypes = {
  onClick: Proptypes.func,
};
