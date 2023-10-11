import Image from "next/image";
import React, { Fragment, useState } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
// import { getAllUsers } from "../lib/user";
import { Quicksand } from "next/font/google";
import { Transition } from "@headlessui/react";
import Layout from "./shared/Layout/Layout";
const quicksand = Quicksand({ subsets: ["latin"] });

const Home = (props) => {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <Layout>
      <div className="w-screen h-5/6">
        <div className="bg-cover bg-bottom h-5/6 w-screen bg-no-repeat bg-[url(../public/images/bg1.jpg)]">
          <div className="flex flex-col items-center w-screen backdrop-brightness-50 bg-gray/70 h-5/6">
            <div className="px-20 py-40 text-center ">
              {/* <div className="w-32 h-32"> */}
              <Transition
                as={Fragment}
                show={isShowing}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                // leave="transform duration-200 transition ease-in"
                // leaveFrom="opacity-50 rotate-0 scale-100 "
                // leaveTo="opacity-100 scale-95 "
              >
                <h1 className="text-6xl font-bold text-white opacity-100">
                  Welcome to Prelo!
                </h1>
              </Transition>
              {/* </div> */}

              <div className={quicksand.className}>
                <p className="mt-10 text-2xl leading-8 text-white ">
                  The place where preloved treasures find a new home
                </p>
              </div>

              <div className="pt-10">
                <button
                  onClick={() => {
                    setIsShowing(!isShowing);
                  }}
                  className="w-auto px-5 py-2 text-2xl tracking-wide text-white rounded-md bg-primary hover:bg-primaryLight"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-white h-1/2">
        <div className="px-20 py-40 ">
          <h3 className="mb-10 text-3xl font-bold text-center text-black">
            Our Team
          </h3>
          <div className="flex flex-row justify-center gap-10">
            <div>
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/images/team/Ivory.jpg"
                  alt="Image of Ivory"
                  width={200}
                  height={200}
                  className="top-0 left-0 object-cover w-full h-full "
                />
              </div>
              <h3 className="mt-5 text-3xl font-medium text-center text-secondaryDark">
                Ivory
              </h3>
            </div>
            <div>
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/images/team/Ivy.png"
                  alt="Image of Ivory"
                  width={200}
                  height={200}
                  className="top-0 left-0 object-cover w-full h-full "
                />
              </div>
              <h3 className="mt-5 text-3xl font-medium text-center text-secondaryDark">
                Ivy
              </h3>
            </div>
            <div>
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/images/team/Voo.png"
                  alt="Image of Ivory"
                  width={200}
                  height={200}
                  className="top-0 left-0 object-cover w-full h-full "
                />
              </div>
              <h3 className="mt-5 text-3xl font-medium text-center text-secondaryDark">
                Voo
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ req }) => {
  // const users = await getAllUsers();
  // Convert the updatedAt and createdAt in each user to string
  // Otherwise, Next.js will throw an error
  // Not required if you are not using the date fields
  // const updatedUsers = users.map((user) => ({
  //   ...user,
  //   updatedAt: user.updatedAt.toString(),
  //   createdAt: user.createdAt.toString(),
  // }));
  // const imageListRef = ref(storage, "images/team/");
  // const allTeam = await listAll(imageListRef)
  // .then((response) => Promise.all(response.items.map(getDownloadURL)))
  // .then((urls) => {
  //   return urls;
  // })
  // .catch((error) => {
  //   console.error('Error getting image URLs:', error);
  //   return [];
  // });
  // return { props: { users: updatedUsers } };
};

export default Home;
