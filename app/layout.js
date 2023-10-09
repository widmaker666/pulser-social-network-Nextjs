import { AuthContextProvider } from "@/app/context/AuthContext";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Karla } from "next/font/google";
import Head from "next/head";
import logo from "./assets/images/logo.png"


const karla = Karla({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "PulseR - Le Réseau Social Intellectuel !",
  description:
    "PulseR est une plateforme sociale innovante pour se connecter, partager et interagir.",
  keywords:
    "réseau social, PulseR, plateforme sociale, Next.js, développement web",
  ogTitle: "PulseR - Le Réseau Social Intellectuel",
  ogDescription:
    "PulseR est une plateforme sociale innovante pour se connecter, partager et interagir.",
  ogImage: "./assets/images/logo.png", // Lien vers votre image de préférence (1200x630 pixels pour une bonne qualité)
  ogURL: "https://pulser-social-network-nextjs.vercel.app", // URL de votre page principale
  twitterTitle: "PulseR - Le Réseau Social Intellectuel",
  twitterDescription:
    "PulseR est une plateforme sociale innovante pour se connecter, partager et interagir.",
  twitterImage: "./assets/images/logo.png", // Lien vers votre image de préférence (1200x630 pixels pour une bonne qualité)
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogURL} />
        <meta name="twitter:title" content={metadata.twitterTitle} />
        <meta
          name="twitter:description"
          content={metadata.twitterDescription}
        />
        <meta name="twitter:image" content={metadata.twitterImage} />
        <link rel="icon" href={metadata.favicon} />
      </Head>
      <body className={karla.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
