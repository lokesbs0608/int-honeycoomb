import { UPDATE_TASK_ACTION } from "../redux/Actions/Task";
import CustomSelection from "./CustomSelection";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

interface Props {
  data: any;
  isSubTaskTable?: boolean;
  returnSubTaskData?: (e: any) => void;
}

const Status = [
  "Status",
  "Closed",
  "Pending",
  "On Hold",
  "In progress",
  "Done",
  "WFR",
];

const CustomTable = ({ data, isSubTaskTable, returnSubTaskData }: Props) => {
  const dispatch = useDispatch();
  const [, setValues] = useState<any>({
    due_date: "",
    duration: "",
    status: "Pending",
    id: 0,
    files: [],
    sub_task: [],
  });

  const handleStatus = (e: any, data: any) => {
    let tempData = data;
    tempData.status = e;
    setValues(tempData);
    dispatch(UPDATE_TASK_ACTION(tempData?.id, tempData));
  };

  const returnStatus = (data: any) => {
    const getColors = (data: any) => {
      switch (data?.status) {
        case "Closed":
          return "green_status";
        case "Pending":
          return "yellow_status";
        case "Done":
          return "green_status";
      }
    };

    return (
      <span
        style={{
          textAlign: "center",
          padding: "10px 25px",
          borderRadius: "20px",
        }}
        className={getColors(status)}
      >
        <CustomSelection
          options={Status}
          value={data?.status}
          onchange={(e: any) => handleStatus(e.target.value, data)}
        />
      </span>
    );
  };

  const calculateDuration = (start_date: string, end_date: string) => {
    if (!start_date && !end_date) return { diffDays: "", diffTime: "" };
    const date1: any = new Date(start_date);
    const date2: any = new Date(end_date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return { diffDays, diffTime };
  };

  return (
    <div className="">
      <table className=" table-borderless">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Task Name</th>
            <th scope="col">Start Date </th>
            <th scope="col">End Date </th>
            <th scope="col">Duration</th>
            <th scope="col">Due date</th>
            <th scope="col">Reporting to</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data: any) => {
              return (
                <tr>
                  {!isSubTaskTable && (
                    <td scope="row">
                      <Link to={`/task-details?id=${data?.id}`}>
                        {data?.id}
                      </Link>
                    </td>
                  )}

                  {isSubTaskTable && returnSubTaskData && (
                    <td
                      onClick={() => returnSubTaskData(data)}
                      style={{ textDecoration: "underline", color: "blue" }}
                      scope="row"
                    >
                      {data?.id}
                    </td>
                  )}
                  <td scope="row">{data?.title}</td>
                  <td scope="row">{data?.Start_Date}</td>
                  <td scope="row">{data?.End_Date}</td>
                  <td scope="row">
                    {calculateDuration(data?.Start_Date, data?.End_Date)
                      ?.diffDays || " "}
                  </td>
                  <td scope="row">{data?.End_Date}</td>
                  <td scope="row">{data?.reporting_to}</td>
                  <td scope="row">{data?.status ? returnStatus(data) : ""}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
