import { Box } from "@mui/material";
interface propsImage {
  source?: string;
}
function MyImage(props: propsImage) {
  return (
    <Box sx={{ width: 200, height: 150 }}>
      <img
        src={props.source}
        alt="Hình ảnh tùy chỉnh"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
}

export default MyImage;
