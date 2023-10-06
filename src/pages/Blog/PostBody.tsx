import React from "react";

// Components
import { Page } from "../../components";
import { Button } from "@mui/material";

interface Props {
  title: string;
  body: string;
  closePost(): void;
}

function PostBody({ title, body, closePost }: Props) {
  if (!body) return <></>;

  return (
    <Page>
      <Button onClick={() => closePost()}>Close</Button>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Page>
  );
}

export default PostBody;
