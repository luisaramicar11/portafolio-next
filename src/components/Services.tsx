import React from 'react';

export default function Services() {
    return (
        <section id="services" className="services section bg-gray-light-color py-20 min-h-80">
          <div className="container mx-auto  ">
            <h2 className="border-b-4 border-first-color my-8 py-2 text-center text-black text-3xl font-bold w-64 mx-auto mb-20">
              SERVICES
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 justify-center items-center">
              {/* Tarjeta 1 */}
              <article className="service-card p-6 text-center bg-white shadow-lg rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto mb-4 fill-first-color" viewBox="0 0 24 24">
                  <path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.002,12H4z" />
                  <path d="M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414 13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13 13.293 15.293 14.707 16.707 18.414 13z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><i>Web</i> Programming</h3>
                <p className="text-gray-600">Project development using technologies such as Next.js and React</p>
              </article>
    
              {/* Tarjeta 2 */}
              <article className="service-card p-6 text-center bg-white shadow-lg rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto mb-4 fill-first-color" viewBox="0 0 24 24">
                  <path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><i>Web</i> Design</h3>
                <p className="text-gray-600">Planning, design, and creation of digital <i>Web</i> interfaces </p>
              </article>
            </div>
          </div>
        </section>
      );
}