import { Fragment } from "react";
import Layout from "../components/shared/Layout/Layout";
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
