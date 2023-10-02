import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { Code, BrushTwoTone, Keyboard } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Types
import { PortfolioItemInterface } from "../../types";

// Components
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import { Wrapper, ProjectPreview, ProjectsList } from "./index.styles";

function Portfolio() {
  const [hoveringItem, setHoveringItem] = useState<number>(-1);

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

  const renderPortfolioItems = (): JSX.Element[] => {
    const item1 = process.env.REACT_APP_PORTFOLIO_ITEM_1 || null;
    const item2 = process.env.REACT_APP_PORTFOLIO_ITEM_2 || null;
    const item3 = process.env.REACT_APP_PORTFOLIO_ITEM_3 || null;
    const items = [];
    if (item1) items.push(item1);
    if (item2) items.push(item2);
    if (item3) items.push(item3);

    return items.map((item, index) => {
      if (!item) return <></>;
      const portfolioItem = JSON.parse(item) as PortfolioItemInterface;
      const { title, description, role } = portfolioItem;
      return (
        <ListItem
          key={`portfolio-list-item-${index}`}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingLeft: 5,
            border:
              hoveringItem === index ? `1px solid ${yellow[500]}` : "none",
            borderRadius: 2,
          }}
          onMouseEnter={() => setHoveringItem(index)}
          onMouseLeave={() => setHoveringItem(-1)}
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
    });
  };

  return (
    <Page>
      <Section padding={20}>
        <MainHeading align="center" style={{ marginBottom: 20 }}>
          Our Portfolio
        </MainHeading>
        <Wrapper>
          <ProjectPreview></ProjectPreview>
          <ProjectsList>
            <Subheading sx={{ paddingRight: 2, paddingTop: 2 }}>
              Projects
            </Subheading>
            <List dense={false} sx={{ width: "100%" }}>
              {renderPortfolioItems()}
            </List>
          </ProjectsList>
        </Wrapper>
      </Section>
    </Page>
  );
}

export default Portfolio;
