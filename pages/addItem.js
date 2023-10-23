import React from "react";
import { useState, useEffect } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";

const AddNewItem = ({ saleId }) => {
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = async (data) => {
    await fetch(`/api/item`, {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        price: +data.price,
        createdAt: new Date(),
        updatedAt: new Date(),
        photoUrl: imageList,
        saleId: saleId,
      }),
    });
    setImageList([]);
    setImageNames([]);
    reset();
  };
  const imageUploads = watch("image");
  // const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [imageNames, setImageNames] = useState([]);

  // const imageListRef = ref(storage, "images/");

  function uploadImage() {
    try {
      Object.values(imageUploads).map((imageUpload) => {
        if (imageUpload === null) return;
        setImageNames((prev) => [...prev, imageUpload.name]);
        const imageRef = ref(storage, `/images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageList((prev) => [...prev, url]);
          });
        });
      });
    } catch (e) {
      console.error("Error while image upload", e);
    }
  }

  // const hiddenFileInput = React.useRef(null);
  // const handleClick = (e) => {
  //   console.log(e);
  //   // hiddenFileInput.current.click();
  // };
  // const handleChange = (e) => {
  //   setImageUpload(e.target.files[0]);
  // };
  // useEffect(() => {
  //   listAll(imageListRef).then((response) =>
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     })
  //   );
  // }, []);

  return (
    <>
      <div className=" @container bg-white p-8 shadow-md rounded-xl">
        <h3 className="pb-3 text-lg font-medium">Add new item</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full px-3 py-2 border rounded border-secondaryDark focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block mb-2 font-bold text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price")}
              className="w-full px-3 py-2 border rounded border-secondaryDark focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="block mb-2 font-bold text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              className="w-full px-3 py-2 border rounded border-secondaryDark focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          {/* <div className="flex flex-row flex-wrap gap-2 "> */}
          <div className="mb-3">
            <label
              htmlFor="formFileMultiple"
              className="block mb-2 font-bold text-gray-700 "
            >
              Item photos
            </label>
            <div className="flex flex-row items-center justify-between">
              <div className="w-content">
                <input
                  {...register("image")}
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-secondaryDark bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>

              <button
                className="px-2 py-1 ml-4 tracking-wide text-gray-800 border-2 rounded-md cursor-pointer border-secondaryDark bg-secondaryDark hover:text-white focus:outline-none focus:shadow-outline"
                onClick={uploadImage}
                type="button"
              >
                Upload
              </button>
            </div>
            {/* </div> */}
          </div>
          {imageNames.length > 0 && (
            <ul className="mb-3">
              <h3>Uploaded Images:</h3>
              {imageNames.map((name, index) => {
                return (
                  <li key={index} className="py-1 text-sm text-black">
                    {name}
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-5 text-left">
            <button
              type="submit"
              className="px-4 py-2 font-medium tracking-wider text-white rounded-md bg-primary hover:bg-primaryLight focus:outline-none focus:shadow-outline"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddNewItem;
