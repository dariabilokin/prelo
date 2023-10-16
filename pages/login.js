import React from "react";
import Layout from "../components/shared/Layout/Layout";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96 ">
        <h2 className="mb-8 text-2xl font-bold">Login</h2>
        <form>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-full mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="w-full mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none "
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full px-4 py-2 mt-2 text-white rounded bg-primary hover:bg-primaryLight focus:outline-none focus:bg-primaryDark"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
Login.getLayout = (page) => {
  return (
    <Layout meta={{ title: "Login", description: "Login page" }}>{page}</Layout>
  );
};
export default Login;
