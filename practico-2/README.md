# 📚 API de Libros

Una API RESTful construida con **TypeScript**, **Express** y **MongoDB** para gestionar una colección de libros. Permite crear, listar, actualizar y eliminar libros mediante rutas específicas.

---

## 🚀 Tecnologías utilizadas

- TypeScript
- Express
- MongoDB (con Mongoose)
- Patrón de diseño: MVC (Modelo - Vista - Controlador)
- Control de versiones: Git

## 🛠️ ¿Estructura del proyecto?

src/

  ├── config/         # Conexión MongoDB

  ├── controllers/    # Funciones CRUD

  ├── interfaces/     # interfaces utilizadas 

  ├── models/         # Esquemas de Mongoose

  ├── routes/         # Manejo de rutas

  ├── utils/          # Utilidades usadas

  └── index.ts        # Ejecución del proyecto

## ⚙️ Instalación y ejecución local

**1. Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
```

**2. Instalar dependencias**
*  <u>Dependencias de desarrollo </u>
 - @types/express
 - ts-node-dev
 - typescript
*  <u>Dependencias de producción </u>
 - express
 - mongoose

**3. Configurar las variables de entorno**

- proccess.loadEnvFile() para manejar variables de entorno.
- Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
- PORT=1234
- MONGODB_URI=mongodb://localhost:27017/nombre_de_tu_base
- Reemplaza nombre_de_tu_base con el nombre que desees para la base de datos.

**4. Iniciar el servidor**

- npm run dev
- El servidor estará disponible en http://localhost:1234

## 📌 Rutas disponibles

**Todas las rutas comienzan con /api/books**

- POST /api/books => Crear un nuevo libro.
- GET /api/books => Listar todos los libros.
- GET /api/books/:id => Obtener un libro por ID.
- PATCH /api/books/:id => Actualizar un libro por ID.
- DELETE /api/books/:id => Eliminar un libro por ID.

## 🛡 Validaciones

- No se permite crear libros con el mismo título (índice único en title).
- Todos los campos requeridos deben estar presentes según el esquema de validación.

## 🧑‍💻 Autor

- Desarrollado por Matías como parte del trabajo práctico N°2 UTN-BackEnd.

