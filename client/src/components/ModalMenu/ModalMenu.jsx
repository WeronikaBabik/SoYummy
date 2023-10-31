import { Link } from "react-router-dom";
import React, { useState } from 'react';
import s from './ModalMenu.module.css';

const ModalMenu = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
    
    return (
        <div className={s.container}>
            {isModalOpen && (
                <div className={s.modal}>
                    <div className={s.modalButtons}>
                        <svg className={s.logo} width="40" height="40">
                            <use href="./images/icons/icons.svg#icon-logo"></use>
                        </svg>
                        <button autofocus onClick={closeModal}>
                            <svg className={s.close} width="32" height="32">
                                <use href="./images/icons/icons.svg#icon-close"></use>
                            </svg>
                        </button>
                    </div>
                    <div className={s.modalLinks}>
                        <Link className={s.link} to="/categories/:categoryName">Categories</Link>
                        <Link className={s.link} to="/add">Add recipes</Link>
                        <Link className={s.link} to="/my">My recipes</Link>
                        <Link className={s.link} to="/favorite">Favorites</Link>
                        <Link className={s.link} to="/shopping-list">Shopping list</Link>
                        <Link className={s.link} to="/search">Search</Link>
                    </div>
                </div>
            )}
            {isModalOpen ? undefined : (
                <button className={s.menu} onClick={openModal}>
                    <svg className={s.hamburger} width="28" height="28">
                        <use href="./images/icons/icons.svg#icon-mobile-menu"></use>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ModalMenu