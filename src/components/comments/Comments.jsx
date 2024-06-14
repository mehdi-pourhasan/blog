"use client";

import React, { useState } from "react";
import classes from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSwr from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  // Temp
  const { status } = useSession();

  const { data, mutate, isLoading } = useSwr(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmitComment = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={classes.writer}>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            name="comment"
            id="comment"
            rows="5"
            placeholder="Write a comment ..."
            className={classes.input}
          />
          <button className={classes.button} onClick={handleSubmitComment}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={classes.comments}>
        {isLoading
          ? "loading"
          : data.map((item) => (
              <div className={classes.comment} key={item._id}>
                <div className={classes.user}>
                  <Image
                    src={item.user.image || `/p1.jpeg`}
                    alt=""
                    width={50}
                    height={50}
                    className={classes.image}
                  />
                  <div className={classes.userInfo}>
                    <span className={classes.username}>{item.user.name}</span>
                    <span className={classes.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={classes.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
