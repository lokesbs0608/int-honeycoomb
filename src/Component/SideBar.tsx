
import styles from "./styles.module.scss";
import UserImg from "../assets/img/userImg.png";
import SettingIcon from "../assets/img/settings.png";
import LogOutIcon from "../assets/img/logout.png";

const SideBar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div  className={styles.user_img}>
        <img src={UserImg} width={"100%"} height={"100%"} alt="userIcon" />
        <span className={styles.user_name}>

        Lokesh B S
        </span>
      </div>
      <div className={styles.side_bar_option_controller}>
        <div className="d-flex align-items-center py-1 ">
          <div className={styles.options}>Setting</div>
          <div>
            <img src={SettingIcon} width={"100%"} height={"100%"} alt="userIcon" />
          </div>
        </div>
        <div className="d-flex align-items-center py-1">
          <div  className={styles.options}>Logout</div>
          <div>
            <img src={LogOutIcon} width={"100%"} height={"100%"} alt="userIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
