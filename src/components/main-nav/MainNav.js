import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import arrowIcon from '../../assets/icons/play.svg';
import './MainNav.scss';


function MainNav({ items, theme }) {

  const renderMenuItem = () => {
    if(!items?.length) return (
      <div className="main-nav__empty">
        <span>Không có dữ liệu</span>
      </div>
    )
    return (
      items.map((item, index) => {
        return (
          <li className="main-nav__item" key={index}>
            <NavLink
              className="main-nav__link"
              activeClassName="main-nav__link--active"
              to={item.link}
            >
              <img className="main-nav__item-icon" src={item.icon || arrowIcon} /> {item.title}
            </NavLink>
          </li>
        );
      })
    )
  }
  return (
    <nav className={`main-nav main-nav-${theme}`}>
      {renderMenuItem()}
    </nav>
  );
}

MainNav.propTypes = {
  theme: PropTypes.string,
  items: PropTypes.array,
};

export default MainNav;
