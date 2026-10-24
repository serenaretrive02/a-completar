# Explorador de perros — a completar

Requiere Node.js 22.12 o superior (se recomienda una versión LTS) y conexión a Internet.

Abrir esta carpeta en VS Code. En su terminal:

```bash
npm install
npm run dev
```

Abrir la dirección que indique Vite. Detener con Ctrl+C.
No hace falta ejecutar npm create vite: el proyecto ya está armado.

## Recorrido de clase

1. Props: recibir titulo e imagen en TarjetaPerro y pasarlas desde App.
2. Estado: reemplazar las constantes de App con useState.
3. API: hacer funcionar buscarPerro con el botón; usar fetch y await.
4. Agregar mensajes de carga y error, usando try / catch / finally.
5. useEffect: consultar automáticamente al montar el componente.
6. GitHub: publicar y luego registrar una segunda versión.

El mensaje de carga corresponde a la consulta; la foto se descarga después.

API y documentación: https://dog.ceo/dog-api/documentation/random
La respuesta tiene una propiedad message que contiene la URL de la imagen.

## GitHub

Crear un repositorio vacío en GitHub, sin README ni .gitignore.
Git debe estar instalado y la cuenta autenticada. Reemplazar la URL del ejemplo.

```bash
git init
git add .
git commit -m "Crear explorador de perros"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/explorador-perros.git
git push -u origin main
```

Modificar el título y agregar una prop descripcion a la tarjeta. Luego:

```bash
git add .
git commit -m "Agregar descripcion a la tarjeta"
git push
```

No subir node_modules ni dist: ya están en .gitignore.
Los archivos entregados están sin minificar. La configuración también desactiva
la minificación si se ejecuta npm run build. Las dependencias de terceros se
descargan por npm y pueden contener internamente archivos minificados.
