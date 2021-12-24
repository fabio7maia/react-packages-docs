import React from "react";

export interface MenuItem {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
interface MenuProps {
  items: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ items = [], children }) => {
  return (
    <ul className="menu py-3 shadow-lg bg-primary rounded-box">
      <li className="menu-title">
        <span>{children}</span>
      </li>
      {items.map((x, index) => (
        <li key={index}>
          <a href={x.href} onClick={x.onClick}>
            {x.children}
          </a>
        </li>
      ))}
    </ul>
  );
};
