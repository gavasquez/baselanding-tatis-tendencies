import type { Service } from './Service';
import Image from 'next/image';
import ContenidoDynamico from '../admin/contenido/DynamicContent';

interface Props {
  siteColor: string | undefined | null;
  service: Service;
}

export default function ServicesGrid( { service, siteColor }: Props ) {

  const { title, description, mediaUrl } = service;

  return (
    <div
      className="p-6 transition duration-500 rounded-2xl mt-6 hover:shadow-2xl hover:transition-shadow hover:scale-105 hover:shadow-slate-900/50"
    >
      <div className="flex justify-center items-center">
          <div className="w-48 h-48 bg-indigo-600/5 rounded-xl text-3xl flex justify-center items-center shadow-sm shadow-gray-800">
            { mediaUrl &&
              <Image
                src={ mediaUrl ? mediaUrl : '/uploads/no-image.jpg' }
                alt={ title }
                width={ 192 }
                height={ 192 }
                className="w-full h-full object-cover rounded-xl"
              />
            }
          </div>
        </div>


      <div className="content mt-7">
        <p className="title h5 text-lg font-medium hover:text-indigo-600">{ title }</p>
        <div className="mt-3">
          <ContenidoDynamico text={ description ? description : 'Contenido del servicio' } colorText={ '#212020' } />
        </div>
      </div>
    </div>
  );
}