"use client";
import { CustomImage } from "@/components/image/CustomImage";
import Image from "next/image";
import Link from "next/link";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiYoutube,
} from "react-icons/ci";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

interface Props {
  logoUrl: string | undefined | null;
  siteName: string | undefined | null;
  facebookUrl: string | undefined | null;
  twitterUrl: string | undefined | null;
  instagramUrl: string | undefined | null;
  linkedinUrl: string | undefined | null;
  youtubeUrl: string | undefined | null;
  tiktokUrl: string | undefined | null;
  siteColor: string | undefined | null;
  siteColorText: string | undefined | null;
}

export default function TopMenu({
  logoUrl,
  siteName,
  facebookUrl,
  twitterUrl,
  instagramUrl,
  linkedinUrl,
  youtubeUrl,
  tiktokUrl,
  siteColor,
  siteColorText,
}: Props) {
  const colorText = siteColorText || "#FFFFFF";

  return (
    <nav
      id="topnav"
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/10 shadow-md transition-all duration-300"
      style={{ backgroundColor: siteColor || "rgba(0,0,0,0.6)" }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 flex-col sm:flex-row">
        {/* Logo y Nombre del sitio */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <Link className="logo" href="/">
            <CustomImage
              src={logoUrl!}
              width={60}
              height={60}
              className="rounded-lg"
              alt={siteName ? siteName : "Logo"}
            />
          </Link>
          <h1
            className="text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-sm"
            style={{ color: colorText }}
          >
            {siteName ? siteName : "Nombre del sitio"}
          </h1>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Facebook */}
          {facebookUrl && (
            <Link
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Visitar nuestra página de Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <CiFacebook size={22} style={{ color: colorText }} />
            </Link>
          )}

          {/* Twitter */}
          {twitterUrl && (
            <Link
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Visitar nuestro perfil de X (Twitter)"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <FaXTwitter size={20} style={{ color: colorText }} />
            </Link>
          )}

          {/* Instagram */}
          {instagramUrl && (
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Visitar nuestro perfil de Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <CiInstagram size={22} style={{ color: colorText }} />
            </Link>
          )}

          {/* LinkedIn */}
          {linkedinUrl && (
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="Visitar nuestro perfil de LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <CiLinkedin size={22} style={{ color: colorText }} />
            </Link>
          )}

          {/* YouTube */}
          {youtubeUrl && (
            <Link
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="Visitar nuestro canal de YouTube"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <CiYoutube size={22} style={{ color: colorText }} />
            </Link>
          )}

          {/* TikTok */}
          {tiktokUrl && (
            <Link
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="Visitar nuestro perfil de TikTok"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <FaTiktok size={20} style={{ color: colorText }} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
