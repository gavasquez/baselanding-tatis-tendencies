//export const revalidate = 30;
import { getDataPage } from '@/actions/information/get-information';
import { About, Contact, Parallax, Footer, Service, TopMenu, WhatsAppButton } from '@/components';
import ContenidoDynamico from '@/components/ui/admin/contenido/DynamicContent';
import ScrollButton from '@/components/ui/scroll/ScrollButton';
import Image from 'next/image';

export default async function Page() {

  const { siteSettings, hero, aboutUs, serviceSettings, services, parallax, footer } = await getDataPage();

  return (
    <>
      <TopMenu
        logoUrl={siteSettings?.siteLogoUrl}
        siteName={siteSettings?.siteName}
        facebookUrl={siteSettings?.facebookUrl}
        twitterUrl={siteSettings?.twitterUrl}
        instagramUrl={siteSettings?.instagramUrl}
        linkedinUrl={siteSettings?.linkedinUrl}
        youtubeUrl={siteSettings?.youtubeUrl}
        tiktokUrl={siteSettings?.tiktokUrl}
        siteColor={siteSettings?.siteColor}
        siteColorText={siteSettings?.siteColorText}
      />

      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero?.imageUrl || "/uploads/bg-video.png"})`,
        }}
      >
        {/* Overlay oscuro con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
            {hero?.title || "Titulo del Hero"}
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-200">
            <ContenidoDynamico
              text={hero?.content || "Contenido del Hero"}
              colorText="#FFFFFF"
            />
          </p>

          {/* Botón con la misma funcionalidad del segundo section */}
          <div className="mt-8 flex justify-center animate-fadeIn delay-300">
            <a
              href="#services"
              className="inline-block px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-110"
              style={{
                backgroundColor: siteSettings?.siteColor || "#eab308",
                color: siteSettings?.siteColorText || "#fff",
              }}
            >
              {hero?.textButton || "Explorar"}
            </a>
          </div>
        </div>

        {/* Indicador scroll */}
        <div className="absolute bottom-6 w-full flex justify-center">
          <span className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center p-2 animate-bounce">
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </span>
        </div>
      </section>


      <section className="relative md:py-24 py-16">

        {/* Sobre nosotros */}
        <About about={aboutUs} textColor={siteSettings?.siteColorText ? siteSettings?.siteColorText : '#000'} />


        {/* Servicios */}

        {
          services && <Service
            services={services}
            siteColor={siteSettings?.siteColor}
            title={serviceSettings?.generalTitle}
            description={serviceSettings?.generalDescription}
            mediaUrl={serviceSettings?.generalImageUrl}
            textColor={siteSettings?.siteColorText ? siteSettings?.siteColorText : '#000'}
          />
        }

        {/* Parallax */}
        <Parallax parallax={parallax} siteColor={siteSettings?.siteColor} />

        {/* Contact */}
        <Contact
          siteColor={siteSettings?.siteColor}
          siteColorText={siteSettings?.siteColorText ? siteSettings?.siteColorText : '#000'}
        />

      </section>
      {/* Footer */}

      <WhatsAppButton phoneNumber={footer?.phoneNumber} message="¡Hola! Quiero más información." />

      <Footer
        id={siteSettings?.id}
        siteName={siteSettings?.siteName}
        footer={footer}
        logoUrl={siteSettings?.siteLogoUrl}
        description={siteSettings?.description}
        facebookUrl={siteSettings?.facebookUrl}
        twitterUrl={siteSettings?.twitterUrl}
        instagramUrl={siteSettings?.instagramUrl}
        linkedinUrl={siteSettings?.linkedinUrl}
        youtubeUrl={siteSettings?.youtubeUrl}
        tiktokUrl={siteSettings?.tiktokUrl}
        siteColor={siteSettings?.siteColor}
        siteColorText={siteSettings?.siteColorText}
        policyPrivacyText={siteSettings?.policyPrivacyText}
      />

    </>
  );
}
