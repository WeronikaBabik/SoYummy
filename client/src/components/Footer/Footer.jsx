import { Link } from "react-router-dom";
import s from './Footer.module.css';
import IconLogoFooter from "../Icons/IconLogoFooter/IconLogoFooter";
import IconFacebook from "../Icons/IconFacebook/IconFacebook";
import IconYouTube from "../Icons/IconYouTube/IconYouTube";
import IconTwitter from "../Icons/IconTwitter/IconTwitter";
import IconInstagram from "../Icons/IconInstagram/IconInstagram";
// import IconEmail from "../Icons/IconEmail/IconEmail";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.firstPart}>
                <div className={s.wrapperOutside}>
                    <div className={s.wrapper}>
                        <div>
                            <div className={s.logoPart}>
                                <Link to="/">
                                    <IconLogoFooter />
                                </Link>
                                <h2>So Yummy</h2>
                            </div>
                            <ul className={s.description}>
                                <li className={s.descriptionEl}>Database of recipes that can be replenished </li>
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
                        <label className={s.footerFormLabel}>
                            <div className={s.inputWithIcon}>
                                <input type="email" name="email" placeholder="Enter your email address" className={s.footerFormInput} />
                                {/* <span className={s.iconBefore}>
                                    <svg
                                        width="22"
                                        height="18"
                                        viewBox="0 0 22 18"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#22252A"
                                    >
                                        <path
                                            d="M3 1H19C19.5299 1.00158 20.0377 1.2128 20.4125 1.58753C20.7872 1.96227 20.9984 2.47005 21 3V15C20.9984 15.5299 20.7872 16.0377 20.4125 16.4125C20.0377 16.7872 19.5299 16.9984 19 17H3C2.47005 16.9984 1.96227 16.7872 1.58753 16.4125C1.2128 16.0377 1.00158 15.5299 1 15V3C1.00158 2.47005 1.2128 1.96227 1.58753 1.58753C1.96227 1.2128 2.47005 1.00158 3 1V1Z"
                                            stroke="#FAFAFA"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 3L11 10L1 3"
                                            stroke="#FAFAFA"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span> */}
                            </div>
                        </label>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <ul className={s.media}>
                    <li>
                        <a href="https://www.facebook.com/">
                            <IconFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">
                            <IconYouTube />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">
                            <IconTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <IconInstagram />
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