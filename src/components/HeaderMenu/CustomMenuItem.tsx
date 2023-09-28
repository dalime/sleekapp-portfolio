import React from "react";
import { useMatch } from "react-router-dom";
import { Button } from "@mui/material";

interface MenuItemProps {
  text: string;
  route: string;
}

function CustomMenuItem({ text, route }: MenuItemProps) {
  const match = useMatch(route);

  return (
    <Button
      variant="text"
      sx={{ marginLeft: 1, marginRight: 1 }}
      color={match ? "primary" : "inherit"}
    >
      {text}
    </Button>
  );
}

export default CustomMenuItem;
