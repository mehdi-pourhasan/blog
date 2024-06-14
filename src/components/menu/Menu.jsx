import React from "react";
import classes from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.subtitle}>{"what's hot"}</h2>
      <h1 className={classes.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={classes.subtitle}>Discover by topic</h2>
      <h1 className={classes.title}>Categories</h1>
      <MenuCategories />

      <h2 className={classes.subtitle}>Chosen by the editor</h2>
      <h1 className={classes.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
