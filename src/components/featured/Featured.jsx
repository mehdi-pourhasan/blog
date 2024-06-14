import React from "react";
import classes from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        <b>Hey LamaBlog is here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={classes.post}>
        <div className={classes.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="main icon"
            fill
            className={classes.image}
          />
        </div>
        <div className={classes.textContainer}>
          <h1 className={classes.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            totam!
          </h1>
          <p className={classes.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            amet distinctio facere tenetur suscipit tempora fuga praesentium
            doloremque quod, commodi quidem odio! Culpa architecto voluptates
            quibusdam deserunt quasi. Ullam omnis quidem recusandae maxime nobis
            accusantium provident doloribus? Ex, repellendus eum.
          </p>
          <button className={classes.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
