import React from "react";
import { useMediaQuery } from "react-responsive";
import { ArrowBack } from "@mui/icons-material";

// Components
import { Page } from "../../components";
import { Button } from "@mui/material";

// Styles
import "./index.css";

interface Props {
  title: string;
  body: string;
  closePost(): void;
}

function PostBody({ title, body, closePost }: Props) {
  const isTablet = useMediaQuery({ maxWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmallMobile = useMediaQuery({ maxWidth: 380 });

  const sidePadding: string | number = isSmallMobile
    ? 30
    : isMobile
    ? 40
    : isTablet
    ? "5%"
    : "7%";

  if (!body) return <></>;

  return (
    <Page>
      <div
        style={{
          paddingLeft: sidePadding,
          paddingRight: sidePadding,
          paddingBottom: 30,
          paddingTop: 20,
        }}
      >
        <Button onClick={() => closePost()}>
          <ArrowBack style={{ marginRight: 10 }} />
          Back to Blog Posts
        </Button>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </Page>
  );
}

export default PostBody;
