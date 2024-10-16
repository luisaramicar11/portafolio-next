import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section className="section container mx-auto lg:min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-4">
          <article className="text-lg-right lg:text-right mb-8">
            <aside className="text-center lg:text-right">
              <h1 className="text-2xl font-bold">Luisa Fernanda Ramírez Cardona.</h1>
              <h5 className="text-base">Desarrolladora <i>Web</i></h5>
            </aside>
            <p className="mt-4">
              Soy una apasionada desarrolladora web con experiencia en la creación de aplicaciones interactivas y eficientes. Actualmente, me especializo en tecnologías modernas como TypeScript, Next.js y React.js, que me permiten construir soluciones web escalables. Mi experiencia me ha enseñado a trabajar de manera efectiva en equipos ágiles y a enfrentar desafíos técnicos con una mentalidad resolutiva.
            </p>
            <div className="text-center lg:text-left mt-4">
              <a
                href="https://www.canva.com/design/DAGOgGZNLv0/o5tnk7WWhCU5BJoXuaII5A/view?utm_content=DAGOgGZNLv0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-first-color text-white py-2 px-4 rounded shadow-lg hover:opacity-75 transition-opacity duration-300"
              >
                DESCARGA MI CV
              </a>
            </div>
          </article>
          <article className="mb-8">
          <div className="relative w-full h-80"> {/* Define un contenedor con una altura fija */}
        <Image
            className="filter grayscale"
            src="/luisaRamirez.jpg"
            alt="Luisa Ramírez"
            layout="fill" // Usa layout="fill" para que la imagen cubra todo el contenedor
            objectFit="cover" // Esto hará que la imagen cubra el contenedor
        />
    </div>
          </article>
          <article className="mb-8">
            <h2 className="text-center lg:text-left text-xl font-semibold">Mis habilidades</h2>
            <div className="progress mt-4">
              {['HTML', 'CSS', 'TypeScript', 'React', 'Next.js'].map(skill => (
                <div key={skill} className="flex justify-between items-center mb-2">
                  <p className="font-semibold">{skill}</p>
                  <div className="bg-gray-light h-2 w-full rounded ml-2">
                    <div className="bg-gray-dark h-2 rounded" style={{ width: '80%' }}></div> 
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      );
}

