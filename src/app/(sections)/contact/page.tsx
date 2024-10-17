import React from 'react';

export default function Contact() {
    return (
        <section id="contacto" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="border-t border-b border-first-color my-8 py-2 text-center text-gray-800 text-2xl font-semibold w-64 mx-auto">
              Contacto
            </h2>
            <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <aside className="shadow-lg m-4 p-4 w-full h-36 flex flex-col justify-around items-center">
                <svg
                  width="37"
                  height="28"
                  viewBox="0 0 37 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-first-color"
                >
                  <path
                    d="M18.5 7.3125L7 16.8125V27C7 27.5625 7.4375 28 8 28H15C15.5 28 15.9375 27.5625 15.9375 27V21C15.9375 20.5 16.4375 20 16.9375 20H20.9375C21.5 20 21.9375 20.5 21.9375 21V27C21.9375 27.5625 22.4375 28 22.9375 28H30C30.5 28 31 27.5625 31 27V16.75L19.4375 7.3125C19.3125 7.1875 19.125 7.125 19 7.125C18.8125 7.125 18.625 7.1875 18.5 7.3125ZM36.6875 13.75L31.5 9.4375V0.8125C31.5 0.375 31.125 0.0625 30.75 0.0625H27.25C26.8125 0.0625 26.5 0.375 26.5 0.8125V5.3125L20.875 0.6875C20.375 0.3125 19.6875 0.0625 19 0.0625C18.25 0.0625 17.5625 0.3125 17.0625 0.6875L1.25 13.75C1.0625 13.875 0.9375 14.125 0.9375 14.3125C0.9375 14.5 1.0625 14.6875 1.125 14.8125L2.75 16.75C2.875 16.9375 3.0625 17 3.3125 17C3.5 17 3.6875 16.9375 3.8125 16.8125L18.5 4.75C18.625 4.625 18.8125 4.5625 19 4.5625C19.125 4.5625 19.3125 4.625 19.4375 4.75L34.125 16.8125C34.25 16.9375 34.4375 17 34.625 17C34.875 17 35.0625 16.9375 35.1875 16.75L36.8125 14.8125C36.9375 14.6875 37 14.5 37 14.3125C37 14.125 36.875 13.875 36.6875 13.75Z"
                    fill="#D90062"
                  />
                </svg>
                <h5 className="text-lg font-bold">UBICACIÓN</h5>
                <small className="text-gray-500 mt-4">Medellín-Antioquia, Colombia</small>
              </aside>
              <aside className="shadow-lg m-4 p-4 w-full h-36 flex flex-col justify-around items-center">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-first-color"
                >
                  <path
                    d="M31.8125 1.5625L25.3125 0.0625C24.625 -0.125 23.875 0.25 23.5625 0.9375L20.5625 7.9375C20.3125 8.5625 20.5 9.25 21 9.6875L24.8125 12.8125C22.5625 17.5625 18.625 21.5625 13.75 23.875L10.625 20.0625C10.1875 19.5625 9.5 19.375 8.875 19.625L1.875 22.625C1.1875 22.9375 0.875 23.6875 1 24.375L2.5 30.875C2.6875 31.5625 3.25 32 4 32C20 32 33 19.0625 33 3C33 2.3125 32.5 1.75 31.8125 1.5625Z"
                    fill="#D90062"
                  />
                </svg>
                <h5 className="text-lg font-bold">TELÉFONO</h5>
                <small className="text-gray-500 mt-4">
                  <a href="https://wa.me/3206992710?text=¡Hola!" className="text-link">
                    +57 3206992710
                  </a>
                </small>
              </aside>
              <aside className="shadow-lg m-4 p-4 w-full h-36 flex flex-col justify-around items-center">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-first-color"
                >
                  <path
                    d="M31.375 7.9375C29.9375 9.0625 28.125 10.4375 21.75 15.0625C20.5 16 18.1875 18.0625 16 18.0625C13.75 18.0625 11.5 16 10.1875 15.0625C3.8125 10.4375 2 9.0625 0.5625 7.9375C0.3125 7.75 0 7.9375 0 8.25V21C0 22.6875 1.3125 24 3 24H29C30.625 24 32 22.6875 32 21V8.25C32 7.9375 31.625 7.75 31.375 7.9375ZM16 16C17.4375 16.0625 19.5 14.1875 20.5625 13.4375C28.875 7.4375 29.5 6.875 31.375 5.375C31.75 5.125 32 4.6875 32 4.1875V3C32 1.375 30.625 0 29 0H3C1.3125 0 0 1.375 0 3V4.1875C0 4.6875 0.1875 5.125 0.5625 5.375C2.4375 6.875 3.0625 7.4375 11.375 13.4375C12.4375 14.1875 14.5 16.0625 16 16Z"
                    fill="#D90062"
                  />
                </svg>
                <h5 className="text-lg font-bold">EMAIL</h5>
                <small className="text-gray-500 mt-4">
                  <a href="mailto:lfernanda1192@gmail.com" className="text-link">
                    lfernanda1192@gmail.com
                  </a>
                </small>
              </aside>
              <aside className="shadow-lg m-4 p-4 w-full h-36 flex flex-col justify-around items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-first-color"
                >
                  <path
                    fill="#D90062"
                    d="M11.999 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.625 0 11.999 0zm4.313 17.58a7.58 7.58 0 1 1 0-15.16 7.58 7.58 0 0 1 0 15.16z"
                  />
                </svg>
                <h5 className="text-lg font-bold">REDES SOCIALES</h5>
                <small className="text-gray-500 mt-4">
                  <a
                    href="https://www.instagram.com/fernanda1192/"
                    className="text-link"
                  >
                    @fernanda1192
                  </a>
                </small>
              </aside>
            </article>
          </div>
        </section>
      );
}