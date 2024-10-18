import React from "react";
import Image from "next/image";

interface ModalProps {
  closeModal: () => void;
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const Modal: React.FC<ModalProps> = ({
  id,
  imgSrc,
  title,
  description,
  date,
  link,
  closeModal,
}) => {
  return (
    <article
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black-color bg-opacity-50 transition-opacity duration-300 ${
        id ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative bg-white p-4 w-full max-w-lg md:max-w-[900px]">
        <button onClick={closeModal} className="absolute top-4 right-4 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 fill-current text-first-color"
            viewBox="0 0 24 24"
          >
            <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
          </svg>
        </button>
        <article className="p-4 flex flex-col md:flex-row">
          <div className="relative w-full h-64 md:w-1/2 md:h-auto">
            <Image
              src={imgSrc}
              alt={title}
              layout="fill" // Cambiar a fill para que ocupe el contenedor
              objectFit="cover" // Mantener el aspecto de la imagen
              className="rounded-lg"
            />
          </div>
          <div className="md:ml-4 self-center">
            <h3 className="border-b-2 border-first-color my-4 py-2 text-title-color font-bold">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
            <aside className="flex flex-col mt-2 text-left text-sm">
              <small>
                <b className="text-first-color">DATE</b>: {date}
              </small>
              <small>
                <b className="text-first-color">LINK</b>:
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {link}
                </a>
              </small>
            </aside>
          </div>
        </article>
      </div>
    </article>
  );
};

export default Modal;
