import NavigationBar from "../components/nav-bar";
import ProjectBox from "../components/project-box";

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
          <ProjectBox 
            image="/APIFACEGATE.png"
            title="Face Gate"
            description="EL proyecto consiste en un sistema de reconocimiento facial para el control de acceso a un edificio. 
                          el proyecto se realizo con python mas especificamente con el framwork Django usando la libreria CV2 
                          desarrollada por OPENCV PARA PODER RECONOCER ROSTROS EL MISMO PROYECTO CUENTA CON UNA INTERFAZ GRAFICA EN DJANGO 
                          Y USA LA TECNOLOGIA ESP32CAM PARA LA CAPTURA DE IMAGENES Y EL RECONOCIMIENTO DE ROSTROS. el proyecto cuenta con interfaz para poder
                          controlar usuarios y roles de acceso. esta pensado para poder ser escalable y facilmente mantenible"
            technologies={["python", "CV2", "Inteligencia artificial"]}
            githubLink="https://github.com/ppuacgarcia/API_FACE_GATE"
          />
          <ProjectBox
            image = "/FEL.webp"
            title = "Certificacion FEL"
            description = "El proyecto consiste en con un backend con djnago y graphql hacer la conexion con la api de la superintendencia de administracion tributaria Guatemala para poder obtener la informacion de las facturas electronicas de los contribuyentes, el proyecto cuenta con un frontend en react para poder visualizar la informacion de las facturas electronicas y poder hacer busquedas de las mismas esta certificacion es para poder facturar dede una aplicacion web"
            technologies={["python", "Django", "API RESTFUL", "React", "Graphql"]}
            githubLink=""
            />
            <ProjectBox
            image = "/BackendHotel.png"
            title = "Backend Hotel"
            description = "El proyecto consiste en un backend para un sistema de gestion de un hotel, el proyecto cuenta con un sistema de gestion de habitaciones, reservaciones, clientes, el proyecto cuenta con un sistema de autenticacion de usuarios y roles, el proyecto esta desarrollado en nestjs y se conecta a una base de datos en postgresql, el proyecto cuenta sistema de pagos "
            technologies={["Nestjs", "APIRESTFUL", "Postgresql"]}
            githubLink="https://github.com/emilioxmedina/Hotel-App-Backend"
            />
       
    </main>
    
  );
}