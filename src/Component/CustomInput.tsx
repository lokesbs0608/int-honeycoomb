import TextField from "@mui/material/TextField";

interface Props {
  onChange: (e: any) => void;
  name: string;
  title: string;
  placeHolder: string;
  id: string;
  value?: string;
  type?: string;
  disabled?: any;
}

export default function CustomInput({
  onChange,
  placeHolder,
  name,
  title,
  value,
  type,
  disabled,
}: Props) {
  return (
    <div >
      <span style={{fontWeight:'600',textTransform:'uppercase'}}>{title}</span>
      <TextField
      size="small"
        sx={{ width: "100%" ,background:'#fff'}}
        onChange={(e) => onChange(e)}
        placeholder={placeHolder}
        name={name}
        required
        disabled={disabled}
        id="outlined-required"
        value={value}
        type={type}
      />
    </div>
  );
}
