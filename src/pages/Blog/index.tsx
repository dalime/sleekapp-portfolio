import React, { useState, useEffect } from "react";

// Types
import { WPPost } from "../../types";

// Actions
import { fetchBlogPosts } from "../../actions";

// Components
import PostPreview from "./PostPreview";
import PostBody from "./PostBody";
import { Page } from "../../components";

// Styles
import { PreviewsList } from "./index.styles";

function Blog() {
  const [blogPosts, setBlogPosts] = useState<WPPost[]>([]);
  const [activePost, setActivePost] = useState<WPPost | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetchBlogPosts();
      setBlogPosts(response || []);
    };

    fetchPosts();
  }, []);

  const renderBlogPosts = (): JSX.Element[] => {
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
      <h1>Blog</h1>
      {blogPosts.length && <PreviewsList>{renderBlogPosts()}</PreviewsList>}
    </Page>
  );
}

export default Blog;
