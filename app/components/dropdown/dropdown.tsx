import React from "react";

export interface DropdownItem {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
interface DropdownProps {
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ items = [], children }) => {
  return (
    <div className="dropdown dropdown-left">
      <div tabIndex={0} className="btn bg-primary">
        {children}
      </div>
      <ul
        tabIndex={0}
        className="mr-2 shadow menu dropdown-content bg-primary-focus rounded-box w-52 text-primary-content"
      >
        {items.map((x, index) => (
          <li key={index}>
            <a href={x.href} onClick={x.onClick}>
              {x.children}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
