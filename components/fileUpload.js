import { useForm } from "react-hook-form";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import { v4 } from "uuid";
import { useState, useEffect } from "react";
import Image from "next/image";

const FileUpload = () => {
  const { register, handleSubmit } = useForm();
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");
  const onSubmit = (data) => {
    const imageUpload = data.image[0];
    console.log("file", imageUpload);
    if (imageUpload === null) return;
    const imageRef = ref(storage, `/images/team/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) =>
        setImageList((prev) => [...prev, url])
      );
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) =>
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
            console.log('url', url)
          setImageList((prev) => [...prev, url]);
        });
      })
    );
  }, []);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("image")} type="file" />
      <button
        className="mb-3 rounded-lg border-2 border-primary bg-white py-1 px-2"
        type="submit"
      >
        Upload image
      </button>
    </form>

     <div className="bg-gray-100 max-w-lg max-h-full my-10 container rounded-xl p-10">
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
      </div>
      </>
  );
};

export default FileUpload;
