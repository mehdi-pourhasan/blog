import React from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLink from "../authLink/AuthLink";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={classes.logo}>LamaBlog</div>
      <div className={classes.links}>
        <ThemeToggle />
        <Link href="/" className={classes.link}>
          Home
        </Link>
        <Link href="/" className={classes.link}>
          About
        </Link>
        <Link href="/" className={classes.link}>
          Contact
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
