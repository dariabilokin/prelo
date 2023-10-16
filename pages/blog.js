import { Fragment } from "react";

const Blog = () => {
  return (
    <Fragment>
      <h3>Blog Page</h3>
    </Fragment>
  );
};

Blog.getLayout = (page) => {
  return (
    <Layout meta={{ title: "Blog", description: "Blog page" }}>{page}</Layout>
  );
};
export default Blog;
