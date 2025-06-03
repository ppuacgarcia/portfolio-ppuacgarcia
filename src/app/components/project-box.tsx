"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectBoxProps {
  images: string[] // Ahora es un array de imágenes
  title: string
  description: string
  technologies: string[]
  githubLink?: string
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  images,
  title,
  description,
  technologies,
  githubLink,
}: ProjectBoxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Función para manejar el error de carga de imágenes
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "/placeholder-image.png" // Ruta de la imagen de marcador de posición
  }

  // Navegar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  // Navegar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Autoplay para el carrusel
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying && images.length > 1) {
      interval = setInterval(() => {
        nextImage()
      }, 5000) // Cambiar imagen cada 5 segundos
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentImageIndex, isAutoPlaying, images.length])

  // Pausar autoplay cuando el usuario interactúa con el carrusel
  const handleCarouselInteraction = () => {
    setIsAutoPlaying(false)
    // Reiniciar autoplay después de 10 segundos de inactividad
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Lógica para ocultar o mostrar el enlace a GitHub si githubLink está vacío
  const renderGitHubLink = () => {
    if (githubLink) {
      return (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-third-blue hover:underline flex items-center"
        >
          <svg
            className="h-8 w-8 text-neutral-900 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
          </svg>
          <span>VER EN GITHUB</span>
        </a>
      )
    } else {
      return <span className="text-gray-500 italic">Enlace a GitHub no disponible</span>
    }
  }

  return (
    <div className="bg-primary-blue m-4 shadow-md rounded-lg overflow-hidden lg:flex">
      <div className="lg:w-1/2 relative">
        {/* Carrusel de imágenes */}
        <div className="relative h-64 lg:h-full" onClick={handleCarouselInteraction}>
          {images.length > 0 ? (
            <>
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`${title} - imagen ${currentImageIndex + 1}`}
                className="w-full h-full transition-transform duration-500 ease-in-out"
                onError={handleImageError}
                width={500}
                height={500}
              />

              {/* Controles del carrusel (solo si hay más de una imagen) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indicadores de posición */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(index)
                        }}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">No hay imágenes disponibles</span>
            </div>
          )}
        </div>
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
  )
}

export default ProjectBox








