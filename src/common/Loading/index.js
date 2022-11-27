import { CircularProgress, Box } from "@mui/material";

const Loading = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress fontSize={props.fontSize || "medium"} />,
    </Box>
  );
};

export default Loading;
