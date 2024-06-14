import React from "react";
import classes from "./menuPosts.module.css";
import Image from "next/image";
import Link from "next/link";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={classes.items}>
      <Link href="/" className={classes.item}>
        {withImage && (
          <div className={classes.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={classes.image} />
          </div>
        )}
        <div className={classes.textContainer}>
          <span className={`${classes.category} ${classes.travel}`}>
            Travel
          </span>
          <h3 className={classes.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={classes.detail}>
            <span className={classes.username}>Jhon Doe</span>
            <span className={classes.date}> - 11.04.2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={classes.item}>
        {withImage && (
          <div className={classes.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={classes.image} />
          </div>
        )}
        <div className={classes.textContainer}>
          <span className={`${classes.category} ${classes.culture}`}>
            Culture
          </span>
          <h3 className={classes.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={classes.detail}>
            <span className={classes.username}>Jhon Doe</span>
            <span className={classes.date}> - 11.04.2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={classes.item}>
        {withImage && (
          <div className={classes.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={classes.image} />
          </div>
        )}
        <div className={classes.textContainer}>
          <span className={`${classes.category} ${classes.food}`}>Food</span>
          <h3 className={classes.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={classes.detail}>
            <span className={classes.username}>Jhon Doe</span>
            <span className={classes.date}> - 11.04.2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={classes.item}>
        {withImage && (
          <div className={classes.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={classes.image} />
          </div>
        )}
        <div className={classes.textContainer}>
          <span className={`${classes.category} ${classes.fashion}`}>
            Fashion
          </span>
          <h3 className={classes.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={classes.detail}>
            <span className={classes.username}>Jhon Doe</span>
            <span className={classes.date}> - 11.04.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
