// Configuración de la Invitación de Boda
// Modifica estos valores según tus necesidades

const CONFIG = {
    // Información de los Novios
    NOVIOS: {
        NOVIA: "María del Pilar Delgado",
        NOVIO: "Maicol Andrés Márquez",
        TITULO: "Se casan"
    },
    
    // Fecha y Hora del Evento
    EVENTO: {
        FECHA: "15 de Diciembre, 2024",
        HORA: "2:00 PM",
        FECHA_ISO: "2024-12-15T14:00:00", // Para la cuenta regresiva
        FECHA_LIMITE_RSVP: "1 de Diciembre"
    },
    
    // Ubicación
    UBICACION: {
        NOMBRE: "Hacienda San Miguel",
        DIRECCION: "Carretera Federal 85, Km 25",
        CIUDAD: "San Miguel de Allende, GTO",
        MAPA_GOOGLE: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5!2d-100.7!3d20.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU0JzAwLjAiTiAxMDDCsDQyJzAwLjAiVw!5e0!3m2!1ses!2smx!4v1234567890"
    },
    
    // Código de Vestimenta
    VESTIMENTA: "Formal / Elegante Sport",
    
    // Políticas
    POLITICAS: {
        NO_NINOS: true,
        NO_NINOS_TEXTO: "No se permiten niños"
    },
    
    // Enlaces
    ENLACES: {
        GOOGLE_FORMS: "https://forms.google.com/your-form-link",
        MUSICA_FONDO: "music/romantic-music.mp3"
    },
    
    // Colores del Tema
    COLORES: {
        PRIMARIO: "#d4af37",      // Dorado
        SECUNDARIO: "#8b7355",    // Marrón
        ACENTO: "#f5f5dc",        // Beige
        TEXTO_OSCURO: "#2c2c2c",  // Negro suave
        TEXTO_CLARO: "#ffffff"    // Blanco
    },
    
    // Configuración de la Música
    MUSICA: {
        AUTOPLAY: true,
        LOOP: true,
        VOLUMEN: 0.5
    },
    
    // Configuración de la Cuenta Regresiva
    CUENTA_REGRESIVA: {
        MOSTRAR_SEGUNDOS: true,
        FORMATO_24H: false
    }
};

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
} 