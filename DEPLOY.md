# Guía de Despliegue: Cafetería COLON ☕🚀

Tu aplicación está lista para ser lanzada al mundo. Aquí tienes los pasos recomendados para el despliegue profesional.

## 1. Despliegue en Vercel (Recomendado)
Next.js y Vercel están hechos el uno para el otro.

1. Sube tu código a un repositorio de **GitHub**, **GitLab** o **Bitbucket**.
2. Conecta tu cuenta en [vercel.com](https://vercel.com).
3. Selecciona el proyecto `colon-cafe`.
4. **Configura las Variables de Entorno**:
   - En la sección "Environment Variables", añade:
     - `MONGODB_URI`: Tu cadena de conexión de MongoDB Atlas (Ver paso 2).
5. Dale a **Deploy** y ¡listo!

## 2. Configuración de Base de Datos (Producción)
Para producción, no uses `localhost`. Te recomiendo **MongoDB Atlas** (Gratis).

1. Crea una cuenta en [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Crea un Cluster gratuito (M0).
3. En "Network Access", permite el acceso desde cualquier lugar (`0.0.0.0/0`) o el IP de tu servidor.
4. Obtén tu `Connection String` y úsala como `MONGODB_URI` en Vercel.

## 3. Comandos Útiles
Para verificar que todo está perfecto antes de subir:

- `npm run build`: Genera el build optimizado de producción.
- `npm run start`: Ejecuta el servidor de producción localmente.
- `npm run lint`: Revisa que no haya errores de formato.

---
¡Felicidades por tu nueva plataforma de E-commerce! Si necesitas integrar pagos reales con Stripe en el futuro, estaré aquí para ayudarte.
