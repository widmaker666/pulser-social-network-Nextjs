import { AuthContextProvider } from "@/app/context/AuthContext";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Karla } from "next/font/google";

const karla = Karla({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "PulseR - Le Réseau Social Intellectuel",
  description:
    "PulseR est une plateforme sociale innovante pour se connecter, partager et interagir.",
  keywords:
    "réseau social, PulseR, plateforme sociale, Next.js, développement web",
  ogTitle: "PulseR - Le Réseau Social Intellectuel",
  ogDescription:
    "PulseR est une plateforme sociale innovante pour se connecter, partager et interagir.",
  ogImage: "https://zupimages.net/up/23/34/5uww.png", // Lien vers votre image de préférence (1200x630 pixels pour une bonne qualité)
  ogURL: "https://pulser-social-network-nextjs.vercel.app", // URL de votre page principale
  twitterTitle: "PulseR - Le Réseau Social Intellectuel",
  twitterDescription:
    "PulseR est une plateforme sociale innovante pour se connecter, partager et interagir.",
  twitterImage: "https://zupimages.net/up/23/34/5uww.png", // Lien vers votre image de préférence (1200x630 pixels pour une bonne qualité)
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={karla.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
