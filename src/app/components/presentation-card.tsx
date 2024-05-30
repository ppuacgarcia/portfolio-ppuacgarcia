import Image from "next/image";


export default function PresentationCard() {
    return (
        // This is the presentation card that will be displayed on the home pagegi
        <div className="max-w-full m-10 bg-primary-blue bg-opacity-50 shadow-lg rounded-lg overflow-hidden ">
        <div className="h-56 grid grid-cols-[auto_1fr] gap-4 p-6">
            <div className="flex items-center justify-center">
                <div className="relative w-24 h-48 md:w-36 md:h-72">
                <Image src="/PabloPuac.png" alt="Picture of the author" width={150} height={300} className="rounded-full" />
                </div>
            </div>
            <p className="p-5 text">
                Hola, soy Pablo David Puac García, un entusiasta estudiante de quinto año de Ingeniería Informática y Sistemas. 
                A lo largo de mi carrera, he cultivado un profundo interés por la tecnología y su influencia en el mundo moderno. 
                Mi objetivo es aplicar mis habilidades y conocimientos para desarrollar soluciones innovadoras que mejoren la vida 
                de las personas y optimicen procesos en diversas industrias. Además, quiero contribuir al progreso de mi país compartiendo 
                mis conocimientos y enriqueciendo a la comunidad.

            </p>
        </div>
    </div>
    );
}