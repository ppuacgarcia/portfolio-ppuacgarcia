'use client';
import React from 'react';
import Image from 'next/image';
interface ProjectBoxProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ image, title, description, technologies, githubLink }: ProjectBoxProps) => {
  // Función para manejar el error de carga de imágenes
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "/placeholder-image.png"; // Ruta de la imagen de marcador de posición
  };

  // Lógica para ocultar o mostrar el enlace a GitHub si githubLink está vacío
  const renderGitHubLink = () => {
    if (githubLink) {
      return (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-third-blue hover:underline flex items-center">
          <svg className="h-8 w-8 text-neutral-900 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
          </svg>
          <span>VER EN GITHUB</span>
        </a>
      );
    } else {
      return <span>Enlace a GitHub no disponible</span>;
    }
  };

  return (
    <div className="bg-primary-blue m-4 shadow-md rounded-lg overflow-hidden lg:flex">
      <div className="lg:w-1/2">
        <Image src={image} alt={title} className="w-full h-auto lg:h-full object-cover" onError={handleImageError} width={500} height={500} />
      </div>
      <div className="lg:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base mb-4">{description}</p>
        <p className="text-base mb-2">Tecnologías:</p>
        <ul className="list-disc list-inside mb-4">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        {renderGitHubLink()}
      </div>
    </div>
  );
};

export default ProjectBox;








