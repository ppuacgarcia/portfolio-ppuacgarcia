import NavigationBar from "../componets/nav-bar";


export default function RecentProjects() {
  return (
    <main>
        <header className="bg-primary-blue p-1">
          <title>Proyectos recientes</title>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Proyectos recientes
          </h1>
          <NavigationBar />
        </header>
       
    </main>
    
  );
}