import ContenidoDynamico from '../admin/contenido/DynamicContent';

interface Props {
  siteColor: string | undefined | null;
  parallax: {
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
  } | null | undefined;
}
export default function Parallax({ parallax, siteColor }: Props) {

  const { title = '', description = '', imageUrl } = parallax || {};

  return (
    <section
      className="relative w-full bg-fixed bg-center bg-no-repeat bg-cover py-24 md:py-32"
      style={{
        backgroundImage: imageUrl
          ? `url(${imageUrl})`
          : `url(/images/${imageUrl})`,
      }}
    >
      {/* Overlay degradado elegante */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-6 text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg animate-fadeInUp">
            {title || "Título del Parallax"}
          </h3>

          <div className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed animate-fadeInUp delay-200">
            <ContenidoDynamico
              text={
                description
                  ? description
                  : "Descripción del parallax"
              }
              colorText="#FFFFFFCC"
            />
          </div>

        </div>
      </div>
    </section>
  );
}