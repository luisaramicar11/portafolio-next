import Link from 'next/link';
import React from 'react';
import styles from './home.module.css';

export default function Home() {
  return (
    <section className="relative mt-10" id="home">
      <article
        className={`${styles['hero-image']} bg-cover bg-center h-screen w-screen`}
      >
        <aside className="flex justify-center items-center text-center w-full h-full">
          <div className="text-white">
            <h1 className="text-black-title p-0 font-black m-4">
              HEY, I AM LUISA
            </h1>
            <h3 className="text-l text-title-color m-4">Web developer passionate about building websites and applications </h3>
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