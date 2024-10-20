"use client"
import React, { useState } from 'react';
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(event.currentTarget.action, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error en el envío');
      }

      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage('Hubo un error al enviar tus datos.');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section py-8" >
      <form 
        className="contact-form mx-auto w-4/5 md:w-1/3"
        action="https://getform.io/f/apjmdlga"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
      >  
          <label htmlFor="name" className='font-bold'>Name</label>
          <input 
            type="text"
            name="name"
            placeholder="Enter Your Name"
            title="Name only accepts letters and whitespace."
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            required
            className="font-bold rounded-md border border-gray-300 p-4 mb-4 w-full mt-2"
          />
            
          <label htmlFor="email" className='font-bold'>Email</label>
          <input 
            type="email"
            name="email"
            placeholder="Enter Your Email"
            title="Invalid email"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            required
            className="font-bold rounded-md border border-gray-300 p-4 mb-4 w-full mt-2"
          />

          <label htmlFor="comments" className='font-bold'>Message</label>
          <textarea 
            name="comments"
            rows={5}
            placeholder="Enter Your Message"
            title="Your comment must not exceed 255 characters"
            data-pattern="^.{1,255}$"
            required
            className="font-bold rounded-md border border-gray-300 p-4 mb-4 w-full resize-none mt-2"
          />
          
          <div className='flex justify-center'>
          <input 
            type="submit" 
            value="SEND"
            className="bg-first-color text-white font-bold py-2 px-4 rounded cursor-pointer w-1/3 mx-auto"
          />
          </div>
          
  
          {isLoading && (
            <div className="contact-form-loader mt-4">
              <Image src="/loader.svg" alt="Cargando" width={50} height={50}/>
            </div>
          )}
  
          {isSubmitted && (
            <div className="contact-form-response mt-4">
              <p>Los datos han sido enviados</p>
            </div>
          )}
  
          {errorMessage && (
            <div className="mt-4 text-red-600">
              <p>{errorMessage}</p>
            </div>
          )}
        </form>
      </section>
    );
  };
  
  export default ContactForm;
  
  
          