import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import classes from "./cardList.module.css";
import Card from "../card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to get categories");
  }

  return res.json();
};
const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  const POST_PAGE_PAGE = 2;
  const hasPrev = POST_PAGE_PAGE * (page - 1) > 0;
  const hasNext = POST_PAGE_PAGE * (page - 1) + POST_PAGE_PAGE < count;

  return (
    <div className={classes.container}>
      <h1 className={classes.titles}>Recent Posts</h1>
      <div className={classes.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
