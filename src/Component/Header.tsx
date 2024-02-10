import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
import SearchBarInput from "./SearchBarInput";

const Header = () => {
  const headerMenu = [
    { id: 0, title: "Dashboard", path: "/dashboard" },
    { id: 0, title: "Task", path: "/task" },
    { id: 0, title: "Notification", path: "/notification" },
    { id: 0, title: "Projects", path: "/projects" },
  ];
  const [activePath, setActivePath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <div className={styles.header_container}>
      <div className={styles.outer}>
        <div>
          {headerMenu.map((item, index) => {
            return (
              <Link
                className={`${
                  activePath === item?.path
                    ? styles.activePath
                    : styles.notActive
                }  mx-4`}
                to={item.path}
              >
                {item?.title}
              </Link>
            );
          })}
        </div>
        <SearchBarInput />
      </div>
    </div>
  );
};

export default Header;
