import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import NavbarApp from "./NavbarApp";

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <NavbarApp />
      <Box height={"100%"} sx={{ py: 2 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
