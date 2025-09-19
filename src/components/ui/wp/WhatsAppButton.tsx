import { FaWhatsapp } from 'react-icons/fa';

interface Props {
  phoneNumber: string | null | undefined;
  message: string;
}

export const WhatsAppButton = ({ phoneNumber, message }: Props) => {

  const whatsappLink = `https://wa.me/57${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (!phoneNumber) {
    return null;
  }

  return (
    <div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '20px',
          zIndex: 1000,
        }}
        aria-label="Enviar mensaje por WhatsApp"
        title="Enviar mensaje por WhatsApp"
      >
        <button
          className='animate-pulse'
          style={{
            padding: '10px 10px',
            backgroundColor: '#25D366',
            color: 'white',
            borderRadius: '100%',
            border: 'none',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}
          aria-label="Botón de WhatsApp"
          role="button"
        >
          <FaWhatsapp size={35} />
        </button>
      </a>
    </div>
  );
};