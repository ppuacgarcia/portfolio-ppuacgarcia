import NavigationBar from "./components/nav-bar";
import PresentationCard from "./components/presentation-card";
export default function Home() {
  return (
    <main>
        <header className="bg-primary-blue p-1">
          <title>Pablo Puac</title>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Portafolio de Pablo Puac
          </h1>
          <NavigationBar />
        </header>
       <PresentationCard />
    </main>
  );
}
