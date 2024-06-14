"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  //   Might cause error because using localStorage
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }

  // <div class="light"> ☝️
  // <div class="container">
  // <div class="wrapper"></div>
};

export default ThemeProvider;
