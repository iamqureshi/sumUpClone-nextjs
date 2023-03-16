import { Box, Button, Fade, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import UpIcon from "@mui/icons-material/ArrowCircleUp";

export default function NestedNavbar({ item }: { item: any }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div key={item.id}>
      {/* <Button
        id={`menu-button-${item.id}`}
        aria-controls={`menu-${item.id}`}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {item?.name}
      </Button> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mx: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            cursor: "pointer",
          }}
          onClick={(event) => handleClick(event)}
        >
          {item?.name}
        </Typography>
        <UpIcon />
      </Box>

      <Menu
        id={`menu-${item.id}`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {item?.child.map((childComp: any) => (
          <MenuItem key={childComp.id} role="menuitem">
            {childComp.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
