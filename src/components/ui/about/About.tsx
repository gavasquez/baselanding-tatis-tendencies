'use client';
import { CustomImage } from '@/components/image/CustomImage';
import ContenidoDynamico from '../admin/contenido/DynamicContent';
interface Props {
  about: {
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
  } | null | undefined;
  textColor: string;

}

export default function About({ about, textColor }: Props) {

  const { title = '', description = '', imageUrl } = about || {};

  return (
    <div className="container relative py-12 md:py-2">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-12">

        {/* Imagen */}
        <div className="md:col-span-5">
          <div className="relative group">
            <CustomImage
              src={imageUrl ? imageUrl : "/uploads/no-image.jpg"}
              width={600}
              height={600}
              className="mx-auto rounded-2xl shadow-lg transform transition duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              alt={title ? title : "Imagen sobre nosotros"}
            />
            {/* Decoración de fondo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>

        {/* Texto */}
        <div className="md:col-span-7">
          <div className="lg:ms-6 space-y-6">
            <h4
              className="text-3xl lg:text-5xl font-bold tracking-tight leading-snug"
              style={{ color: textColor === "#ffffff" ? "#000" : textColor }}
            >
              {title ? title : "Título sobre nosotros"}
            </h4>
            <div className="max-w-2xl text-lg text-gray-700 leading-relaxed">
              <ContenidoDynamico
                text={description ? description : "Contenido sobre nosotros"}
                colorText="#212020"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};