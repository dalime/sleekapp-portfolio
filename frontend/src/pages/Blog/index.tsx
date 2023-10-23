import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { CircularProgress, IconButton, Alert } from "@mui/material";
import { Close } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Types
import { WPPost } from "../../types";

// Actions
import { fetchBlogPosts } from "../../actions";

// Components
import PostPreview from "./PostPreview";
import PostBody from "./PostBody";
import { Page, MainHeading } from "../../components";

// Styles
import { PreviewsList, ErrorWrapper } from "./index.styles";

function Blog() {
  // Hooks
  const mobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [blogPosts, setBlogPosts] = useState<WPPost[]>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<WPPost | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setFetchLoading(true);
        const response = await fetchBlogPosts();
        console.log("response", response);
        setFetchLoading(false);
        setBlogPosts(response || []);
      } catch (error) {
        setFetchLoading(false);
        setFetchError("Could not fetch blog posts");
      }
    };

    fetchPosts();
  }, []);

  const renderBlogPosts = (): JSX.Element[] => {
    if (fetchLoading) return [<CircularProgress />];
    if (!blogPosts) return [];

    return blogPosts.map((blogPost: WPPost) => (
      <PostPreview
        key={`blog-post-preview-${blogPost.id}`}
        postDetails={blogPost}
        setActive={() => setActivePost(blogPost)}
        mobile={mobile}
      />
    ));
  };

  if (activePost)
    return (
      <PostBody
        title={activePost.title.rendered}
        body={activePost.content.rendered}
        closePost={() => setActivePost(null)}
      />
    );

  const headingColor = { color: yellow[300] };

  return (
    <Page>
      <MainHeading
        align="center"
        sx={mobile ? { ...headingColor, fontSize: 40 } : headingColor}
      >
        Blog
      </MainHeading>
      {fetchError ? (
        <ErrorWrapper mobile={mobile}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setFetchError(null);
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
          >
            {fetchError}
          </Alert>
        </ErrorWrapper>
      ) : fetchLoading ? (
        <div style={{ width: "100%", textAlign: "center", marginTop: 50 }}>
          <CircularProgress size={mobile ? 80 : 120} />
        </div>
      ) : blogPosts.length ? (
        <PreviewsList>{renderBlogPosts()}</PreviewsList>
      ) : (
        <></>
      )}
    </Page>
  );
}

export default Blog;
