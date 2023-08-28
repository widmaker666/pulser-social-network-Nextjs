import styles from "./Navbar.module.css";
import Image from "next/image";
import logoNav from "../assets/images/logoNavbar.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
          <Link href="/">
        <div className={styles.logoDiv}>
          <Image src={logoNav} width={70} height={70} alt="" className={styles.imgLogo} />
        </div>
            </Link> 
        <div className={styles.connectionLinks}>
          <Link className={styles.register} href="/signin">Inscription</Link>
          <h3>/</h3>
          <Link className={styles.login} href="/login">Connexion</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
