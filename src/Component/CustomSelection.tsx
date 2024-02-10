import React from "react";



interface Props {
  options:any;
  onchange:(e:any)=>void;
}

const CustomSelection = ({options,onchange}:Props) => {
  return (
    <div>
      <select onChange={(e)=>onchange(e)}  name="cars" id="cars">
        {options.map((item:any,index:number)=>{
          return(
            <option key={index} value={item}>{item}</option>
          )
        })}
      </select>
    </div>
  );
};

export default CustomSelection;
