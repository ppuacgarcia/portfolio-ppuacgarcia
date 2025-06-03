"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PresentationCard() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 px-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-secondary-blue">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Pablo Puac",
                1000,
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{
                background: `linear-gradient(to right, #590638, #E34A0F)`,
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }
              
            }
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl px-4">
          👋 ¡Hola! Soy Ingeniero en Informática y Sistemas, apasionado por la tecnología, la innovación y el impacto que pueden generar en la sociedad.
              Mi propósito es crear soluciones que no solo resuelvan problemas reales, sino que también mejoren la calidad de vida de las personas y optimicen procesos en diversas industrias.
              Con una visión centrada en el desarrollo tecnológico de mi país, busco combinar creatividad, lógica y compromiso para impulsar proyectos con propósito.
              Creo en el poder del conocimiento compartido y en la tecnología como herramienta de transformación.
              Bienvenido a mi portafolio, donde comparto mi trabajo, mis ideas y mi pasión por construir un futuro más conectado e inteligente. 🚀

          </p>
          <div className="p-5">
            <Link
              href="https://wa.me/+50232470635"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-blue to-third-blue hover:bg-slate-200 text-white"
            >
              Contactame
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              className="absolute"
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="10"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#590638" />
                  <stop offset="100%" stopColor="#E34A0F" />
                </linearGradient>
              </defs>
            </svg>
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/PabloPuac.jpeg"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

