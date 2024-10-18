import Link from 'next/link';
import React from 'react';
import styles from './home.module.css';

export default function Home() {
  return (
    <section className="relative" id="home">
      <article
        className={`${styles['hero-image']} bg-cover bg-center h-screen w-screen`}
      >
        <aside className="flex justify-center items-center text-center w-full h-full">
          <div className="text-white">
            <h2 className="text-[3.5vw] text-black p-0 font-bold m-4">
              HEY, I AM LUISA 
            </h2>
            <h3 className="text-[1.5vw] text-black m-4">Web developer passionate about building websites and applications </h3>
            <Link
              href="#projects"
              className="m-4 inline-block px-20 py-4 rounded bg-first-color text-white-color font-bold transition-opacity duration-500 hover:opacity-75"
            >
              PROJECTS
            </Link>
          </div>
        </aside>
      </article>
    </section>
  );
}