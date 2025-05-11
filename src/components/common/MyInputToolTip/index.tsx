import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

export default function MyInputToolTip(props: any) {
  return (
    <Tooltip title={props?.toolTip} placement="top" arrow>
      <TextField {...props} fullWidth />
    </Tooltip>
  );
}
