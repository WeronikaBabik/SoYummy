import { Link } from "react-router-dom";
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.firstPart}>
                <div className={s.wrapperOutside}>
                    <div className={s.wrapper}>
                        <div>
                            <div className={s.logoPart}>
                                <Link className={s.logo} to="/">
                                    <svg width="32" height="32">
                                        <use href="./images/icons/icons.svg#icon-logo"></use>
                                    </svg>
                                </Link>
                                <h2>So Yummy</h2>
                            </div>
                            <ul className={s.description}>
                                <li>Database of recipes that can be replenished </li>
                                <li>Flexible search for desired and unwanted ingredients</li>
                                <li>Ability to add your own recipes with photos</li>
                                <li>Convenient and easy to use</li>
                            </ul>
                        </div>
                        <ul className={s.listLinks}>
                            <li>
                                <Link className={s.footerLink} to="/search">
                                    Ingredients
                                </Link>
                            </li>
                            <li>
                                <Link className={s.footerLink} to="/add">
                                    Add recipes
                                </Link>
                            </li>
                            <li>
                                <Link className={s.footerLink} to="/my">
                                    My recipes
                                </Link>
                            </li>
                            <li>
                                <Link className={s.footerLink} to="/favorite">
                                    Favorite
                                </Link>
                            </li>
                            <li>
                                <Link className={s.footerLink} to="/shopping-list">
                                    Shopping list
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <form className={s.footerForm}>
                        <div className={s.descriptionForm}>
                            <h3>Subscribe to our Newsletter</h3>
                            <span>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</span>
                        </div>
                        <label>
                            <input type="email" name="email" placeholder="Enter your email address" />
                        </label>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <ul className={s.media}>
                    <li>
                        <a href="https://www.facebook.com/">
                            <svg width="20" height="20">
                                <use href="./images/icons/icons.svg#icon-facebook"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">
                            <svg width="20" height="20">
                                <use href="./images/icons/icons.svg#icon-youtube"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">
                            <svg width="20" height="20">
                                <use href="./images/icons/icons.svg#icon-twitter"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <svg width="20" height="20">
                                <use href="./images/icons/icons.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={s.lastPart}>
                <span>© 2023 All Rights Reserved.</span>
                <span>Terms of Service</span>
            </div>
        </div>
    );
};

export default Footer;