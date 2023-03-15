import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function FooterBottom() {
  return (
    <Grid container spacing={2} py={2}>
      <Grid item xs={12} md={9}>
        <Stack spacing={3} direction="row">
          <Typography variant="body1" color={"grey"}>
            Legal Notice
          </Typography>
          <Typography variant="body1" color={"grey"}>
            Privacy Policy
          </Typography>
          <Typography variant="body1" color={"grey"}>
            Term & Conditions
          </Typography>
          <Typography variant="body1" color={"grey"}>
            Cookie Policy
          </Typography>
          <Typography variant="body1" color={"grey"}>
            Service Status
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack direction={"row"} spacing={3}>
          <img
            src="/assets/youtube.png"
            height={30}
            style={{ filter: "grayscale(100%)" }}
            alt=""
          />
          <img
            src="/assets/facebook.png"
            height={30}
            style={{ filter: "grayscale(100%)" }}
            alt=""
          />
          <img
            src="/assets/slack.png"
            height={30}
            style={{ filter: "grayscale(100%)" }}
            alt=""
          />
          <img
            src="/assets/linkedin.png"
            height={30}
            style={{ filter: "grayscale(100%)" }}
            alt=""
          />
          <img
            src="/assets/github.png"
            height={30}
            style={{ filter: "grayscale(100%)" }}
            alt=""
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography py={2} variant="body1" textAlign={"center"} color='grey'>
          ©SumUp Inc. All Rights Reserved | SumUp Inc. 1209 Orange Street
          Wilmington DE 19801-0801. SumUp is a registered Payment Facilitator of
          Fifth Third Bank, an Ohio Corporation. Banking services are provided
          by Piermont Bank, Member FDIC.
        </Typography>
      </Grid>
    </Grid>
  );
}
