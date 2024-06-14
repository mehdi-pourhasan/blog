import React from "react";
import Link from "next/link";
import classes from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={classes.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.style}`}
      >
        Style
      </Link>

      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.fashion}`}
      >
        fashion
      </Link>

      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.food}`}
      >
        food
      </Link>

      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.travel}`}
      >
        travel
      </Link>

      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.culture}`}
      >
        Culture
      </Link>

      <Link
        href="/blog?cat=style"
        className={`${classes.categoryItem} ${classes.coding}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
