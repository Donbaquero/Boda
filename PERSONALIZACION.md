# 🎨 Guía de Personalización - Invitación de Boda

## 🚀 Pasos para Personalizar tu Invitación

### 1. 📝 Cambiar Información Básica

#### Editar `index.html`:
```html
<!-- Línea 8: Título de la página -->
<title>Boda de [Tu Nombre] & [Nombre de tu Pareja]</title>

<!-- Línea 25: Nombres de los novios -->
<h1 class="hero-title">[Tu Nombre] & [Nombre de tu Pareja]</h1>

<!-- Línea 26-27: Fecha y hora -->
<p class="date-text">[Tu Fecha]</p>
<p class="time-text">[Tu Hora]</p>

<!-- Línea 95: Dirección del lugar -->
<p>[Nombre del Lugar]<br>[Dirección Completa]<br>[Ciudad, Estado]</p>

<!-- Línea 125: Enlace del formulario RSVP -->
<a href="[TU_ENLACE_DE_GOOGLE_FORMS]" target="_blank" class="btn btn-primary btn-lg">
```

#### Editar `script.js`:
```javascript
// Línea 35: Fecha para la cuenta regresiva
const weddingDate = new Date('[TU_FECHA_ISO]').getTime();
```

### 2. 🖼️ Agregar tus Imágenes

#### En la carpeta `images/`:
1. **`hero-bg.png`** - Imagen de fondo principal
2. **`novia.png`** - Tu foto
3. **`novio.png`** - Foto de tu pareja

#### Tamaños recomendados:
- **hero-bg.png**: 1920x1080px
- **novia.png**: 500x500px
- **novio.png**: 500x500px

### 3. 🎵 Agregar tu Música

#### En la carpeta `music/`:
1. Renombra tu archivo como `romantic-music.mp3`
2. Formato: MP3, máximo 5MB
3. Duración: 2-5 minutos (se reproduce en loop)

### 4. 🗺️ Configurar el Mapa

#### Obtener código de Google Maps:
1. Ve a [Google Maps](https://maps.google.com)
2. Busca tu ubicación
3. Haz clic en "Compartir" → "Insertar mapa"
4. Copia el código HTML
5. Reemplaza en `index.html` línea 108

### 5. 📝 Crear Formulario RSVP

#### Crear en Google Forms:
1. Ve a [Google Forms](https://forms.google.com)
2. Crea nuevo formulario
3. Agrega campos:
   - Nombre completo
   - Email
   - Teléfono
   - Confirmación (Sí/No)
   - Número de invitados
   - Comentarios
4. Comparte y copia el enlace
5. Pega en `index.html` línea 125

### 6. 🎨 Personalizar Colores

#### Editar `styles.css`:
```css
:root {
    --primary-color: #d4af37;      /* Color principal */
    --secondary-color: #8b7355;    /* Color secundario */
    --accent-color: #f5f5dc;       /* Color de acento */
    --text-dark: #2c2c2c;          /* Texto oscuro */
    --text-light: #ffffff;         /* Texto claro */
}
```

### 7. 📱 Probar Responsividad

#### Verificar en:
- 📱 Móvil (320px+)
- 📱 Tablet (768px+)
- 💻 Escritorio (1024px+)

## 🔧 Personalizaciones Avanzadas

### Cambiar Fuentes
```css
/* En styles.css */
:root {
    --font-primary: 'Tu Fuente', serif;
    --font-secondary: 'Tu Fuente Secundaria', sans-serif;
}
```

### Agregar Animaciones
```css
/* Nuevas animaciones personalizadas */
@keyframes tuAnimacion {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}
```

### Modificar Layout
```html
<!-- Agregar nuevas secciones -->
<section id="nueva-seccion" class="py-5">
    <div class="container">
        <h2 class="section-title">Tu Nueva Sección</h2>
        <!-- Contenido personalizado -->
    </div>
</section>
```

## 📋 Checklist de Personalización

- [ ] Cambiar nombres de los novios
- [ ] Actualizar fecha y hora
- [ ] Cambiar ubicación y mapa
- [ ] Agregar fotos personales
- [ ] Incluir música de fondo
- [ ] Crear formulario RSVP
- [ ] Personalizar colores
- [ ] Probar en diferentes dispositivos
- [ ] Verificar enlaces y funcionalidades

## 🚨 Errores Comunes

### 1. **Imágenes no se muestran**
- Verifica que estén en la carpeta `images/`
- Nombres exactos: `hero-bg.jpg`, `novia.jpg`, `novio.jpg`
- Formato: JPG o PNG

### 2. **Música no reproduce**
- Archivo debe estar en `music/romantic-music.mp3`
- Formato: MP3
- Tamaño: máximo 5MB

### 3. **Mapa no carga**
- Verifica el enlace de Google Maps
- Asegúrate de que sea público
- Prueba en modo incógnito

### 4. **Formulario no funciona**
- Verifica que el enlace de Google Forms sea público
- Prueba el enlace directamente
- Asegúrate de que no tenga restricciones

## 🎯 Consejos de Diseño

### 1. **Consistencia Visual**
- Mantén un esquema de colores coherente
- Usa las mismas fuentes en toda la página
- Mantén espaciado uniforme

### 2. **Contenido Claro**
- Información fácil de leer
- Botones claros y visibles
- Navegación intuitiva

### 3. **Optimización Móvil**
- Texto legible en pantallas pequeñas
- Botones del tamaño adecuado
- Imágenes que se adapten

## 🔄 Después de Personalizar

### 1. **Probar Localmente**
- Abre `index.html` en tu navegador
- Verifica todas las funcionalidades
- Prueba en diferentes dispositivos

### 2. **Subir a GitHub**
- Crea repositorio en GitHub
- Sube todos los archivos
- Activa GitHub Pages

### 3. **Compartir**
- Envía el enlace a tus invitados
- Comparte en redes sociales
- Incluye en invitaciones físicas

---

**¡Tu invitación personalizada estará lista para sorprender a todos!** ✨💒 