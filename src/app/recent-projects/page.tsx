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
            images = {["/APIFACEGATE.png"]}
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
            images = {["/FEL.webp"]}
            title = "Certificacion FEL"
            description = "El proyecto consiste en con un backend con djnago y graphql hacer la conexion con la api de la superintendencia de administracion tributaria Guatemala para poder obtener la informacion de las facturas electronicas de los contribuyentes, el proyecto cuenta con un frontend en react para poder visualizar la informacion de las facturas electronicas y poder hacer busquedas de las mismas esta certificacion es para poder facturar dede una aplicacion web"
            technologies={["python", "Django", "API RESTFUL", "React", "Graphql"]}
            githubLink=""
            />
            <ProjectBox
            images = {["/BackendHotel.png"]}
            title = "Backend Hotel"
            description = "El proyecto consiste en un backend para un sistema de gestion de un hotel, el proyecto cuenta con un sistema de gestion de habitaciones, reservaciones, clientes, el proyecto cuenta con un sistema de autenticacion de usuarios y roles, el proyecto esta desarrollado en nestjs y se conecta a una base de datos en postgresql, el proyecto cuenta sistema de pagos "
            technologies={["Nestjs", "APIRESTFUL", "Postgresql"]}
            githubLink="https://github.com/emilioxmedina/Hotel-App-Backend"
            />
            <ProjectBox
            images = {["/cs1.png","/cs2.png"]}
            title = "💼 Proyecto: Sistema de Control de Inventario - Centro de Salud San Vicente Buenabaj"
            description = "Descripción del Proyecto: Desarrollamos un sistema web integral para la gestión de inventario del Centro de Salud San Vicente Buenabaj. La solución abarca múltiples áreas, incluyendo emergencias, laboratorio, consulta médica, farmacia, bodega y nutrición. El objetivo fue digitalizar el control de insumos médicos y optimizar el flujo de trabajo en condiciones de conectividad limitada. Responsabilidades Clave:👨‍💼 Gestión y Coordinación del Proyecto:Actué como Project Manager general, planificando, asignando tareas y supervisando el progreso del equipo. Coordiné reuniones técnicas y establecí cronogramas de entrega para garantizar una ejecución eficiente del proyecto.🤝 Comunicación Institucional:Fui el enlace principal con el personal del Centro de Salud, gestionando entrevistas, levantamiento de requerimientos y validación de funcionalidades. Me aseguré de que el producto final se adaptara a sus necesidades reales.🧪 Control de Calidad (QA):Me desempeñé como QA tanto en backend como en frontend, implementando pruebas manuales y automatizadas, validando el cumplimiento de los criterios de aceptación y asegurando la estabilidad del sistema antes de cada entrega.🧑‍💻 Desarrollo de Funcionalidades:Contribuí activamente al desarrollo de funcionalidades clave del sistema, desde la lógica de negocio en el backend (NestJS/PostgreSQL) hasta interfaces dinámicas y accesibles en el frontend (React/TypeScript). "
            technologies={["Nestjs", "APIRESTFUL", "Postgresql","React", "TypeScript","TailwindCSS","nextjs"]}
            githubLink="https://github.com/Josecc12/final-project"
            />
    </main>
    
  );
}