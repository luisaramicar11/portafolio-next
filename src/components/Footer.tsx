import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 min-h-80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold mb-6">LUISA RAMIREZ</h2>
            <p className="text-sm max-w-md mx-auto md:mx-0">
              A Frontend Web Developer who designs the interface of websites and web applications, contributing to the overall success of the product.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-semibold mb-4">SOCIAL</h3>
            <div className="flex space-x-4 justify-center md:justify-end">
              <Link href="https://www.linkedin.com/in/luisa-fernanda-ram%C3%ADrez-cardona-0b486565/" className="text-white hover:text-gray-400 transition-colors">
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/luisaramicar11" className="text-white hover:text-gray-400 transition-colors">
                <FaGithub size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm">
          <small>
            &copy; Copyright 2024. Made by{' '}
            <Link
              href="https://www.linkedin.com/in/luisa-fernanda-ram%C3%ADrez-cardona-0b486565/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-color font-bold transition-opacity duration-500 hover:opacity-75 border-b-2"
            >
              luisaramicar11
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
