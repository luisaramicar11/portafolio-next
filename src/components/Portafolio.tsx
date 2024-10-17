"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    event.preventDefault(); // Prevenir la redirección del enlace
    openModal(id); // Abrir el modal
  };

  return (
    <section id="portafolio" className="px-4 py-20">
      <div className="container mx-auto">
        <h2 className="section-title border-t border-b border-first-color my-8 py-2 text-center text-gray-800 text-2xl font-semibold w-64 mx-auto">Mis trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="relative w-full h-80 mx-auto block group"
            onClick={(event) => handleClick(event, "trabajo-1")}
          >
            <Image
              src="/portfolio-1.jpg"
              alt="Trabajo 1"
              layout="fill"
              objectFit="cover"
            />
            <aside className="absolute top-0 left-0 w-full h-full bg-first-alpha-color text-white-color p-4 opacity-0 pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="p-4 border border-white-color w-full h-full">
                <h3>Productos (CRUD)</h3>
                <p>
                  Este es un proyecto de una tienda en línea que permite
                  realizar operaciones CRUD de productos.
                </p>
              </div>
            </aside>
          </div>

          <div
            className="relative w-full h-80 mx-auto block group"
            onClick={(event) => handleClick(event, "trabajo-2")}
          >
            <Image
              src="/portfolio-2.jpg"
              alt="Trabajo 2"
              layout="fill"
              objectFit="cover"
            />
            <aside className="absolute top-0 left-0 w-full h-full bg-first-alpha-color text-white-color p-4 opacity-0 pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="p-4 border border-white-color w-full h-full">
                <h3>Proyecto Juntana</h3>
                <p>
                  Juntana es una plataforma que ofrece planes turísticos
                  personalizados para visitar comunidades indígenas en Colombia.
                </p>
              </div>
            </aside>
          </div>

          <div
            className="relative w-full h-80 mx-auto block group"
            onClick={(event) => handleClick(event, "trabajo-3")}
          >
            <Image
              src="/portfolio-3.jpg"
              alt="Trabajo 3"
              layout="fill"
              objectFit="cover"
            />
            <aside className="absolute top-0 left-0 w-full h-full bg-first-alpha-color text-white-color p-4 opacity-0 pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="p-4 border border-white-color w-full h-full">
                <h3>Proyecto Ecommerce</h3>
                <p>
                  La aplicación es una solución responsive que consume servicios
                  de la API de Marvel e incluye un e-commerce.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Reutilizamos el componente de modales */}
        {activeModal === "trabajo-1" && (
          <Modal
            id="trabajo-1"
            closeModal={closeModal}
            title="CRUD CON NEXT Y TYPESCRIPT"
            imgSrc="/portfolio-1.jpg"
            description="Contiene un formulario para agregar nuevos productos y una tabla que muestra los productos creados. Cada fila de la tabla tiene botones para editar o borrar el producto."
            date="20/08/2024"
            link="https://github.com/luisaramicar11/crudProduct6"
          />
        )}

        {activeModal === "trabajo-2" && (
          <Modal
            id="trabajo-2"
            closeModal={closeModal}
            title="JUNTANA"
            imgSrc="/portfolio-2.jpg"
            description="Juntana conecta a los viajeros con comunidades indígenas en Colombia, ofreciendo planes turísticos que incluyen visitas guiadas, talleres de artesanía, experiencias gastronómicas, ceremonias culturales, y excursiones a sitios naturales sagrados. El proyecto cuenta con vistas para explorar estos planes, una página de inicio, y una pasarela de pagos con Stripe."
            date="01/06/2024"
            link="https://github.com/luisaramicar11/TourismProject"
          />
        )}

        {activeModal === "trabajo-3" && (
          <Modal
            id="trabajo-3"
            closeModal={closeModal}
            title="ECOMMERCE"
            imgSrc="/portfolio-3.jpg"
            description="La aplicación es una solución responsive que aprovecha los servicios de la API de Marvel para presentar información relevante, e incorpora un e-commerce con integración a la pasarela de pagos Stripe."
            date="12/12/2023"
            link="https://github.com/luisaramicar11/Marvel"
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;

