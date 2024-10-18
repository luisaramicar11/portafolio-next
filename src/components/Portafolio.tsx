"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import Project from "./Projects/Project";

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
        title: "CRUD WITH NEXT AND TYPESCRIPT",
        imgSrc: "/portfolio-1.jpg",
        description: "It contains a form to add new products and a table that displays the created products. Each row of the table has buttons to edit or delete the product.",
        date: "20/08/2024",
        link: "https://github.com/luisaramicar11/crudProduct6"
    },
    {
        id: "trabajo-2",
        closeModal,
        title: "JUNTANA",
        imgSrc: "/portfolio-2.jpg",
        description: "Juntana connects travelers with indigenous communities in Colombia, offering tourist plans that include guided tours, handicraft workshops, culinary experiences, cultural ceremonies, and excursions to sacred natural sites. The project features views to explore these plans, a home page, and a payment gateway with Stripe.",
        date: "01/06/2024",
        link: "https://github.com/luisaramicar11/TourismProject"
    },
    {
        id: "trabajo-3",
        closeModal,
        title: "ECOMMERCE",
        imgSrc: "/portfolio-3.jpg",
        description: "The application is a responsive solution that leverages the Marvel API services to present relevant information and incorporates an e-commerce with integration to the Stripe payment gateway.",
        date: "12/12/2023",
        link: "https://github.com/luisaramicar11/Marvel"
    },
    {
      id: "trabajo-4",
      closeModal,
      title: "SKILLSWAP",
      imgSrc: "/portfolio-4.png",
      description: "In a constantly evolving digital environment, updating and strengthening skills is crucial. SkillSwap addresses the challenges of collaborative learning, offering a smooth and effective digital experience for knowledge exchange.",
      date: "30/09/2024",
      link: "https://github.com/luisaramicar11/skillSwap"
  },
]

  return (
    <section id="projects" className="px-4 py-20 bg-gray-lighter-color">
      <div className="container mx-auto">
      <h2 className="border-b-4 border-first-color my-8 py-2 text-center text-black text-3xl font-bold w-64 mx-auto mb-20">
              PROJECTS
            </h2>
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

