import Image from "next/image";
import React from "react";
import Card from "../components/card/Card";
import Navigation from "../components/navigation/Navigation";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import { getAllUsers } from "../lib/user";

import { Quicksand } from 'next/font/google';
const quicksand = Quicksand({ subsets: ['latin'] });

const Homepage = ({ users }) => {
  return (
    <div>
      <div className=" h-5/6 w-screen ">
        <Navigation />
        <div className="bg-cover bg-bottom h-5/6 w-screen bg-no-repeat bg-[url(../public/images/bg1.jpg)]">
          <div className="backdrop-brightness-50	bg-gray/70 h-5/6 w-screen  items-center flex flex-col">
            <div className=" text-center py-40 px-20 ">
              <h1 className="text-white font-bold opacity-100 text-6xl">
               Welcome to Prelo!
              </h1>

              <div className={quicksand.className}>
                <p className=" leading-8 mt-10 text-white text-2xl">
                  The place where preloved treasures find a new home
                </p>
              </div>
              <div className="pt-10">
                <button className="text-white tracking-wide py-2 px-5 w-auto text-2xl rounded-md bg-primary  hover:bg-primaryLight">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-1/2 w-screen bg-white">
        <div className="py-40 px-20 ">
          <h3 className="text-center text-3xl font-bold text-black mb-10">
            Our Team
          </h3>
          <div className="flex flex-row justify-center gap-10">
            <div>
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/images/team/Ivory.jpg"
                  alt="Image of Ivory"
                  width={200}
                  height={200}
                  className="w-full h-full top-0 left-0 object-cover "
                />
              </div>
              <h3 className=" text-secondaryDark font-medium mt-5 text-3xl text-center">
                Ivory
              </h3>
            </div>
            <div>
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/images/team/Ivy.png"
                  alt="Image of Ivory"
                  width={200}
                  height={200}
                  className="w-full h-full top-0 left-0 object-cover "
                />
              </div>
              <h3 className=" text-secondaryDark font-medium mt-5 text-3xl text-center">
                Ivy
              </h3>
            </div>
            <div>
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/images/team/Voo.png"
                  alt="Image of Ivory"
                  width={200}
                  height={200}
                  className="w-full h-full top-0 left-0 object-cover "
                />
              </div>
              <h3 className=" text-secondaryDark font-medium mt-5 text-3xl text-center">
                Voo
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const users = await getAllUsers();

  // Convert the updatedAt and createdAt in each user to string
  // Otherwise, Next.js will throw an error
  // Not required if you are not using the date fields

  const updatedUsers = users.map((user) => ({
    ...user,
    updatedAt: user.updatedAt.toString(),
    createdAt: user.createdAt.toString(),
  }));
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

  return { props: { users: updatedUsers } };
};

export default Homepage;
