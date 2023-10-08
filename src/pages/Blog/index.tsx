import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useMediaQuery } from "react-responsive";

// Types
import { WPPost } from "../../types";

// Actions
import { fetchBlogPosts } from "../../actions";

// Components
import PostPreview from "./PostPreview";
import PostBody from "./PostBody";
import { Page, MainHeading } from "../../components";

// Styles
import { PreviewsList } from "./index.styles";

function Blog() {
  const mobile = useMediaQuery({ maxWidth: 768 });

  const [blogPosts, setBlogPosts] = useState<WPPost[]>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [activePost, setActivePost] = useState<WPPost | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setFetchLoading(true);
      const response = await fetchBlogPosts();
      setFetchLoading(false);
      setBlogPosts(response || []);
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

  return (
    <Page>
      <MainHeading align="center">Blog</MainHeading>
      {fetchLoading ? (
        <div style={{ width: "100%", textAlign: "center", marginTop: 30 }}>
          <CircularProgress size={mobile ? 150 : 200} />
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
