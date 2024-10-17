import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-2 text-center text-white bg-[#501464]">
      <small>
        Sitio diseñado por{' '}
        <a
          href="https://www.linkedin.com/in/luisa-fernanda-ram%C3%ADrez-cardona-0b486565/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#509ee3] transition-opacity duration-500 hover:opacity-75"
        >
          luisaramicar11
        </a>
      </small>
    </footer>
  );
};

export default Footer;
