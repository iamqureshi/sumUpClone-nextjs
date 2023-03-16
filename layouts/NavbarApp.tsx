import PersonIcon from "@mui/icons-material/Person";
import { Chip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { navigationMenu } from "../data/navigationMenu";
import NestedNavbar from "./NestedtNavbar";

export default function NavbarApp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        variant="elevation"
        elevation={0}
        color="inherit"
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Image src={"/logo.png"} width={140} height={50} alt="logo.png" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {navigationMenu?.map((item: any) => {
                if (item.isNew) {
                  return (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1" mx={1}>
                        {item.name}
                      </Typography>
                      <Chip label="New" color="success" size="small" />
                    </Box>
                  );
                } else {
                  if (item.child?.length > 0) {
                    return <NestedNavbar key={item.id} item={item} />;
                  } else {
                    return (
                      <Typography variant="body1" key={item.id}>
                        {item.name}
                      </Typography>
                    );
                  }
                }
              })}
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
