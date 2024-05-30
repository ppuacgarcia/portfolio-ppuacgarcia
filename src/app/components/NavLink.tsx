import Link from "next/link";

// Definimos una interfaz para las props
interface NavLinkProps {
  href: string;
  title: string;
}

// Definimos el componente como una función por defecto
export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link href={href}>
      <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
        {title}
      </a>
    </Link>
  );
}
