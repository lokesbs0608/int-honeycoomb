import { useState } from "react";
import styles from "./styles.module.scss";
import CustomSelection from "../Component/CustomSelection";
import CustomTable from "../Component/CustomTable";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selector = useSelector((state) => state?.Task);
  const [, setSelectedStatus] = useState("Status");
  const [, setSelectedTask] = useState("Task");

  const Status = [
    "Status",
    "Closed",
    "Pending",
    "On Hold",
    "In progress",
    "Done",
    "Waiting for review",
  ];
  const Tasks = ["Task"];

  console.log(selector);

  return (
    <div>
      <h2>Welcome to task Management system</h2>
      <div className={styles.dashboard_bg}>
        <div className={styles.filter_container}>
          <div className={styles.section1}>Task</div>
          <div className={styles.section2}>
            <div className="mx-1">
              <CustomSelection
                options={Tasks}
                onchange={(e) => setSelectedTask(e.target.value)}
              />
            </div>
            <div className="mx-1">
              <CustomSelection
                options={Status}
                onchange={(e) => setSelectedStatus(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.table_container}>
          <CustomTable data={selector?.task} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
