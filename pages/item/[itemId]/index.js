import React from "react";
import { getAllItems } from "../../lib/item";

export const getServerSideProps = async ({ req }) => {
  const items = await getAllItems();

  return { props: { users: updatedUsers } };
};

const Homepage = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Homepage;
