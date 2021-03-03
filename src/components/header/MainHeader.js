import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Switch,
  Popover,
  Menu,
  Position,
  MenuIcon,
  CogIcon,
  UserIcon,
  LogOutIcon,
  Pill,
  Text,
  Pane,
  BoxIcon
} from "evergreen-ui";

import EmptyBox from '../empty-box/EmptyBox';
import "./MainHeader.scss";

function MainHeader(props) {
  let userOptions = useMemo(
    () => [
      {
        id: 1,
        title: "Xem chi tiết",
        icon: UserIcon,
      },
      {
        id: 2,
        title: "Đổi mật khẩu",
        icon: CogIcon,
      },
      {
        id: 3,
        title: "Đăng xuất",
        icon: LogOutIcon,
      },
    ],
    []
  );
  return (
    <header className="main-header">
      <div className="main-header__left">
        <div className="main-header__humberger-icon">
          <button className="main-header__humberger-btn">
            <MenuIcon size={26} color={"#425A70"} />
          </button>
        </div>
      </div>

      <div className="main-header__right">
        <div className="main-header__theme-mode">
          <div className="main-header__theme-mode-switch">
            <Switch height={16} checked={false} />
            <label>Dark mode</label>
          </div>
        </div>
        <div className="main-header__nontifycation">
          <Popover
            content={
              <Pane
                width={240}
                height={240}
                display="flex"
              >
                <EmptyBox title="Không có thông báo nào!" icon={<BoxIcon color="#425A70" size={50} />} />
              </Pane>
            }
            position={Position.TOP_RIGHT}
          >
            <button
              style={{ position: "relative" }}
              className="main-header__nontifycation-btn"
            >
              <i className="fas fa-bell"></i>
              <Pill
                style={{
                  position: "absolute",
                  top: -10,
                  left: 4,
                }}
                display="inline-flex"
                margin={6}
                color="red"
                isSolid
              >
                2
              </Pill>
            </button>
          </Popover>
        </div>
        <div className="main-header__user-info">
          <div className="main-header__user-avatar">
            <Avatar name="Pham Van Tung" size={32} />
          </div>
          <div className="main-header__user-name">
            <span>Phạm Văn Tùng</span>
          </div>
          {/* menu */}

          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                  {userOptions.map((item) => (
                    <Menu.Item data-id={item.id} icon={item.icon} key={item.id}>
                      {item.title}
                    </Menu.Item>
                  ))}
                </Menu.Group>
                <Menu.Divider />
              </Menu>
            }
          >
            <button className="main-header__user-more-icon">
              <i className="fas fa-ellipsis-v" style={{ color: '#425A70'}}></i>
            </button>
          </Popover>
          {/* end menu */}
        </div>
      </div>
    </header>
  );
}

MainHeader.propTypes = {};

export default MainHeader;
