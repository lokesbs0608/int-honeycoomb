

const CustomTable = () => {
  return (
    <div className="">
      <table  className=" table-borderless">
        <thead >
          <tr >
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
        <tbody >
            {[1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9].map((item)=>{
                return(
                    <tr>
                    <td scope="row">1</td>
                    <td  scope="row">New Store Task</td>
                    <td  scope="row">May 25, 2024</td>
                    <td  scope="row">June 25, 2024</td>
                    <td  scope="row">45:37:33</td>
                    <td  scope="row">May 25, 2023</td>
                    <td  scope="row">Om prakash rao</td>
                    <td  scope="row">Completed</td>
                  </tr>
                )
            })}

        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
