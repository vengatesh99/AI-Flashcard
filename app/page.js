import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";

import Header from "./components/Header";

export default function Home() {
  return (
    <Container maxWidth="xxl">
      <Header/>
      <Stack flexDirection={"column"}>
      </Stack>
    </Container>
  );
}
