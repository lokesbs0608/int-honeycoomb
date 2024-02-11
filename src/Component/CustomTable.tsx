import CustomSelection from "./CustomSelection";

interface Props {
  data: any;
}

const Status = [
  "Status",
  "Closed",
  "Pending",
  "On Hold",
  "In progress",
  "Done",
  "Waiting for review",
];

const CustomTable = ({ data }: Props) => {
  console.log(data);

  const handleStatus = (e: any) => {
    console.log(e);
  };

  const returnStatus = (status: string) => {
    const getColors = (status: string) => {
      switch (status) {
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
          onchange={(e: any) => handleStatus(e.target.value)}
        />
      </span>
    );
  };

  const calculateDuration = (start_date: string, end_date: string) => {
    const date1:any = new Date(start_date);
    const date2:any = new Date(end_date);
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
                  <td scope="row">{data?.id}</td>
                  <td scope="row">{data?.title}</td>
                  <td scope="row">{data?.Start_Date}</td>
                  <td scope="row">{data?.End_Date}</td>
                  <td scope="row">
                    {
                      calculateDuration(data?.Start_Date, data?.End_Date)
                        ?.diffDays
                    }Days
                  </td>
                  <td scope="row">{data?.End_Date}</td>
                  <td scope="row">{data?.reporting_to}</td>
                  <td scope="row">{returnStatus(data?.status)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
