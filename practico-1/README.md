# 📦 CRUD para Inventario de Cocina - con Mongoose

Este proyecto creado de forma local, gestiona un sistema de cocina utilizando MongoDB y Mongoose. Contiene 4 esquemas principales:

- **Usuarios**: Registro y administración de cuentas de usuario.
- **Inventario**: Gestión de ingredientes disponibles.
- **Recetas**: Recetas con ingredientes y procedimientos.
- **Plaza**: Preparaciones listas para despachar.

## 🛠️ ¿Cómo probar el proyecto?

1. **Instalá dependencias principales**
- mongoose
- typescript
- ts-node
2. **En el archivo index.ts, cambiá la acción en el switch para probar: accionUser[]**
- 0 → Crear un usuario
- 1 → Obtener todos los usuarios
- 2 → Buscar usuario por ID
- 3 → Buscar usuarios por nombre
- 4 → Actualizar usuario
- 5 → Eliminar usuario
- Esto aplica también para el switch inventario, recipes y plaza
- Carga los datos necesario en el objeto anterior a cada switch para relizar la tarea elegida

## 🛠️ ¿Estructura del proyecto?

/src

  ├── config/         # Conexión MongoDB

  ├── models/         # Esquemas de Mongoose

  ├── controllers/    # Funciones CRUD  

  └── index.ts        # Pruebas del CRUD con switch