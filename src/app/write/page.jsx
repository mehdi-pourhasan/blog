"use client";

import React, { useEffect, useState } from "react";
import classes from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const WritePage = () => {
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={classes.loading}>Please wait</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmitPost = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });
    console.log(res);
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Title..."
        className={classes.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className={classes.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>

      <div className={classes.editor}>
        <button className={classes.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="Plus Icon" width={16} height={16} />
        </button>
        {open && (
          <div className={classes.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={classes.addButton}>
              <label htmlFor="image">
                <Image
                  src="/image.png"
                  alt="Plus Icon"
                  width={16}
                  height={16}
                />
              </label>
            </button>

            <button className={classes.addButton}>
              <Image
                src="/external.png"
                alt="Plus Icon"
                width={16}
                height={16}
              />
            </button>

            <button className={classes.addButton}>
              <Image src="/video.png" alt="Plus Icon" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          className={classes.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell us your story ..."
        />
      </div>

      <button className={classes.publish} onClick={handleSubmitPost}>
        Publish Post
      </button>
    </div>
  );
};

export default WritePage;
