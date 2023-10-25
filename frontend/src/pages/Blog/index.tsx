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

  const marginTopStyle = { marginTop: 3 };

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
        <Subheading
          sx={
            mobile
              ? {
                  ...marginTopStyle,
                  fontSize: 26,
                  marginLeft: 2,
                  marginRight: 2,
                }
              : marginTopStyle
          }
        >
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
        <title>Agency Blog - Sleek App</title>
        <meta
          name="description"
          content="Sleek App's agency blog that talks about trends in multiple industries, best practices, and new solutions to emerging problems."
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://sleekapp.io/blog/" />
        <meta name="generator" content="All in One SEO (AIOSEO) 4.3.6.1 " />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Sleek App - Turning visions into reality"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Agency Blog - Sleek App" />
        <meta
          property="og:description"
          content="Sleek App's agency blog that talks about trends in multiple industries, best practices, and new solutions to emerging problems."
        />
        <meta property="og:url" content="https://sleekapp.io/blog/" />
        <meta
          property="og:image"
          content="https://sleekapp.io/wp-content/uploads/2023/06/cropped-Sleek-App-LLC-01.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://sleekapp.io/wp-content/uploads/2023/06/cropped-Sleek-App-LLC-01.jpg"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="article:tag" content="agency blog" />
        <meta property="article:tag" content="blog" />
        <meta property="article:tag" content="developer blog" />
        <meta
          property="article:published_time"
          content="2023-08-08T17:37:41+00:00"
        />
        <meta
          property="article:modified_time"
          content="2023-08-08T18:11:51+00:00"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Agency Blog - Sleek App" />
        <meta
          name="twitter:description"
          content="Sleek App's agency blog that talks about trends in multiple industries, best practices, and new solutions to emerging problems."
        />
        <meta
          name="twitter:image"
          content="https://sleekapp.io/wp-content/uploads/2023/06/cropped-Sleek-App-LLC-01.jpg"
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
