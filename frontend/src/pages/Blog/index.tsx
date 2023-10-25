import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { CircularProgress, IconButton, Alert } from "@mui/material";
import { Close } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Types
import { WPPost } from "../../types";

// Actions
import { fetchAgencyPosts, fetchTeamPosts } from "../../actions";

// Components
import PostPreview from "./PostPreview";
import PostBody from "./PostBody";
import { Page, MainHeading, Subheading } from "../../components";

// Styles
import { PreviewsList, ErrorWrapper } from "./index.styles";

function Blog() {
  // Hooks
  const mobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [agencyPosts, setAgencyPosts] = useState<WPPost[]>([]);
  const [teamPosts, setTeamPosts] = useState<WPPost[]>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<WPPost | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setFetchLoading(true);
        const agencyResponse = await fetchAgencyPosts();
        const teamResponse = await fetchTeamPosts();
        setFetchLoading(false);
        setAgencyPosts(agencyResponse || []);
        setTeamPosts(teamResponse || []);
      } catch (error) {
        setFetchLoading(false);
        setFetchError("Could not fetch blog posts");
      }
    };

    fetchBlogPosts();
  }, []);

  const renderAgencyBlogPosts = (): JSX.Element[] => {
    if (!agencyPosts) return [];

    return agencyPosts.map((blogPost: WPPost) => (
      <PostPreview
        key={`agency-blog-post-preview-${blogPost.id}`}
        postDetails={blogPost}
        setActive={() => setActivePost(blogPost)}
        mobile={mobile}
      />
    ));
  };

  const renderTeamBlogPosts = (): JSX.Element[] => {
    if (!teamPosts) return [];

    return teamPosts.map((blogPost: WPPost) => (
      <PostPreview
        key={`team-blog-post-preview-${blogPost.id}`}
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

  const renderBlogPosts = (agency: boolean): JSX.Element => {
    return fetchError ? (
      <ErrorWrapper mobile={mobile || false}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                agency ? setFetchError(null) : setFetchError(null);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          {fetchError}
        </Alert>
      </ErrorWrapper>
    ) : (agency ? agencyPosts.length : teamPosts.length) ? (
      <>
        <Subheading sx={{ marginTop: 3 }}>
          {agency ? "By Sleek App" : "By Our Team Members"}
        </Subheading>
        <PreviewsList>
          {agency ? renderAgencyBlogPosts() : renderTeamBlogPosts()}
        </PreviewsList>
      </>
    ) : (
      <></>
    );
  };

  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sleek App - Blog</title>
        <meta
          name="description"
          content="Read blog posts written by Sleek App Development Agency and team members, from technical guides to industry insights to personal stories."
        />
      </Helmet>

      <MainHeading
        align="center"
        sx={mobile ? { ...headingColor, fontSize: 40 } : headingColor}
      >
        Blog
      </MainHeading>
      {fetchLoading ? (
        <div style={{ width: "100%", textAlign: "center", marginTop: 50 }}>
          <CircularProgress size={mobile ? 80 : 120} />
        </div>
      ) : (
        <>
          {renderBlogPosts(true)}
          {renderBlogPosts(false)}
        </>
      )}
    </Page>
  );
}

export default Blog;
