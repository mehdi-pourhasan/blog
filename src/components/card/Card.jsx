import React from "react";
import Image from "next/image";
import classes from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={classes.container} key={key}>
      <div className={classes.imageContainer}>
        <Image
          src={item.img || `/p1.jpeg`}
          alt={item.title}
          fill
          className={classes.image}
        />
      </div>

      <div className={classes.textContainer}>
        <div className={classes.detail}>
          <span className={classes.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={classes.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={classes.desc}>{item.desc}</p>
        <Link href={`/`} className={classes.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
