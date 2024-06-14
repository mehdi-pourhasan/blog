"use client";
import React, { useState } from "react";
import classes from "./AuthLink.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="login" className={classes.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={classes.link}>
            Write
          </Link>
          <span className={classes.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={classes.burger} onClick={() => setOpen(!open)}>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>

      {open && (
        <div className={classes.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={classes.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
