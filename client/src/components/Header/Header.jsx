import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import instockLogo from "../../assets/images/InStock-Logo_1x.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content-wrapper">
        <Link to="/">
          <img
            className="header__logo"
            src={instockLogo}
            alt="InStock logo"
          ></img>
        </Link>
        <ul className="header__list">
          <li className="header__list-item">
            <NavLink
              to="/"
              exact
              className={(isActive) =>
                "header__link" + (isActive ? "--active" : "")
              }
            >
              Warehouses
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink
              to="/inventory"
              className={(isActive) =>
                "header__link" + (isActive ? "--active" : "")
              }
            >
              Inventory
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
