import NavigationBar from "../components/nav-bar";

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

      <section className="p-6">
        <div className="bg-secondary-blue text-white p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-bold mb-2">Carrera</h2>
          <p className="text-xl">Ingeniería Informática y Sistemas</p>
          <p className="text-lg">Universidad Rafael Landívar</p>
          <p className="text-lg mb-2">Noveno semestre Semestre</p>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-third-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progressPercentage}%` }}> {progressPercentage}% Completado</div>
          </div>
        </div>

        <div className="bg-third-blue text-white p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-bold mb-2">Lenguajes de Programación</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>C</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="bg-secondary-blue text-white p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-bold mb-2">Frameworks y Tecnologías</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Django</li>
            <li>Next.js</li>
            <li>Nest.js</li>
            <li>Vue</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MariaDB</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
            <li>GraphQL</li>
            <li>API RESTful</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
