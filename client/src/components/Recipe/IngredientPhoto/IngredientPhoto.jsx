import React from 'react';
import css from './IngredientPhoto.module.css';
import defaultImage from '../../../images/backgrounds/error-image-desktop.png';

const IngredientPhoto = ({ image }) => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={image ? image : defaultImage}
        alt="ingridient"
      />
    </div>
  );
};

export default IngredientPhoto;