import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>       
          <div className="social-network">
            <Link href="https://www.linkedin.com/in/alexandre-hontcharouk-879b71b9/" target='_blank' >
              <IconBrandLinkedin size={22} color="#0e76a8" />
            </Link>
            <Link href="https://alexwebdevlyon.netlify.app" target='_blank'>
              Mon CV intéractif
            </Link>
          </div>
          <p>
            Créé par
            <Link href="https://github.com/widmaker666" target='_blank'>
            Alexandre Hontcharouk
            </Link>
          </p>
          <p> Tous droits réservés à Alexandre Hontcharouk </p>        
      </footer>
    </>
  );
};

export default Footer;