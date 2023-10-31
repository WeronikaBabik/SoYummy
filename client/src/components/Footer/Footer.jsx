import s from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <div className={s.footer}>
                <div className={s.logoPart}>
                    <img src="https://res.cloudinary.com/goit-academy/image/upload/v1614773221/codepen/cat_segyum.svg" alt="A cat" width="32" />
                    <span>So Yummy</span>
                </div>
                <ul className={s.listLinks}>
                    <li className={s.footerLink}>Ingredients</li>
                    <li className={s.footerLink}>Add recipes</li>
                    <li className={s.footerLink}>My recipes</li>
                    <li className={s.footerLink}>Favorite</li>
                    <li className={s.footerLink}>Shopping list</li>
                </ul>
                <form className={s.footerForm}>
                    <label>
                        <input type="email" name="email" placeholder="Enter your email address" />
                    </label>
                    <button type="submit">Subscribe</button>
                </form>
                <ul class="media">
                    <li>
                        <a>
                            <img src="https://res.cloudinary.com/goit-academy/image/upload/v1614773221/codepen/cat_segyum.svg" alt="A cat" width="18" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="https://res.cloudinary.com/goit-academy/image/upload/v1614773221/codepen/cat_segyum.svg" alt="A cat" width="18" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="https://res.cloudinary.com/goit-academy/image/upload/v1614773221/codepen/cat_segyum.svg" alt="A cat" width="18" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="https://res.cloudinary.com/goit-academy/image/upload/v1614773221/codepen/cat_segyum.svg" alt="A cat" width="18" />
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