import NavigationBar from "../components/nav-bar";
import Image from "next/image";
export default function Education() {
  const totalSemesters = 11;
  const currentSemester = 9;
  const progressPercentage = Math.round((currentSemester / totalSemesters) * 100);

  return (
    <main>
      <header className="bg-primary-blue p-1">
        <title>Educacion</title>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Educacion
        </h1>
        <NavigationBar />
      </header>

      <section className="p-6 grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="bg-secondary-blue bg-opacity-80 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Carrera</h2>
          <div className="text-xl font-semibold mb-2">Ingeniería Informática y Sistemas</div>
          <div className="text-lg mb-2">Universidad Rafael Landívar</div>
          <div className="text-lg mb-2">Noveno semestre</div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-third-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progressPercentage}%` }}> {progressPercentage}% Completado</div>
          </div>
        </div>

        <div className="bg-third-blue  text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Lenguajes de Programación</h2>
          <div className="flex flex-wrap gap-2">
            <div className="bg-primary-blue p-4 rounded-md">
              <Image src="/python-logo.webp" alt="Python" width={100} height={100} />
              Python
            </div>
            <div className="bg-primary-blue p-4 rounded-md">
              <Image src="/java-logo-1.webp" alt="JavaScript" width={100} height={100} />
              Java
            </div>
            <div className="bg-primary-blue p-4 rounded-md">
            <Image src="/Cplus.webp" alt="JavaScript" width={100} height={100} />
              C++
            </div>
            <div className="bg-primary-blue p-4 rounded-md">
            <Image src="/C.webp" alt="JavaScript" width={100} height={100} />
              C
            </div>
            <div className="bg-primary-blue p-4 rounded-md">
              <Image src="/nodejs.webp" alt="JavaScript" width={100} height={100} />
              Node.js
            </div>
            <div className="bg-primary-blue p-4 rounded-md">
              <Image src="/HTML5.svg" alt="JavaScript" width={100} height={100} />
              HTML
            </div>
            <div className="bg-primary-blue p-4 rounded-md">
              <Image src="/CSS3.svg" alt="JavaScript" width={100} height={100} />
              CSS
            </div>
          </div>
        </div>

        <div className="bg-secondary-blue text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Frameworks y Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/django.webp" alt="JavaScript" width={100} height={100} />
              Django
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/next.svg" alt="JavaScript" width={100} height={100} />
              Next.js
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/nest.webp" alt="JavaScript" width={100} height={100} />
              Nest.js
            </div>
            <div className="bg-third-blue p-4 rounded-md">
            <Image src="/vue.svg" alt="JavaScript" width={100} height={100} />
              Vue
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/pg.svg" alt="JavaScript" width={100} height={100} />
              PostgreSQL
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/MySQL.svg" alt="JavaScript" width={100} height={100} />
              MySQL
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/mariadb.svg" alt="JavaScript" width={100} height={100} />
              MariaDB
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/Mongo.webp" alt="JavaScript" width={100} height={100} />
              MongoDB
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/tailwind.svg" alt="JavaScript" width={100} height={100} />
              Tailwind CSS
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/gql.svg" alt="JavaScript" width={100} height={100} />
              GraphQL
            </div>
            <div className="bg-third-blue p-4 rounded-md">
              <Image src="/Rest.svg" alt="JavaScript" width={100} height={100} />
              API RESTful
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


