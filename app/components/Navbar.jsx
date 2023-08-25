import styles from "./navbar.module.css";
import Image from "next/image";
import logoNav from "../assets/images/logoNav.png";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="logo">
          <Image src={logoNav} alt="" className={styles.imgLogo} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
