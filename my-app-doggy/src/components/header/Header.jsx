import classes from "./Header.module.css";
import logo from "./imagesHeader/spaLogo2.png";
import search from "./imagesHeader/search.svg";
import bag from "./imagesHeader/shopping-bag.svg";
import user from "./imagesHeader/user.svg";

export const Header = () => {
  return (
    <div className={classes.divContainer}>
      <div>
        <img className={classes.imgSpaLogo} src={logo} alt="spaLogo" />
        <p className={classes.logoName}>Luxe Animal Spa</p>
      </div>

      <nav className={classes.navContainer}>
        <a href="#" className={classes.firstAStyle}>
          Home
        </a>
        <a href="#" className={classes.aStyle}>
          Products
        </a>
        <a href="#" className={classes.aStyle}>
          Spa Services
        </a>
        <a href="#" className={classes.aStyle}>
          Book Appointment
        </a>
        <a href="#" className={classes.aStyle}>
          Blog
        </a>
        <a href="#" className={classes.aStyle}>
          About Us
        </a>
        <a href="#" className={classes.aStyle}>
          Contact Us
        </a>
      </nav>

      <div className={classes.divContainerUserBagSearch}>
        <div className={classes.divCircleThree}>3</div>
        <img
          className={classes.iconBagUserSearch}
          src={search}
          alt="logoSearch"
        />
        <img
          className={classes.iconBagUserSearch}
          src={bag}
          alt="logoBag"
        />

        <img className={classes.iconBagUserSearch} src={user} alt="logoUser" />
      </div>
    </div>
  );
};
