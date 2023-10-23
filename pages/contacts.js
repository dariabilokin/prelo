import { Fragment } from "react";
import Layout from "../components/shared/Layout/Layout";
const Contacts = () => {
  return (
    <Fragment>
      <h3>Contacts Page</h3>
    </Fragment>
  );
};

Contacts.getLayout = (page) => {
  return (
    <Layout meta={{ title: "Contacts", description: "Contacts page" }}>
      {page}
    </Layout>
  );
};
export default Contacts;
