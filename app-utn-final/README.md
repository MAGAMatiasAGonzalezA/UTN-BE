# 🛍️ App de Gestión de Productos

Aplicación full stack que permite gestionar productos utilizando MongoDB, Express, React y Node.js.  
En esta actualización, se incorporó una nueva funcionalidad: **búsqueda de productos por nombre** desde el frontend, conectada al backend mediante una ruta POST.

---

## 🚀 Nueva funcionalidad

Se agregó un campo de búsqueda que permite al usuario encontrar productos por nombre.  
La búsqueda se realiza de forma dinámica y parcial (coincidencias por fragmento), sin necesidad de presionar un botón.

- 🔎 Búsqueda insensible a mayúsculas/minúsculas (`$regex` con opción `"i"`).
- 🔁 El componente reacciona automáticamente al escribir.
- 🧠 Lógica conectada al backend usando una ruta POST (`/products/search`).

---

## 🧱 Tecnologías utilizadas

- **Frontend:** React, Vite
- **Backend:** Node.js, Express, TypeScript
- **Base de datos:** MongoDB + Mongoose
- **Control de versiones:** Git

---

## ⚙️ Instrucciones para ejecutar el proyecto

### Backend

1. Clonar el repositorio.
2. Ir a la carpeta del backend:  
   ```bash
   cd backend
   ```
3. Instalar dependencias:  
   ```bash
   npm install
   ```
4. Crear un archivo `.env` basado en `.env.example` (ver abajo).
5. Ejecutar el servidor en desarrollo:  
   ```bash
   npm run dev
   ```

### Frontend

1. Ir a la carpeta del frontend:  
   ```bash
   cd frontend
   ```
2. Instalar dependencias:  
   ```bash
   npm install
   ```
3. Crear un archivo `.env` basado en `.env.example` (ver abajo).
4. Ejecutar el frontend:  
   ```bash
   npm run dev
   ```

---

## 🌐 Variables de entorno

Crear un archivo `.env` en cada carpeta (backend y frontend) según corresponda.

### 📁 backend/.env.example
```env
PORT=1234
MONGO_URI=mongodb://localhost:27017/nombreDeTuDB
JWT_SECRET=tuContraseñaPerfecta
```

### 📁 frontend/.env.example
```env
VITE_API_URL=http://localhost:1234/api
```

---

## 💡 Ejemplo de uso

- Al escribir "ma/r" en el campo de búsqueda, se obtienen productos como:  
  - "Martillo"
  - "Maceta de plastico"
  - "Martillo de goma"

- Si no se encuentra ninguna coincidencia, se muestra el mensaje:  
  `"No hay productos con esos datos"`

---

## 📁 Estructura de carpetas relevante

```
/backend
  └── routes/
       └── product.routes.ts
  └── controllers/
       └── product.controller.ts

/frontend
  └── pages/
       └── Home.jsx
```

---

## ✅ Estado del proyecto

✔ CRUD funcional  
✔ Búsqueda de productos implementada  

---

Desarrollado por Gabriel Alberini 💻
Modificado por Matías A. González Ardubino 💻