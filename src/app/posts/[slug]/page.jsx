import React from "react";
import classes from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get categories");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.textContainer}>
          <h1 className={classes.title}>{data.title} </h1>
          <div className={classes.user}>
            <div className={classes.userImageContainer}>
              <Image
                src={data?.user?.image || `/p1.jpeg`}
                alt={data.title}
                fill
                className={classes.avatar}
              />
            </div>
            <div className={classes.userTextContainer}>
              <span className={classes.username}>{data?.user.name}</span>
              <span className={classes.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src={data?.img || `/p1.jpeg`}
            alt={data.title}
            fill
            className={classes.image}
          />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.post}>
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={classes.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
