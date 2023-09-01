"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logoNav from "../assets/images/logoNavbar.png";
import GoogleLogo from "@/public/logogoogle.png";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import Spinner from "./LoadingSpinner";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const [loader, setLoader] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      alert("Tu es déconnecté");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentification = async () => {
      await new Promise((resolve) => setTimeout(resolve, 60));
      setLoader(false);
    };
    checkAuthentification();
  }, [user]);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <div className={styles.logoDiv}>
            <Image
              src={logoNav}
              width={70}
              height={70}
              alt=""
              className={styles.imgLogo}
            />
          </div>
        </Link>

        {!user ? (
          <div className={styles.connectionLinks}>
            <Link className={styles.register} href="/signin">
              Inscription
            </Link>
            <p>/</p>
            <Link className={styles.login} href="/login">
              Connexion
            </Link>
          </div>
        ) : (
          <Link onClick={handleLogOut} className={styles.logOut} href="/">
            Deconnexion
          </Link>
        )}

        {loader ? (
          <Spinner />
        ) : !user ? (
          <>
            <div className={styles["btn-google"]}>
              <div className={styles["logo-google"]}>
                <Image src={GoogleLogo} width={25} height={25} alt="" />
              </div>
              <Link
                onClick={handleSignIn}
                className={styles.btnGoogle}
                href="/"
              >
                Connexion avec google
              </Link>
            </div>
            <p></p>
          </>
        ) : (
          <>
            <div className={styles["btn-googleOut"]}>
              <div className={styles["logo-google"]}>
                <Image src={GoogleLogo} width={25} height={25} alt="" />
              </div>
              <Link
                onClick={handleLogOut}
                className={styles.btnGoogleOut}
                href="/"
              >
                déconnection
              </Link>
            </div>
            <div className={styles["infos-google"]}>
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://www.gala.fr/imgre/fit/~1~gal~2022~11~03~3a8f53dd-e7b8-4033-9096-5b6e465cd886.jpeg/3578x3226/quality/80/georges-brassens.jpeg"
                }
                className={styles.imgAvatar}
                width={50}
                height={50}
                alt="avatar"
              />
              <p>Bonjour, {user.displayName ? user.displayName : user.email}</p>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
