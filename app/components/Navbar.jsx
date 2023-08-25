import styles from "./Navbar.module.css";
import Image from "next/image";
import logoNav from "../assets/images/logoNavbar.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="logo">
          <Image src={logoNav} alt="" className={styles.imgLogo} />
        </div>
        <div className={styles.connectionLinks}>
          <Link className={styles.register} href="/register">register</Link>
          <h3>/</h3>
          <Link className={styles.login} href="/login">login</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
