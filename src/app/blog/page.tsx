import NavigationBar from "../components/nav-bar";
import axios from "axios";
import { parsedEnv } from "../env";
interface PostAttributes {
  tittle: string;
  Body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Interface para un post completo
interface Post {
  id: number;
  attributes: PostAttributes;
}

interface ApiResponse {
  data: Post[];
}
export default async function Blog() {
  // Configuración de los headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${parsedEnv.API_KEY}`,
    }
  };

  try {
    // Realiza la petición con los headers configurados
    const response = await axios.get<ApiResponse>(`${parsedEnv.API_URL}/posts`, config);
    console.log(response.data);

    // Asumiendo que los posts están dentro de una propiedad llamada 'data'
    const posts = response.data.data;

    return (
      <main>
        <header className="bg-primary-blue p-1">
          <title>Blog</title>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Blog
          </h1>
          <NavigationBar />
        </header>
        <div>
          {Array.isArray(posts) && posts.map((post, index) => (
            <article key={index}>
              <h2>{post.attributes.tittle}</h2> {/* Asegúrate de que "tittle" es correcto */}
              <p>{post.attributes.Body}</p> {/* Asegúrate de que "Body" es correcto */}
            </article>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data: ", error);
    return (
      <main>
        <h1>Error al cargar los datos</h1>
      </main>
    );
  }
}