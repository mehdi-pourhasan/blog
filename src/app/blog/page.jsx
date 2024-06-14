import React from "react";
import classes from "./blogpage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{cat} Blog</h1>
      <div className={classes.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
