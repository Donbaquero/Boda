# 💒 Invitación de Boda - María del Pilar Delgado & Maicol Andrés Márquez

Una elegante invitación web para boda con diseño responsivo, cuenta regresiva, música de fondo y todas las funcionalidades necesarias para compartir los detalles del evento.

## ✨ Características

- 🎵 **Música de fondo** - Reproducción automática con controles
- ⏰ **Cuenta regresiva** - Hasta el día de la boda
- 📍 **Mapa de Google** - Ubicación del evento
- 📸 **Galería de fotos** - Fotos de los novios
- 📝 **Formulario RSVP** - Enlace a Google Forms
- 📱 **Diseño responsivo** - Optimizado para todos los dispositivos
- 🎨 **Bootstrap 5** - Diseño moderno y elegante
- 🚫 **Sin niños** - Aviso claro sobre la política

## 🚀 Cómo Publicar en GitHub Pages

### 1. Crear un Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea una nueva cuenta o inicia sesión
2. Haz clic en "New repository"
3. Nombra tu repositorio: `invitacion-boda` (o el nombre que prefieras)
4. Marca como "Public"
5. Haz clic en "Create repository"

### 2. Subir los Archivos

#### Opción A: Usando GitHub Desktop
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Clona tu repositorio
3. Copia todos los archivos del proyecto a la carpeta del repositorio
4. Commit y Push

#### Opción B: Usando Git desde Terminal
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/invitacion-boda.git

# Entrar a la carpeta
cd invitacion-boda

# Copiar todos los archivos del proyecto aquí

# Agregar archivos
git add .

# Hacer commit
git commit -m "Primera versión de la invitación de boda"

# Subir cambios
git push origin main
```

#### Opción C: Subir desde GitHub Web
1. En tu repositorio, haz clic en "Add file" → "Upload files"
2. Arrastra todos los archivos del proyecto
3. Haz clic en "Commit changes"

### 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings"
3. En el menú izquierdo, haz clic en "Pages"
4. En "Source", selecciona "Deploy from a branch"
5. En "Branch", selecciona "main" y haz clic en "Save"
6. Espera unos minutos para que se active

### 4. Acceder a tu Sitio

Tu sitio estará disponible en: `https://tu-usuario.github.io/invitacion-boda`

## 📁 Estructura del Proyecto

```
invitacion-boda/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este archivo
├── images/             # Carpeta para imágenes
│   ├── hero-bg.jpg     # Imagen de fondo del hero
│   ├── novia.jpg       # Foto de la novia
│   └── novio.jpg       # Foto del novio
└── music/              # Carpeta para música
    └── romantic-music.mp3  # Música de fondo
```

## 🖼️ Imágenes Requeridas

Necesitas agregar las siguientes imágenes en la carpeta `images/`:

- `hero-bg.jpg` - Imagen de fondo para la sección principal (recomendado: 1920x1080px)
- `novia.jpg` - Foto de la novia (recomendado: 500x500px, formato cuadrado)
- `novio.jpg` - Foto del novio (recomendado: 500x500px, formato cuadrado)

## 🎵 Música

Agrega tu archivo de música en la carpeta `music/` con el nombre `romantic-music.mp3`

## ⚙️ Personalización

### Cambiar Nombres y Fecha
Edita el archivo `index.html`:
- Línea 8: Cambia el título de la página
- Línea 25: Cambia los nombres de los novios
- Línea 26: Cambia la fecha
- Línea 27: Cambia la hora

### Cambiar Ubicación
Edita el archivo `index.html`:
- Línea 95: Cambia la dirección del lugar
- Línea 108: Actualiza el enlace del mapa de Google

### Cambiar Fecha de la Cuenta Regresiva
Edita el archivo `script.js`:
- Línea 35: Cambia la fecha de la boda

### Cambiar Enlace del Formulario RSVP
Edita el archivo `index.html`:
- Línea 125: Cambia el enlace del formulario de Google Forms

## 🔧 Crear Formulario de Google Forms

1. Ve a [Google Forms](https://forms.google.com)
2. Crea un nuevo formulario
3. Agrega campos como:
   - Nombre completo
   - Email
   - Número de teléfono
   - Confirmación de asistencia (Sí/No)
   - Número de invitados
   - Comentarios especiales
4. Comparte el formulario y copia el enlace
5. Pega el enlace en el archivo `index.html`

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)

## 🌐 Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio:
1. Compra un dominio
2. En la configuración de GitHub Pages, agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones de GitHub

## 🎨 Personalización de Colores

Los colores principales están definidos en `styles.css`:
- `--primary-color`: #d4af37 (Dorado)
- `--secondary-color`: #8b7355 (Marrón)
- `--accent-color`: #f5f5dc (Beige)

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa la documentación de [GitHub Pages](https://pages.github.com/)
2. Consulta la documentación de [Bootstrap 5](https://getbootstrap.com/docs/5.0/)
3. Verifica que todos los archivos estén en su lugar correcto

## 📄 Licencia

Este proyecto es de uso libre para invitaciones de boda personales.

---

**¡Que tengas una boda maravillosa!** 💕 