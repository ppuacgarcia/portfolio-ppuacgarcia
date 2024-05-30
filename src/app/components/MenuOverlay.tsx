import React from "react";
import NavLink from "./NavLink";

// Definimos una interfaz para las props
interface MenuOverlayProps {
  links: {
    path: string;
    title: string;
  }[];
}

// Definimos el componente como una función por defecto
export default function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
