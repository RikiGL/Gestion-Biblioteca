# Proyecto de Gestión de Biblioteca

Este proyecto es parte de un sistema MERN para la gestión de una biblioteca. Esta sección cubre exclusivamente el backend construido con Node.js, Express y MongoDB.

---

## Guía de instalación y ejecución (Backend)

### 1. Clonar el repositorio en una carpeta

```bash
git clone ......
```

### 2. Entrar a la carpeta del backend
```bash
cd backend
```
### 3. Instalar dependencias
```bash
npm install
```
> [!IMPORTANT]
> Asegúrate de tener Node.js y npm instalados. Puedes comprobarlo con node -v

### 4. Crear el archivo .env dentro de la carpeta backend
Se colocara las credenciales que se enviaron 
> [!CAUTION]
> Este archivo no se incluye en el repositorio por seguridad
### 5. Ejecutar el servidor
```bash
npm run dev
```
> [!NOTE]
>  Por defecto, el backend se ejecutará en: http://localhost:4000/

## Recomendaciones para el equipo
- No subir el archivo .env al repositorio.
- Usa git pull con frecuencia para mantener tu código actualizado.
- Todo el desarrollo deben ir en sus ramas correspondiente, no mandar directamente a la main
- Seguir las buenas prácticas de desarrollo y control de versiones.

## Estado actual del proyecto
- Backend inicializado
- Estructura del proyecto organizada
```bash
backend/
├── node_modules/
├── src/
│   ├── controller/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── index.js
│   └── database.js
├── .env
├── package.json
├── package-lock.json
└── README.md

```


