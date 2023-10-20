import React from "react";

// Types
import { WPPost } from "../../types";

// Components
import { Subheading } from "../../components";

// Styles
import { PreviewWrapper } from "./index.styles";

interface Props {
  postDetails: WPPost;
  setActive(): void;
  mobile: boolean;
}

function PostPreview({ postDetails, setActive, mobile }: Props) {
  const { title, excerpt, x_featured_media_medium } = postDetails;

  return (
    <PreviewWrapper onClick={() => setActive()}>
      <Subheading sx={mobile ? { fontSize: 30 } : {}}>
        {title.rendered}
      </Subheading>
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
