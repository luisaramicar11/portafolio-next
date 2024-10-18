import React from 'react';
import styles from './contact.module.css';
import ContactForm from "../Form"

export default function Contact() {
    return (
        <section id="contact" className={`${styles['hero-image']} bg-cover bg-center w-screen pt-10`}>
          <h2 className="mt-0 my-8 mb-0 py-2 text-center text-black text-3xl font-bold w-64 mx-auto">
              CONTACT
            </h2>
            <article className="grid grid-cols-1">
             <ContactForm/>
            </article>
        </section>
      );
}