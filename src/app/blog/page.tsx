import NavigationBar from "../componets/nav-bar";
export default function Blog() {
  return (
    <main>
      <header className="bg-primary-blue p-1">
        <title>Blog</title>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Blog
        </h1>
        <NavigationBar />
      </header>
    </main>
  );
}