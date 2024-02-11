interface Props {
  options: any;
  onchange: (e: any) => void;
  value?: string;
}

const CustomSelection = ({ options, onchange ,value}: Props) => {
  return (
    <select value={value} onChange={(e) => onchange(e)} name="cars" id="cars">
      {options &&
        options.map((item: any, index: number) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
    </select>
  );
};

export default CustomSelection;
