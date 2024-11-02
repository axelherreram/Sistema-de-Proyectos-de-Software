# Sistema de Proyectos de Software

Este es un sistema diseñado para gestionar proyectos de software, donde cada proyecto puede incluir múltiples módulos o funcionalidades. La aplicación también permite clasificar cada módulo en distintas fases del proyecto, tales como análisis, diseño, desarrollo, y pruebas.

### Estructura de la Base de Datos

La base de datos está estructurada para soportar una relación Maestro-Detalle entre **Proyectos** y **Módulos**, y también incluye un catálogo de **Fases** que permite clasificar cada módulo en diferentes etapas del desarrollo.

1. **Tabla `projects`**: Contiene información de cada proyecto, como su nombre, descripción, fecha de inicio y fin, y estado.
2. **Tabla `modules`**: Detalla cada funcionalidad de un proyecto, con información sobre el nombre, descripción, y fase del módulo, así como las relaciones con el proyecto y fase correspondientes.
3. **Tabla `phases`**: Define las fases del proyecto (Análisis, Diseño, Desarrollo, etc.), cada una con un nombre y color para fácil identificación.

### Arquitectura de la Aplicación

La aplicación está desarrollada con la siguiente arquitectura:

1. **Backend**:
   - **Node.js y Express**: Para la creación de una API REST que gestione la comunicación entre la base de datos y el cliente.
   - **Sequelize ORM**: Para la abstracción de la base de datos y manejo de migraciones y seeders.
   - **PostgreSQL**: Como sistema de gestión de base de datos relacional.

2. **Documentación API**:
   - **Swagger**: La documentación de la API está disponible en 'https://sistema-de-proyectos-de-software.onrender.com/api-docs/'. Aquí se puede visualizar y probar cada endpoint del sistema, incluyendo la gestión de proyectos, módulos y fases.

3. **Frontend**:
   - **React**: Aplicación realizada con react

### Enlace al Sitio de Pruebas

El sitio de pruebas está disponible en el siguiente enlace:
https://examen-final-wep.netlify.app/

