import { CircularProgress, Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={1300}
      bgcolor="rgba(255,255,255,0.7)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
}
