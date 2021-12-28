import React from "react";
import { Link } from "remix";
import { TailwindIcon } from "~/icons";

interface NavbarItem {
  url: string;
  text: string;
}

interface NavbarProps {
  items: NavbarItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ items = [] }) => {
  const [show, setShow] = React.useState(false);

  const handleOnClickTrigger = React.useCallback(() => {
    setShow((val) => !val);
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-accent p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          to="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-slate-700 hover:text-white mx-4"
        >
          <TailwindIcon />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleOnClickTrigger}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:visible ${
          show ? undefined : "hidden"
        }`}
      >
        <div className="text-lg lg:text-xl lg:flex-grow">
          {items.map((x, index) => (
            <Link
              key={index}
              to={x.url}
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-700 hover:text-white mx-4"
              onClick={handleOnClickTrigger}
            >
              {x.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
