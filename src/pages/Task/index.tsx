
import styles from "../styles.module.scss";
import CustomInput from "../../Component/CustomInput";
import DragDrop from "../../Component/DropZone";

const Task = () => {
  const handleTaskDetailsChange = () => {};
  return (
    <div>
      <div>
        <h2>Add Task Details</h2>
        <div className={styles.dashboard_bg}>
          <div className="row p-4">
            <div className="col-md-4 col-lg-3">
              <CustomInput
                id="title"
                placeHolder="Enter Task Name"
                title="Task title"
                name="title"
                onChange={handleTaskDetailsChange}
              />
            </div>
            <div className="col-md-4 col-lg-3">
              <CustomInput
                id="assigned_to"
                placeHolder="Assignee"
                title="Assignee"
                name="assigned_to"
                onChange={handleTaskDetailsChange}
              />
            </div>
            <div className="col-md-4 col-lg-3">
              <CustomInput
                id="reporting_to"
                placeHolder="Reporting to"
                title="Reporting"
                name="reporting_to"
                onChange={handleTaskDetailsChange}
              />
            </div>
            <div className="col-md-4 col-lg-3">
              <CustomInput
                id="comments"
                placeHolder="Comments"
                title="Comments"
                name="comments"
                onChange={handleTaskDetailsChange}
              />
            </div>
            <div className="col-md-4 col-lg-3">
             <DragDrop/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
