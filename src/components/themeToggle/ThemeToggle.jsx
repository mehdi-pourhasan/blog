"use client";
import React, { useContext } from "react";
import classes from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={classes.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon icon" width={14} height={14} />
      <div
        className={classes.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#01f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun icon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
