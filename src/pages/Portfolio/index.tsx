import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { Folder } from "@mui/icons-material";

// Components
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import { Wrapper, ProjectPreview, ProjectsList } from "./index.styles";

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function Portfolio() {
  const [dense] = useState<boolean>(false);
  const [secondary] = useState<boolean>(false);

  return (
    <Page>
      <Section padding={20}>
        <MainHeading align="center" style={{ marginBottom: 20 }}>
          Our Portfolio
        </MainHeading>
        <Wrapper>
          <ProjectPreview></ProjectPreview>
          <ProjectsList>
            <Subheading>Projects</Subheading>
            <List dense={dense} sx={{ width: "100%" }}>
              {generate(
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    width: "100%",
                    paddingLeft: 5,
                    border: "1px solid #ffffff",
                    borderRadius: 2,
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <Folder />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                    sx={{ textAlign: "right" }}
                  />
                </ListItem>
              )}
            </List>
          </ProjectsList>
        </Wrapper>
      </Section>
    </Page>
  );
}

export default Portfolio;
