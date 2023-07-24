import React from "react";
import { useState, useEffect } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import { v4 } from "uuid";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Navigation from "../components/navigation/Navigation";

const AddNewItem = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Perform form validation and submit data to backend

    // Reset form fields
    reset();
  };

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");

  function uploadImage() {
    console.log(imageUpload);
    if (imageUpload === null) return;
    const imageRef = ref(storage, `/images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) =>
        setImageList((prev) => [...prev, url])
      );
    });
  }
  const hiddenFileInput = React.useRef(null);

  const handleClick = (e) => {
    console.log(e);
    // hiddenFileInput.current.click();
  };
  const handleChange = (e) => {
    setImageUpload(e.target.files[0]);
  };
  useEffect(() => {
    listAll(imageListRef).then((response) =>
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      })
    );
  }, []);

  return (
    <>
      <div className=" @container bg-white p-8 shadow-md rounded-xl">
        <h3 className="text-lg font-medium py-3 mt-6">Add new item</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex flex-row flex-wrap gap-3 items-center">
            <div className=" flex flex-row flex-wrap gap-2">
              <div class="mb-3">
                <label
                  for="formFileMultiple"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Multiple files input example
                </label>
                <input
                  onChange={(e) => console.log(e.target.files)}
                  {...register("image")}
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>

              <span className="text-xs px-2">{imageUpload?.name}</span>
            </div>
          </div>
          <div>
            <button
              className="mb-3 rounded-lg border-2 border-primary bg-white py-1 px-2"
              onClick={uploadImage}
            >
              Upload image
            </button>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Item
          </button>
        </form>
      </div>
      {/* <div className="bg-gray-100 max-w-lg max-h-full my-10 container rounded-xl p-10">
        {imageList.map((url, index) => {
          return (
            <Image
              key={index}
              src={url}
              priority={true}
              alt={`Image of ${index}`}
              width={300}
              height={300}
              className="w-full h-full top-0 left-0 object-cover rounded-t-2xl "
            />
          );
        })}
      </div> */}
    </>
  );
};
export default AddNewItem;
