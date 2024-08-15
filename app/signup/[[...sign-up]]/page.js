import { SignIn } from "@clerk/nextjs";
import { Container, Box } from "@mui/material";

export default function PageSignIn() {
  return (
    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <SignIn />
    </Box>
  );
}
