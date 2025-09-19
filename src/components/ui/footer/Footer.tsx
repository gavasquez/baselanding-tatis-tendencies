import { truncateDescription } from '@/utils/truncateDescripcion';
import Image from 'next/image';
import Link from 'next/link';
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from 'react-icons/ci';
import { FaTiktok, FaXTwitter } from 'react-icons/fa6';
import ContenidoDynamico from '../admin/contenido/DynamicContent';

interface Props {
  id: string | undefined | null;
  siteName: string | undefined | null;
  logoUrl: string | undefined | null;
  description: string | undefined | null;
  facebookUrl: string | undefined | null;
  twitterUrl: string | undefined | null;
  instagramUrl: string | undefined | null;
  linkedinUrl: string | undefined | null;
  youtubeUrl: string | undefined | null;
  tiktokUrl: string | undefined | null;
  siteColor: string | undefined | null;
  siteColorText: string | undefined | null;
  policyPrivacyText: string | undefined | null;
  footer: {
    id: string;
    address: string;
    phoneNumber: string;
    map_iframe: string | undefined | null;
    createdAt: Date;
    updatedAt: Date;
  } | null;
}

export default function Footer({ id, siteName, logoUrl, footer, description, facebookUrl, twitterUrl, instagramUrl, linkedinUrl, youtubeUrl, tiktokUrl, siteColor, siteColorText, policyPrivacyText }: Props) {

  const { address = '', phoneNumber = '', map_iframe = '' } = footer || {};
  const colorText = siteColorText || '#FFFFFF';
  const descripcionSite = description ? description : 'Descripción de la web';

  return (
    <div>
      <footer
        className="relative bg-slate-900 text-gray-200"
        style={{ backgroundColor: siteColor || "#000" }}
      >
        <div className="container relative py-14 md:py-10">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-12">
            {/* Logo + descripción */}
            <div className="lg:col-span-4 md:col-span-12 flex flex-col space-y-5">
              <div className="flex items-center space-x-4">
                <Link href="/#" className="focus:outline-none">
                  <Image
                    src={logoUrl ? logoUrl : "/uploads/favicon.ico"}
                    width={64}
                    height={64}
                    alt={description ? description : "Logo de la web"}
                  />
                </Link>
                <h1
                  className="text-2xl md:text-3xl font-bold tracking-wide"
                  style={{ color: colorText }}
                >
                  {siteName ? siteName : "Nombre del sitio"}
                </h1>
              </div>
              <p className="text-base leading-relaxed" style={{ color: colorText }}>
                <ContenidoDynamico text={descripcionSite!} colorText={colorText} />
              </p>
            </div>

            {/* Dirección y contacto */}
            <div className="lg:col-span-4 md:col-span-6 flex flex-col justify-center items-center text-center space-y-4">
              <h6
                className="text-lg font-semibold"
                style={{ color: colorText }}
              >
                📍 {address || "No se ha cargado ninguna dirección"}
              </h6>
              <h6
                className="text-lg font-semibold"
                style={{ color: colorText }}
              >
                ☎ +57 {phoneNumber || "No se ha cargado ningún número"}
              </h6>
            </div>

            {/* Mapa con marcador centrado */}
            <div className="lg:col-span-4 md:col-span-6">
              {map_iframe && (
                <div
                  className="relative w-full h-[280px] md:h-[260px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-700"
                  dangerouslySetInnerHTML={{
                    __html: map_iframe.replace(/&zoom=\d+/, "&zoom=15"),
                  }}
                ></div>
              )}
            </div>
          </div>

          {/* Redes sociales */}
          {/* Redes sociales */}
          <div className="flex justify-center items-center mt-12 gap-6 flex-wrap">
            {facebookUrl && (
              <Link
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Visitar nuestra página de Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <CiFacebook size={20} style={{ color: colorText }} />
              </Link>
            )}
            {twitterUrl && (
              <Link
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Visitar nuestro perfil de Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <FaXTwitter size={18} style={{ color: colorText }} />
              </Link>
            )}
            {instagramUrl && (
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Visitar nuestro perfil de Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <CiInstagram size={20} style={{ color: colorText }} />
              </Link>
            )}
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="Visitar nuestro perfil de LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <CiLinkedin size={20} style={{ color: colorText }} />
              </Link>
            )}
            {youtubeUrl && (
              <Link
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="Visitar nuestro canal de YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <CiYoutube size={20} style={{ color: colorText }} />
              </Link>
            )}
            {tiktokUrl && (
              <Link
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="Visitar nuestro perfil de TikTok"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <FaTiktok size={18} style={{ color: colorText }} />
              </Link>
            )}
          </div>

          {/* Política de privacidad */}
          {policyPrivacyText && (
            <div className="flex justify-center mt-8">
              <Link
                href={`/policy-privacy/${id}`}
                className="text-sm underline underline-offset-4 hover:text-gray-300 transition"
                style={{ color: colorText }}
                target="_blank"
              >
                Política de privacidad
              </Link>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div
          className="py-6 border-t border-slate-700 text-center text-sm"
          style={{ borderColor: colorText }}
        >
          <Link href="https://narvaldreams.com" target="_blank">
            <p style={{ color: colorText }}>
              © {new Date().getFullYear()} Agencia de desarrollo web NarvalDreams{" "}
              <i className="mdi mdi-heart text-red-600"></i>
            </p>
          </Link>
        </div>
      </footer>
    </div>

  );
}