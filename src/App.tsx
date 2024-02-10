import { useState } from "react";
import "./App.css";
import { Button, Modal } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomInput from "./Component/CustomInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function createData(
  start_date: string,
  title: number,
  reporting_to: number,
  end_date: number,
  assigned_to: number,
  duration: number,
  id: number,
  status: string
) {
  return {
    start_date,
    id,
    title,
    reporting_to,
    end_date,
    assigned_to,
    duration,
    status,
    subTask: [
      {
        start_date,
        title,
        id,
        reporting_to,
        end_date,
        assigned_to,
        duration,
        status,
      },
      {
        start_date,
        title,
        id,
        reporting_to,
        end_date,
        assigned_to,
        duration,
        status,
      },
    ],
  };
}

function App() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = React.useState([]);
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  const [values, setValues] = React.useState({
    id: 0,
    title: "",
    start_date: "",
    end_date: "",
    reporting_to: "",
    assigned_to: "",
    duration: "",
    due_date: "",
    status: "Pending",
    subTask: [
      {
        id: 0,
        title: "",
        start_date: "",
        end_date: "",
        reporting_to: "",
        assigned_to: "",
        duration: "",
        due_date: "",
        status: "On Hold",
      },
    ],
  });
  const [tempVlaues, setTempValues] = React.useState({
    id: 0,
    title: "",
    start_date: "",
    end_date: "",
    reporting_to: "",
    assigned_to: "",
    duration: "",
    due_date: "",
    status: "",
  });

  const handleFormChanges = (e: any) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const [subTaskOpen, setSubTaskOpen] = React.useState(false);
  const [subTaskEror, setSubTaskErro] = React.useState(false);

  const handleSubTask = () => {
    setSubTaskOpen(true);
  };

  const handleSubTaskInputChange = (e: any) => {
    let { name, value } = e.target;
    setTempValues({ ...tempVlaues, [name]: value });
  };
  const handleSubtaskSave = () => {
    let newData = values;
    newData.subTask[tempVlaues?.id] = tempVlaues;
    setValues(newData);
    setTempValues({
      id: 0,
      title: "",
      start_date: "",
      end_date: "",
      reporting_to: "",
      assigned_to: "",
      duration: "",
      due_date: "",
      status: "",
    });
    console.log(values, newData);
    forceUpdate();
  };
  const handleSubtaskDelete = () => {};
  const handleSubtaskEdit = (data: any) => {
    setTempValues(data);
    forceUpdate();
  };

  const handleSubtasAdd = () => {
    let newData = values;
    tempVlaues.id === newData.subTask.length + 1;
    newData.subTask.push(tempVlaues);
    setValues(newData);
    setTempValues({
      id: 0,
      title: "",
      start_date: "",
      end_date: "",
      reporting_to: "",
      assigned_to: "",
      duration: "",
      due_date: "",
      status: "",
    });
    console.log(values, newData);
    forceUpdate();
  };

  const handleSaveTask = () => {
    if (
      !values?.end_date &&
      values?.assigned_to &&
      values?.reporting_to &&
      values?.start_date &&
      !values?.title
    ) {
      alert("Enter All The fileds");
      return null;
    } else {
      let val = JSON.stringify(values);
      localStorage.setItem("table", val);
      let temp = rows;
      temp.push(values);
      setRows(temp);
    }
  };

  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const handleTaskStatusChange = (e: any, task: any, subTask: any) => {
      let newData = rows;
      if (subTask === -1) {
        let index = newData.indexOf(task);
        newData[index].status = e.target.value;
        setRows(newData);
      } else {
        let index = newData.indexOf(task);
        let temp = newData[index].subTask;
        let sub_index = newData[index].subTask.indexOf(subTask);
        temp[sub_index].status = e.target.value;
        newData[index].subTask = temp;
        setRows(newData);
      }
      forceUpdate();
      console.log(e.target.value);
    };

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="right">{row?.title}</TableCell>
          <TableCell align="right">{row?.start_date}</TableCell>
          <TableCell align="right">{row?.end_date}</TableCell>
          <TableCell align="right">{row?.reporting_to}</TableCell>
          <TableCell align="right">{row?.assigned_to}</TableCell>
          <TableCell align="right">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={row?.status}
                  label="Age"
                  onChange={(e) => handleTaskStatusChange(e, row, -1)}
                >
                  <MenuItem value={"Close"}>Close</MenuItem>
                  <MenuItem value={"Pending"}>Pending</MenuItem>
                  <MenuItem value={"On Hold"}>On Hold</MenuItem>
                  <MenuItem value={"In progress"}> In progress</MenuItem>
                  <MenuItem value={"Done"}>Done</MenuItem>
                  <MenuItem value={"Waiting for review"}>
                    Waiting for review
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Sub Task
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>title</TableCell>
                      <TableCell>Start Data</TableCell>
                      <TableCell align="right">End Date</TableCell>
                      <TableCell align="right">Reportin to</TableCell>
                      <TableCell align="right">Assigned to</TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.subTask.map((historyRow) => (
                      <TableRow key={historyRow.id}>
                        <TableCell component="th" scope="row">
                          {`${historyRow?.id}${row?.id}`}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {historyRow?.title}
                        </TableCell>
                        <TableCell>{historyRow?.start_date}</TableCell>
                        <TableCell align="right">
                          {historyRow.end_date}
                        </TableCell>
                        <TableCell align="right">
                          {historyRow.reporting_to}
                        </TableCell>
                        <TableCell align="right">
                          {historyRow.assigned_to}
                        </TableCell>
                        <TableCell align="right">{historyRow.status}</TableCell>
                        <TableCell>
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Status
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={row?.status}
                                label="Status"
                                onChange={(e) =>
                                  handleTaskStatusChange(e, row, historyRow?.id)
                                }
                              >
                                <MenuItem value={"Close"}>Close</MenuItem>
                                <MenuItem value={"Pending"}>Pending</MenuItem>
                                <MenuItem value={"On Hold"}>On Hold</MenuItem>
                                <MenuItem value={"In progress"}>
                                  {" "}
                                  In progress
                                </MenuItem>
                                <MenuItem value={"Done"}>Done</MenuItem>
                                <MenuItem value={"Waiting for review"}>
                                  Waiting for review
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="text-center py-3 ">My Todo</h2>
      <div className="d-flex align-items-center justify-content-end">
        <Button onClick={() => setOpen(!open)} className="my-4">
          Add task
        </Button>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>ID </TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Start Date</TableCell>
                <TableCell align="right">End Date</TableCell>
                <TableCell align="right">Reporting TO</TableCell>
                <TableCell align="right">Assigned TO</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell align="right">Due Date </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={"Na"} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Modal
          open={open || false}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              className="text-center py-4 f"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              Fill the details to add a task
            </div>
            <div className="row">
              <div className="col-md-6">
                <CustomInput
                  title="Task Name"
                  value={values.title}
                  onChange={handleFormChanges}
                  placeHolder="Enter Task Name"
                  id={"1"}
                  name={"title"}
                />
              </div>
              <div className="col-md-3">
                <CustomInput
                  title="Start Date"
                  value={values.start_date}
                  onChange={handleFormChanges}
                  placeHolder=" "
                  id={"2"}
                  name={"start_date"}
                  type="date"
                />
              </div>
              <div className="col-md-3">
                <CustomInput
                  title="End Date"
                  value={values.end_date}
                  onChange={handleFormChanges}
                  placeHolder=" "
                  id={"3"}
                  name={"end_date"}
                  type="date"
                />
              </div>
              <div className="col-md-6">
                <CustomInput
                  title="Reporting To"
                  value={values.reporting_to}
                  onChange={handleFormChanges}
                  placeHolder="Enter Reporting Name"
                  id={"4"}
                  name={"reporting_to"}
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <CustomInput
                  title="Assigned To"
                  value={values.assigned_to}
                  onChange={handleFormChanges}
                  placeHolder="Enter Assignee Name"
                  id={"5"}
                  name={"assigned_to"}
                  type="text"
                />
              </div>
            </div>
            <div className="py-3">
              <div className="d-flex align-items-center justify-content-between">
                <Button onClick={() => handleSubTask()}>Add Sub Task</Button>
                <Button onClick={() => handleSaveTask()}>Save Task</Button>
              </div>

              {subTaskOpen && (
                <div>
                  {subTaskEror && (
                    <p style={{ color: "red" }}>Fill the Details</p>
                  )}
                  <div className="d-flex bg-grey align-items-center justify-content-between border border-slate p-2 mt-2">
                    <div
                      className="row my-4 "
                      style={{ borderBottom: "1px soild #ccc" }}
                    >
                      <div className="col-md-5">
                        <CustomInput
                          title="Task Name"
                          onChange={(e) => handleSubTaskInputChange(e)}
                          placeHolder="Enter Task Name"
                          id={"1"}
                          name={"title"}
                          value={tempVlaues.title}
                        />
                      </div>
                      <div className="col-md-3">
                        <CustomInput
                          title="Start Date"
                          onChange={(e) => handleSubTaskInputChange(e)}
                          placeHolder=" "
                          id={"2"}
                          name={"start_date"}
                          type="date"
                          value={tempVlaues.start_date}
                        />
                      </div>
                      <div className="col-md-3">
                        <CustomInput
                          title="End Date"
                          onChange={(e) => handleSubTaskInputChange(e)}
                          placeHolder=" "
                          id={"3"}
                          value={tempVlaues.end_date}
                          name={"end_date"}
                          type="date"
                        />
                      </div>
                      <div className="col-md-5">
                        <CustomInput
                          title="Reporting To"
                          onChange={(e) => handleSubTaskInputChange(e)}
                          placeHolder="Enter Reporting Name"
                          id={"4"}
                          name={"reporting_to"}
                          value={tempVlaues.reporting_to}
                          type="text"
                        />
                      </div>
                      <div className="col-md-6">
                        <CustomInput
                          title="Assigned To"
                          onChange={(e) => handleSubTaskInputChange(e)}
                          placeHolder="Enter Assignee Name"
                          id={"5"}
                          name={"assigned_to"}
                          value={tempVlaues.assigned_to}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="d-flex m-2">
                      <Button
                        onClick={() => handleSubtasAdd()}
                        className="btn btn-danger"
                        style={{ color: "green", marginRight: "20px" }}
                      >
                        Add
                      </Button>
                      <Button
                        onClick={() => handleSubtaskSave()}
                        style={{ color: "green", marginRight: "20px" }}
                      >
                        Save
                      </Button>
                      <Button
                        onClick={() => handleSubtaskDelete()}
                        className="btn btn-danger"
                        sx={{ color: "red" }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  {values.subTask[0].title &&
                    values.subTask.map((item, index) => {
                      return (
                        <div
                          onClick={() => {
                            handleSubtaskEdit(item);
                          }}
                          className=" border border-slate p-2 m-2 bg-gray d-flex align-items-center justify-content-between"
                        >
                          <div
                            key={index}
                            className="row my-4 "
                            style={{ borderBottom: "1px soild #ccc" }}
                          >
                            <div className="col-md-5">
                              <CustomInput
                                title="Task Name"
                                disabled={true}
                                onChange={(e) => handleSubTaskInputChange(e)}
                                placeHolder="Enter Task Name"
                                id={"1"}
                                name={"title"}
                                value={values?.subTask[0]?.title}
                              />
                            </div>
                            <div className="col-md-3">
                              <CustomInput
                                title="Start Date"
                                onChange={(e) => handleSubTaskInputChange(e)}
                                placeHolder=" "
                                id={"2"}
                                name={"start_date"}
                                value={values?.subTask[0]?.start_date}
                                type="date"
                                disabled={true}
                              />
                            </div>
                            <div className="col-md-3">
                              <CustomInput
                                title="End Date"
                                onChange={(e) => handleSubTaskInputChange(e)}
                                placeHolder=" "
                                id={"3"}
                                disabled={true}
                                name={"end_date"}
                                type="date"
                                value={values?.subTask[0]?.end_date}
                              />
                            </div>
                            <div className="col-md-5">
                              <CustomInput
                                title="Reporting To"
                                onChange={(e) => handleSubTaskInputChange(e)}
                                placeHolder="Enter Reporting Name"
                                id={"4"}
                                disabled={true}
                                name={"reporting_to"}
                                value={values?.subTask[0]?.reporting_to}
                                type="text"
                              />
                            </div>
                            <div className="col-md-6">
                              <CustomInput
                                title="Assigned To"
                                onChange={(e) => handleSubTaskInputChange(e)}
                                placeHolder="Enter Assignee Name"
                                id={"5"}
                                name={"assigned_to"}
                                disabled={true}
                                value={values?.subTask[0]?.assigned_to}
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
