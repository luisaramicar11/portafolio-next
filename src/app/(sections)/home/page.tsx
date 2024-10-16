import Link from 'next/link';
import React from 'react';
import styles from './home.module.css';

export default function Home() {
  return (
    <section className="relative">
      <article
        className={`${styles['hero-image']} bg-cover bg-center h-screen`} // Corregido aquí
      >
        <aside className="flex justify-center items-center text-center w-full h-full bg-black-alpha-color">
          <div className="text-white">
            <h2 className="text-[7.5vw] text-hero-text-color">
              Bienvenid@s<br />a mi sitio
            </h2>
            <Link
              href="/contacto"
              className="inline-block px-4 py-2 rounded bg-first-color text-white-color font-bold transition-opacity duration-500 hover:opacity-75"
            >
              CONTÁCTAME
            </Link>
          </div>
        </aside>
      </article>
    </section>
  );
}


