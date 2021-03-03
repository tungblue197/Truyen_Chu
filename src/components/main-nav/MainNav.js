import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import EmptyBox from '../empty-box/EmptyBox';
import { DashboardIcon,SettingsIcon ,UserIcon,BookIcon , FollowingIcon, LayersIcon, TagIcon, HandIcon, ErrorIcon, HelperManagementIcon } from 'evergreen-ui';
import './MainNav.scss';


function MainNav({ items, theme }) {
  let menuIcons = useMemo(() => ([
    <DashboardIcon size={20} />,
    <SettingsIcon  size={20}/>,
    <UserIcon size={20}/>,
    <BookIcon size={20}/>,
    <FollowingIcon size={20}/>,
    <LayersIcon size={20}/>,
    <TagIcon size={20}/>,
    <HandIcon size={20}/>,
    <ErrorIcon size={20}/>,
    <HelperManagementIcon size={20} />
  ]), [])
  const renderMenuItem = () => {
    if(!items?.length) return (
      <div className="main-nav__empty">
        <EmptyBox title="Không có dữ liệu!"  />
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
              { menuIcons[index]}  {item.title}
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
