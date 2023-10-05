import React from "react";
import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import { Code, BrushTwoTone, Keyboard } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

import { PortfolioItemInterface } from "../../types";

interface Props {
  index: number;
  portfolioItem: PortfolioItemInterface;
  hoveringItem: number | null;
  setHoveringItem(n: number | null): void;
  setActiveItem(i: PortfolioItemInterface | null): void;
}

function PortfolioItem({
  index,
  portfolioItem,
  hoveringItem,
  setHoveringItem,
  setActiveItem,
}: Props) {
  const { title, description, role } = portfolioItem;

  /**
   * Renders the correct icon based on what the role of Sleek App was for the project
   * @param role string
   * @returns JSX.Element
   */
  const renderRoleIcon = (role: string): JSX.Element => {
    if (role.toLowerCase().includes("developer")) return <Code />;
    if (role.toLowerCase().includes("design")) return <BrushTwoTone />;
    if (
      role.toLowerCase().includes("writing") ||
      role.toLowerCase().includes("writer")
    )
      return <Keyboard />;
    return <></>;
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingLeft: 5,
        border: hoveringItem === index ? `1px solid ${yellow[500]}` : "none",
        borderRadius: 2,
        cursor: "pointer",
      }}
      onMouseEnter={() => setHoveringItem(index)}
      onMouseLeave={() => setHoveringItem(null)}
      onClick={() => setActiveItem(portfolioItem)}
    >
      <ListItemAvatar>
        <Avatar>{renderRoleIcon(role)}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={description}
        sx={{ textAlign: "right" }}
      />
    </ListItem>
  );
}

export default PortfolioItem;
