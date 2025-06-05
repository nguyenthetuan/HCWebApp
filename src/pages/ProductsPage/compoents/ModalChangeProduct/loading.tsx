import { Box, Skeleton, Stack } from "@mui/material";

export const AspectFormLoading = () => {
  return (
    <Stack spacing={2}>
      {[...Array(3)].map((_, index) => (
        <Box key={index}>
          <Skeleton variant="text" width={200} height={30} />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            sx={{ borderRadius: 1 }}
          />
        </Box>
      ))}
    </Stack>
  );
};
