import React from 'react';
import Image from 'next/image';

interface ProjectBoxProps {
  image: string; // Cambia 'any' por el tipo específico de tu imagen si lo conoces
  title: string;
  description: string;
  technologies: string[];
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ image, title, description, technologies }) => {
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-gray-700 text-base">Tecnologías:</p>
        <ul className="list-disc list-inside">
          {technologies.map((tech, index) => (
            <li key={index} className="text-gray-700">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectBox;

