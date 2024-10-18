import NavItemLink from "./NavItemLink"
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="bg-white-color fixed left-0 top-0 z-50 w-full bg-transparent p-4 min-h-16">
      <section className="container mx-auto flex flex-wrap justify-between items-center">
        <NavItemLink path="/portfolio" title="LUISA RAMÍREZ" />
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <Navbar />
      </section>
    </header>
  );
};


export default Header;
