# 🗺️ Configuración del Mapa de Google Maps

## 📍 Cómo Obtener el Código de Embed del Mapa

### 1. Buscar la Ubicación
1. Ve a [Google Maps](https://maps.google.com)
2. Busca la dirección exacta de tu evento
3. Haz clic en la ubicación para seleccionarla

### 2. Obtener el Código de Embed
1. Haz clic en "Compartir"
2. Selecciona la pestaña "Insertar mapa"
3. Copia el código HTML que aparece

### 3. Personalizar el Mapa
- **Tamaño**: Recomendado 100% x 450px
- **Zoom**: Ajusta según prefieras (recomendado 15-17)
- **Estilo**: Puedes personalizar colores y estilos

## 🔧 Ejemplo de Código (Actualizado para Colombia)

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5!2d-76.6242683!3d2.5026855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzAnMDkuNyJOIDc2wrAzNycwMC4wIlc!5e0!3m2!1ses!2sco!4v1234567890"
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### 📍 Ubicación de la Boda:
- **Lugar**: Finca La Esperanza, Vereda El Paraíso
- **Ciudad**: Cali, Valle del Cauca, Colombia
- **Coordenadas**: 2°30'09.7"N 76°37'27.4"W
- **Enlace directo**: https://www.google.com/maps/place/2%C2%B030'09.7%22N+76%C2%B037'27.4%22W/@2.5026855,-76.6268432,17z/

## 📱 Responsive Design

El mapa ya está configurado para ser responsivo:
- **width="100%"**: Se adapta al ancho del contenedor
- **height="450"**: Altura fija para mejor visualización
- **CSS personalizado**: Bordes redondeados y sombras

## 🎨 Personalización del Estilo

### Cambiar Colores del Mapa
1. En Google Maps, haz clic en "Compartir"
2. Selecciona "Insertar mapa"
3. Haz clic en "Personalizar y previsualizar mapa"
4. Ajusta colores, estilos y elementos

### Opciones de Estilo
- **Modo**: Normal, Satélite, Terreno
- **Colores**: Personalizar paleta de colores
- **Elementos**: Mostrar/ocultar etiquetas, tráfico, etc.

## ⚠️ Consideraciones Importantes

### Privacidad
- **Ubicación exacta**: Considera si quieres mostrar la ubicación exacta
- **Información personal**: No incluyas información privada en el mapa
- **Horarios**: El mapa muestra la ubicación 24/7

### Rendimiento
- **Carga**: El mapa puede tardar en cargar en conexiones lentas
- **Datos**: Consume datos móviles
- **Fallback**: Considera una imagen estática como respaldo

## 🔄 Actualización del Código

### En el archivo `index.html`
Busca esta línea (aproximadamente línea 108):
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5!2d-76.6242683!3d2.5026855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzAnMDkuNyJOIDc2wrAzNycwMC4wIlc!5e0!3m2!1ses!2sco!4v1234567890"
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

**¡ACTUALIZADO!** Este código ya incluye las coordenadas correctas para la ubicación en Cali, Colombia.

## 📍 Alternativas al Mapa de Google

### Si prefieres no usar Google Maps:

1. **OpenStreetMap**: Alternativa gratuita
2. **Mapbox**: Mapas personalizables
3. **Imagen estática**: Captura de pantalla del mapa
4. **Enlace directo**: Solo el enlace a Google Maps

### Ejemplo con OpenStreetMap:
```html
<iframe 
    src="https://www.openstreetmap.org/export/embed.html?bbox=-100.7,20.9,-100.6,21.0&layer=mapnik"
    width="100%" 
    height="450" 
    frameborder="0" 
    scrolling="no" 
    marginheight="0" 
    marginwidth="0">
</iframe>
```

## 🎯 Consejos Finales

1. **Prueba el mapa** en diferentes dispositivos
2. **Verifica la precisión** de la ubicación
3. **Considera el zoom** apropiado para tu evento
4. **Mantén actualizado** si cambias de ubicación
5. **Proporciona instrucciones** adicionales si es necesario

---

**¡Un mapa claro ayudará a tus invitados a llegar sin problemas!** 🗺️✨ 