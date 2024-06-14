"use client";
import React from "react";
import classes from "./pagination.module.css";
import { useRouter } from "next/navigation";
const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <button
        className={classes.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={classes.button}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
