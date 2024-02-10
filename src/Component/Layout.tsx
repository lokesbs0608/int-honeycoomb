
import SideBar from "./SideBar";
import Header from "./Header";
import Router from "../router";
import styles from "./styles.module.scss";

const Layout = () => {
  return (
    <div className="d-flex overflowX-hidden">
      <SideBar />
      <div className="vw-100 vh-100 overflowY-hidden">
        <Header />
        <div className="my-2 bg-panel panel-height p-2 ">
          <div className={styles.body_container} >
            <Router />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
