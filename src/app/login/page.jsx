"use client";
import React from "react";
import classes from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={classes.loading}>Please wait</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={classes.socialButton}>Sign in with Github</div>
        <div className={classes.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
