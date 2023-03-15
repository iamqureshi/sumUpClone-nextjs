import MenuIcon from "@mui/icons-material/Menu";
import Container  from "@mui/material/Container";
import Stack  from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";

export default function NavbarApp() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar
        position="static"
        variant="elevation"
        elevation={0}
        color="inherit"
      >
        <Container maxWidth="xl">
          <Toolbar sx={{
            display: "flex",
            justifyContent:"space-between"
          }}>
            <Box>
              <Image src={"/logo.png"} width={140} height={50} alt="logo.png" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ mx: 2 }} variant="body1">
                Products
              </Typography>
              <Typography sx={{ mx: 2 }} variant="body1">
                Business Account
              </Typography>
              <Typography sx={{ mx: 2 }} variant="body1">
                Sell More
              </Typography>
              <Typography sx={{ mx: 2 }} variant="body1">
                Pricing
              </Typography>
              <Typography sx={{ mx: 2 }} variant="body1">
                Help
              </Typography>
            </Box>
            <Stack direction="row" spacing={0.5}>
              <PersonIcon />
              <Typography variant="body1">Login</Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
