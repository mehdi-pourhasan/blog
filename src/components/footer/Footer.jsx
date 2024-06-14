import React from "react";
import Image from "next/image";
import classes from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.logo}>
          <Image src="/logo.png" alt="lama logo" width={50} height={50} />
          <h1 className={classes.logoText}>LamaBlog</h1>
        </div>
        <p className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed
          distinctio ea nisi reprehenderit unde quod quis a dolor sapiente. Non
          saepe pariatur aut tempora eaque iste odio cumque atque nemo dolorem
          accusamus esse, quasi veniam adipisci? Natus vel sunt illo debitis
          nemo ut pariatur?
        </p>
        <div className={classes.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>

      <div className={classes.links}>
        <div className={classes.list}>
          <span className={classes.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={classes.list}>
          <span className={classes.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={classes.list}>
          <span className={classes.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktiok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
