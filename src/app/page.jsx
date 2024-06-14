import React from "react";
import classes from "./homepage.module.css";
import Featured from "@/components/Featured/Featured";
import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/CategoryList/CategoryList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={classes.container}>
      <Featured />
      <CategoryList />
      <div className={classes.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
