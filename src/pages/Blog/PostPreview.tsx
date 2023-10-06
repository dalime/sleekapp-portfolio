import React from "react";

// Types
import { WPPost } from "../../types";

// Styles
import { PreviewWrapper } from "./index.styles";

interface Props {
  postDetails: WPPost;
  setActive(): void;
}

function PostPreview({ postDetails, setActive }: Props) {
  const { title, excerpt, x_featured_media_medium } = postDetails;

  return (
    <PreviewWrapper onClick={() => setActive()}>
      <h1>{title.rendered}</h1>
      {x_featured_media_medium && (
        <img
          src={x_featured_media_medium}
          alt={`Featured media for post ${title}`}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
    </PreviewWrapper>
  );
}

export default PostPreview;
