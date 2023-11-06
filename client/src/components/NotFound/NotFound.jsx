import notfoundtablet from "../../images/backgrounds/error-image-tablet.png";
import notfoundtablet2x from "../../images/backgrounds/error-image-tablet@2x.png";
import notfounddesktop from "../../images/backgrounds/error-image-desktop.png";
import notfounddesktop2x from "../../images/backgrounds/error-image-desktop@2x.png";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <picture>
        <source
          srcSet={`${notfoundtablet}, ${notfoundtablet2x} 2x`}
          media="(max-width:767px)"
          sizes="(min-width:250px) 250px, 100vw"
        />
        <source
          srcSet={`${notfounddesktop}, ${notfounddesktop2x} 2x`}
          media="(mi-width:768px)"
          sizes="(min-width:500px) 500px, 100vw"
        />
        <img
          src={notfounddesktop2x}
          alt="Shopping list is empty"
          height="700px"
          width="450px"
          className={css.notFoundImage}
        />
      </picture>
      <p className={css.sorryText}>We are sorry,</p>
      <p className={css.notFoundText}>
        but the page you were looking for can’t be found..
      </p>
    </div>
  );
};

export default NotFound;
