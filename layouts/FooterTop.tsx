import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function FooterTop() {
  return (
    <>
      <Grid container spacing={2} py={3}>
        <Grid item xs={12} sx={{ py: 3 }}>
          <Image src={"/logo.png"} width={140} height={50} alt="logo.png" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              About
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Help Center
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Partners
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              About
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Help Center
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Partners
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              About
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Help Center
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }} color="grey">
              Partners
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField placeholder="Top Articles" />
            </Grid>
            <Grid item xs={12}>
              <TextField placeholder="Cities" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
