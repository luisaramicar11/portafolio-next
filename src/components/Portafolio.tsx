"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import Project from "./Project";

interface IPropsModal {
  closeModal: () => void;
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const propsModal: IPropsModal[] = [
    {
        id: "trabajo-1",
        closeModal,
        title: "CRUD CON NEXT Y TYPESCRIPT",
        imgSrc: "/portfolio-1.jpg",
        description: "Contiene un formulario para agregar nuevos productos y una tabla que muestra los productos creados. Cada fila de la tabla tiene botones para editar o borrar el producto.",
        date: "20/08/2024",
        link: "https://github.com/luisaramicar11/crudProduct6"
    },
    {
        id: "trabajo-2",
        closeModal,
        title: "JUNTANA",
        imgSrc: "/portfolio-2.jpg",
        description: "Juntana conecta a los viajeros con comunidades indígenas en Colombia, ofreciendo planes turísticos que incluyen visitas guiadas, talleres de artesanía, experiencias gastronómicas, ceremonias culturales, y excursiones a sitios naturales sagrados. El proyecto cuenta con vistas para explorar estos planes, una página de inicio, y una pasarela de pagos con Stripe.",
        date: "01/06/2024",
        link: "https://github.com/luisaramicar11/TourismProject"
    },
    {
        id: "trabajo-3",
        closeModal,
        title: "ECOMMERCE",
        imgSrc: "/portfolio-3.jpg",
        description: "La aplicación es una solución responsive que aprovecha los servicios de la API de Marvel para presentar información relevante, e incorpora un e-commerce con integración a la pasarela de pagos Stripe.",
        date: "12/12/2023",
        link: "https://github.com/luisaramicar11/Marvel"
    }
]

  return (
    <section id="portafolio" className="px-4 py-20">
      <div className="container mx-auto">
        <h2 className="section-title border-t border-b border-first-color my-8 py-2 text-center text-gray-800 text-2xl font-semibold w-64 mx-auto">Mis trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project onClick={openModal}/>  
        </div>
        {propsModal.map((modalProps) => (
          activeModal === modalProps.id && (
            <Modal key={modalProps.id} {...modalProps} />
          )
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

