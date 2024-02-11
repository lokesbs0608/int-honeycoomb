import styles from "../styles.module.scss";
import CustomInput from "../../Component/CustomInput";
import DragDrop from "../../Component/DropZone";
import Button from "@mui/material/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ADD_TASK_ACTION } from "../../redux/Actions/Task";
import SubTask from "./subTask.tsx";

const TaskEdit = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [values, setValues] = useState<any>({
    due_date: "",
    duration: "",
    status: "Pending",
    id: 0,
    files: [],
    sub_task: [],
  });

  const handleTaskDetailsChange = (e: any) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addTask = () => {
    setValues({ ...values, id: generateUUID() });
    if (
      values?.id &&
      values.title &&
      values?.reporting_to &&
      values?.assigned_to &&
      values?.Start_Date &&
      values.End_Date
    ) {
      dispatch(ADD_TASK_ACTION(values));
      alert("Task Added");
      setValues({
        due_date: "",
        duration: "",
        status: "Pending",
        id: 0,
        files: [],
        sub_task: [],
      });
    } else {
      alert("Fil The Details");
    }
  };
  function generateUUID() {
    let uuid = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrs tuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      uuid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return uuid;
  }

  const MultiFilesUrl = (url: string) => {
    let temp = values?.files;
    temp.push(url);
    setValues({ ...values, files: temp });
  };


  const [subTaskModalOpen, setSubTaskModalOpen] = useState(false);

  const handleSubTask = (data: any) => {
    console.log( values?.sub_task)
    let temp = values?.sub_task;
    temp.push(data);
 
    setValues({ ...values, sub_task: temp });
  };
  console.log(selector);
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
            <div className="col-md-4   col-lg-3">
              <div className="row">
                <div className="col-6">
                  <CustomInput
                    id="Start_Date"
                    placeHolder="Start Date"
                    title="Start Date"
                    name="Start_Date"
                    onChange={handleTaskDetailsChange}
                    type="date"
                  />
                </div>
                <div className="col-6">
                  <CustomInput
                    id="End_Date"
                    placeHolder="End_Date"
                    title="End date"
                    name="End_Date"
                    onChange={handleTaskDetailsChange}
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <DragDrop onUpload={(url: string) => MultiFilesUrl(url)} />
            </div>
            <div className="col-6 my-3">
              <CustomInput
                id="comments"
                placeHolder="Comments"
                title="Comments"
                name="Comments"
                multiline={true}
                onChange={handleTaskDetailsChange}
                type="date"
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mx-4 px-1">
            <Button onClick={addTask}>Create Task</Button>
            <Button
              onClick={() => {
                setSubTaskModalOpen(true);
              }}
            >
              AddSub Task
            </Button>
          </div>
        </div>
      </div>
      <SubTask
        onCreate={(data: any) => handleSubTask(data)}
        open={subTaskModalOpen}
        onClose={() => setSubTaskModalOpen(false)}
      />
    </div>
  );
};

export default TaskEdit;
