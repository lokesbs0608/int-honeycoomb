



interface Props {
  options:any;
  onchange:(e:any)=>void;
}

const CustomSelection = ({options,onchange}:Props) => {
  return (
  
      <select onChange={(e)=>onchange(e)}  name="cars" id="cars">
        { options && options.map((item:any,index:number)=>{
          return(
            <option key={index} value={item}>{item}</option>
          )
        })}
      </select>

  );
};

export default CustomSelection;
