# ☕ COLON Café | Premium E-commerce & Experience

Bienvenido a **COLON Café**, una plataforma de comercio electrónico de alta gama diseñada para ofrecer una experiencia digital tan refinada como un café de especialidad. Este proyecto ha sido construido con las tecnologías más modernas para garantizar velocidad, SEO y una estética visual impactante.

---

## 🚀 Características Principales

- **Diseño Premium & Inmersivo**: Interfaz moderna con efectos de *Glassmorphism*, modo oscuro sofisticado y tipografía elegante.
- **Experiencia de Usuario Animada**: Integración profunda con **Framer Motion** para transiciones suaves y una navegación fluida.
- **E-commerce Full-Stack**: Sistema de carrito de compras dinámico y persistente con gestión de productos en tiempo real.
- **Secciones Especializadas**:
    - **Nuestra Historia**: Una línea de tiempo interactiva y narrativa visual sobre el legado del café.
    - **Menú Dinámico**: Categorización inteligente de productos y gestión de stock.
    - **Checkout Profesional**: Formulario de pago validado y listo para integración.
- **Backend Robusto**: API REST construida con Next.js Route Handlers y persistencia en MongoDB.

---

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js (App Router), React, TypeScript.
- **Estilos**: Tailwind CSS, Lucide React (Iconografía).
- **Animaciones**: Framer Motion.
- **Gestión de Estado**: Zustand.
- **Base de Datos**: MongoDB & Mongoose.

---

## 📂 Configuración de la Base de Datos (MongoDB)

Este proyecto utiliza **MongoDB Atlas** (o una instancia local) para almacenar productos y pedidos. Sigue estos pasos para configurarlo:

### 1. Obtener tu URI de Conexión
1. Crea una cuenta gratuita en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Crea un nuevo Cluster y ve a la sección **"Connect"**.
3. Elige **"Connect your application"** y copia la cadena de conexión (Connection String). Se verá similar a esto:
   `mongodb+srv://<username>:<password>@cluster0.mongodb.net/colon-cafe`

### 2. Configurar Variables de Entorno
Crea un archivo llamado `.env.local` en la raíz del proyecto (o edita el existente) y añade tu cadena de conexión:

```env
MONGODB_URI=tu_cadena_de_conexion_aqui
```

### 3. Inicialización de Datos (Seeding)
El proyecto está configurado para **auto-poblar** la base de datos la primera vez que visitas la página del Menú.
- Cuando navegas a `/menu`, el sistema detecta si la base de datos está vacía y carga automáticamente los productos iniciales (cafés premium, métodos de extracción, etc.).

---

## 📦 Instalación y Uso

1. **Clonar el repositorio e instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo Desarrollo:**
   ```bash
   npm run dev
   ```
   *El sitio estará disponible en [http://localhost:3000](http://localhost:3000).*

3. **Construir para Producción:**
   ```bash
   npm run build
   npm start
   ```

---

## 🌐 Despliegue (Hosting)

Este proyecto está optimizado para **Vercel** y **Netlify**:

### Vercel
1. Conecta tu repositorio de GitHub a Vercel.
2. Añade la variable `MONGODB_URI`.
3. El despliegue será automático.

### Netlify
1. Conecta tu repositorio a Netlify.
2. Netlify detectará automáticamente el archivo `netlify.toml`.
3. Añade la variable `MONGODB_URI` en **Site Settings > Environment Variables**.
4. ¡Listo! Netlify gestionará las funciones de Next.js automáticamente.

---

## 📜 Licencia

Este proyecto está diseñado como una solución lista para la venta a clientes del sector gastronómico y de café de especialidad.

---
*Diseñado con pasión por la excelencia cafetalera.* ☕✨
