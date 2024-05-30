"use client"

export default function NavigationBar() {
    return (
    <nav className="bg-primary-blue p-3">
        <ul className="flex flex-col md:flex-row">
            <li className="flex-1 mb-2 md:mb-0 md:mr-2">
                <a className="text-center block  rounded py-2 px-4 bg-secondary-blue hover:bg-third-blue text-white" href="/">
                    Inicio
                </a>
            </li>
            <li className="flex-1 mb-2 md:mb-0 md:mr-2">
            <a className="text-center block  rounded py-2 px-4 bg-secondary-blue hover:bg-third-blue text-white" href="/recent-projects">
                    Proyectos recientes
                </a>
            </li>
            <li className="flex-1 mb-2 md:mb-0 md:mr-2">
                <a className="text-center block  rounded py-2 px-4 bg-secondary-blue hover:bg-third-blue text-white" href="/education">
                    Educación
                </a>
            </li>
            <li className="flex-1">
                <a className="text-center block  rounded py-2 px-4 bg-secondary-blue hover:bg-third-blue text-white" href="/blog">
                    Blog
                </a>
            </li>
        </ul>
    </nav>
    
    );
  }