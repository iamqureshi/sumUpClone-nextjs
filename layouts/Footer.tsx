import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "whiteSmoke",
        }}
      >
        <Container maxWidth="lg">
          <FooterTop />
          <br />
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="lg">
          <FooterBottom />
        </Container>
      </Box>
    </>
  );
}
