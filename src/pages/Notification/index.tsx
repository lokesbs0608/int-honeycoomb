import { useEffect, useState, useReducer } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Notification = () => {
  const selector: any = useSelector<any>((state) => state);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [notification, setNotification] = useState<any>([]);
  const [taskTable, setTaskTable] = useState<any>([]);

  const generateNotification = () => {
    let temp: { taskId: any; reporting: any; assigned_to: any; status: any }[] =
      [];
    if (taskTable) {
      taskTable.map((item: any) => {
        let obj = {
          taskId: item?.id,
          reporting: item?.reporting_to,
          assigned_to: item?.assigned_to,
          status: item?.status,
          due_date:item?.End_Date
        };
        temp.push(obj);
      });
      setNotification(temp);
      forceUpdate();
    }
  };

  useEffect(() => {
    if (selector) {
      setTaskTable(selector?.Task?.task);
    }
  }, [selector]);

  useEffect(() => {
    generateNotification();
  }, [taskTable]);
  return (
    <div>
      <h2>Notification</h2>
      {notification &&
        notification.map((item: any) => {
          return (
            <div>
              <ul slot="1" style={{ fontSize: "16px " }}>
                <li>
                  Task ID
                  <span className="mx-2">
                    <Link to={`/task-details?id=${item?.taskId}`}>
                      {item?.taskId}
                    </Link>
                  </span>
                  is Assigned to{" "}
                  <span style={{ color: "blue" }}> {item?.assigned_to} </span>{" "}
                  and report to{" "}
                  <span style={{ color: "blue" }}> {item?.reporting} </span>, End date is <span style={{color:'red'}}> {item?.due_date} </span>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Notification;
