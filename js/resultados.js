const questions = [
    {
        id: "p0",
        question: "¿Prefieres pasar tiempo solo, con unas pocas personas cercanas o rodeado de mucha gente?",
        options: [
            { answer: "Solo", value: 1 },
            { answer: "Con unas pocas personas cercanas", value: 2 },
            { answer: "Rodeado de mucha gente", value: 3 }
        ]
    },
    {
        id: "p1",
        question: "¿Cómo te sientes generalmente en situaciones nuevas o desconocidas?",
        options: [
            { answer: "Emocionado/a, me gusta probar cosas nuevas", value: 1 },
            { answer: "Nervioso/a, prefiero lo familiar", value: 2 },
            { answer: "Indiferente, puedo adaptarme fácilmente", value: 3 }
        ]
    },
    {
        id: "p2",
        question: "¿Eres más propenso/a a ser organizado/a, flexible o improvisado/a?",
        options: [
            { answer: "Organizado/a", value: 1 },
            { answer: "Flexible", value: 2 },
            { answer: "Improvisado/a", value: 3 }
        ]
    },
    {
        id: "p3",
        question: "¿Qué tipo de actividades prefieres en tu tiempo libre?",
        options: [
            { answer: "Actividades tranquilas como leer o pintar", value: 1 },
            { answer: "Salir a explorar o hacer deporte", value: 2 },
            { answer: "Pasando tiempo con amigos y familiares", value: 3 }
        ]
    },
    {
        id: "p4",
        question: "¿Cómo sueles enfrentar los problemas?",
        options: [
            { answer: "Pensando detenidamente en todas las opciones", value: 1 },
            { answer: "Actuando rápidamente para resolverlos", value: 2 },
            { answer: "Consultando con otros y buscando ayuda", value: 3 }
        ]
    },
    {
        id: "p5",
        question: "¿Cuál es tu enfoque principal al tomar decisiones importantes?",
        options: [
            { answer: "Analizar los pros y los contras detalladamente.", value: 1 },
            { answer: "Seguir mi intuición y sentimientos.", value: 2 },
            { answer: "Buscar consejo y opiniones de otras personas.", value: 3 }
        ]
    },
    {
        id: "p6",
        question: "¿Cómo te sientes acerca de los cambios inesperados en tu vida?",
        options: [
            { answer: "Me siento incómodo/a y prefiero la estabilidad.", value: 1 },
            { answer: "Los veo como desafíos emocionantes que me permiten crecer.", value: 2 },
            { answer: "Los acepto con calma y busco adaptarme lo mejor posible.", value: 3 }
        ]
    },
    {
        id: "p7",
        question: "¿Qué te motiva más en la vida?",
        options: [
            { answer: "Lograr metas concretas y alcanzar el éxito.", value: 1 },
            { answer: "Experimentar y disfrutar del momento presente.", value: 2 },
            { answer: "Aprender y crecer como persona.", value: 3 }
        ]
    },
    {
        id: "p8",
        question: "¿Qué importancia le das a la planificación en tu vida?",
        options: [
            { answer: "Soy bastante organizado/a y me gusta tener un plan para todo.", value: 1 },
            { answer: "Prefiero mantenerme flexible y adaptarme según las circunstancias.", value: 2 },
            { answer: "La planificación es importante, pero también disfruto de la espontaneidad.", value: 3 }
        ]
    },
    {
        id: "p9",
        question: "¿Qué cualidad valoras más en ti mismo/a?",
        options: [
            { answer: "Mi capacidad para ser honesto/a y leal.", value: 1 },
            { answer: "Mi creatividad y capacidad de pensamiento original.", value: 2 },
            { answer: "Mi empatía y capacidad para entender a los demás.", value: 3 }
        ]
    },
    {
        id: "p10",
        question: "¿Cómo te sientes acerca de las normas establecidas por la sociedad?",
        options: [
            { answer: "Las respeto y trato de seguirlas en la medida de lo posible.", value: 1 },
            { answer: "A veces las cuestiono y prefiero seguir mi propio camino.", value: 2 },
            { answer: "Las encuentro restrictivas y me gusta desafiarlas.", value: 3 }
        ]
    },
    {
        id: "p11",
        question: "¿Qué te gusta más en una conversación?",
        options: [
            { answer: "Discutir ideas y temas profundos.", value: 1 },
            { answer: "Compartir historias personales y conectar emocionalmente.", value: 2 },
            { answer: "Hacer bromas y pasarlo bien con los demás.", value: 3 }
        ]
    },
    {
        id: "p12",
        question: "¿Cómo te sientes acerca de la rutina en tu vida diaria?",
        options: [
            { answer: "Me siento cómodo/a con una rutina establecida.", value: 1 },
            { answer: "A veces me aburre y busco cambiar las cosas.", value: 2 },
            { answer: "Prefiero la variedad y la espontaneidad en mi vida.", value: 3 }
        ]
    },
    {
        id: "p13",
        question: "¿Cómo manejas el estrés en tu vida?",
        options: [
            { answer: "Busco soluciones prácticas y me mantengo ocupado/a.", value: 1 },
            { answer: "Necesito tiempo para reflexionar y recuperarme.", value: 2 },
            { answer: "Busco apoyo en amigos y familiares para superarlo.", value: 3 }
        ]
    },

    {
        id: "p14",
        question: "¿Qué tipo de libros o películas prefieres?",
        options: [
            { answer: "Aquellas que me desafían intelectualmente y me hacen reflexionar.", value: 1 },
            { answer: "Historias emocionales y profundas que me conmuevan.", value: 2 },
            { answer: "Películas o libros divertidos que me hagan reír y entretenerme.", value: 3 }
        ]
    },
    {
        id: "p15",
        question: "¿Cómo te sientes acerca de tomar riesgos en tu vida?",
        options: [
            { answer: "Prefiero evitar riesgos y mantenerme seguro/a.", value: 1 },
            { answer: "A veces estoy dispuesto/a a tomar riesgos calculados.", value: 2 },
            { answer: "Disfruto tomando riesgos y buscando nuevas experiencias.", value: 3 }
        ]
    },
    {
        id: "p16",
        question: "¿Qué cualidad crees que es más importante en un amigo/a?",
        options: [
            { answer: "Lealtad y confiabilidad.", value: 1 },
            { answer: "Comprensión y empatía.", value: 2 },
            { answer: "Diversión y sentido del humor.", value: 3 }
        ]
    },
    {
        id: "p17",
        question: "¿Qué te hace sentir más realizado/a en la vida?",
        options: [
            { answer: "Alcanzar mis metas profesionales y personales.", value: 1 },
            { answer: "Hacer una diferencia positiva en la vida de los demás.", value: 2 },
            { answer: "Experimentar nuevas cosas y vivir en el momento presente.", value: 3 }
        ]
    },

    {
        id: "p18",
        question: "¿Cómo te sientes acerca de la competencia en el trabajo o en actividades recreativas?",
        options: [
            { answer: "Me motiva a dar lo mejor de mí y superarme.", value: 1 },
            { answer: "A veces me siento incómodo/a y prefiero evitarla.", value: 2 },
            { answer: "No me importa mucho, prefiero colaborar que competir.", value: 3 }
        ]
    },
    {
        id: "p19",
        question: "¿Qué te gusta más en un ambiente de trabajo?",
        options: [
            { answer: "Un ambiente competitivo que me motive a mejorar.", value: 1 },
            { answer: "Un ambiente colaborativo donde todos se apoyen mutuamente.", value: 2 },
            { answer: "Un ambiente relajado donde pueda trabajar a mi propio ritmo.", value: 3 }
        ]
    },
    {
        id: "p20",
        question: "¿Cómo prefieres recibir retroalimentación sobre tu trabajo o desempeño?",
        options: [
            { answer: "De manera directa y constructiva, para poder mejorar.", value: 1 },
            { answer: "De forma delicada y considerada, para no herir mis sentimientos.", value: 2 },
            { answer: "De manera equilibrada, reconociendo tanto lo positivo como lo negativo.", value: 3 }
        ]
    },
    {
        id: "p21",
        question: "¿Cómo sueles reaccionar ante el cumplido de alguien hacia ti?",
        options: [
            { answer: "Agradezco y acepto el cumplido con gratitud.", value: 1 },
            { answer: "A veces me siento incómodo/a y tiendo a minimizarlo.", value: 2 },
            { answer: "Lo acepto con alegría y lo celebro con la persona que me lo dio.", value: 3 }
        ]
    },
    {
        id: "p22",
        question: "¿Cómo manejas el tiempo y los plazos de entrega?",
        options: [
            { answer: "Soy muy organizado/a y suelo cumplir con los plazos establecidos.", value: 1 },
            { answer: "A veces procrastino, pero siempre logro terminar a tiempo.", value: 2 },
            { answer: "Me gusta trabajar bajo presión y suelo dejar las cosas para el último momento.", value: 3 }
        ]
    },
    {
        id: "p23",
        question: "¿Qué importancia le das a la honestidad en tus relaciones personales?",
        options: [
            { answer: "Es fundamental; siempre intento ser honesto/a y espero lo mismo de los demás.", value: 1 },
            { answer: "Es importante, pero a veces es necesario guardar ciertas cosas para evitar conflictos.", value: 2 },
            { answer: "Puede ser relativa; a veces es mejor omitir la verdad para no lastimar a los demás.", value: 3 }
        ]
    },
    {
        id: "p24",
        question: "¿Cómo te sientes acerca de liderar un grupo de personas?",
        options: [
            { answer: "Me siento cómodo/a asumiendo la responsabilidad y tomando decisiones.", value: 1 },
            { answer: "A veces me siento inseguro/a, pero me gusta trabajar en equipo.", value: 2 },
            { answer: "Prefiero seguir las órdenes de alguien más que liderar yo mismo/a.", value: 3 }
        ]
    },
    {
        id: "p25",
        question: "¿Qué te hace sentir más satisfecho/a en tu trabajo?",
        options: [
            { answer: "Tener la oportunidad de resolver problemas complejos y desafiantes.", value: 1 },
            { answer: "Sentir que mi trabajo tiene un impacto positivo en la vida de los demás.", value: 2 },
            { answer: "Disfrutar de un ambiente de trabajo colaborativo y amigable.", value: 3 }
        ]
    },
    {
        id: "p26",
        question: "¿Cómo prefieres manejar el estrés?",
        options: [
            { answer: "Buscando actividades que me ayuden a relajarme y desconectar.", value: 1 },
            { answer: "Organizando mi tiempo y estableciendo prioridades claras.", value: 2 },
            { answer: "Hablando con amigos o familiares sobre lo que me preocupa.", value: 3 }
        ]
    },
    {
        id: "p27",
        question: "¿Cómo te sientes acerca de la tecnología y las redes sociales?",
        options: [
            { answer: "Me gusta estar al día con la tecnología y uso las redes sociales regularmente.", value: 1 },
            { answer: "A veces siento que me abruma y necesito desconectar.", value: 2 },
            { answer: "No me interesan mucho y prefiero interactuar en persona.", value: 3 }
        ]
    },
    {
        id: "p28",
        question: "¿Qué te hace sentir más motivado/a en tu vida cotidiana?",
        options: [
            { answer: "Tener metas claras y desafiantes que me impulsen a mejorar", value: 1 },
            { answer: "Experimentar nuevas cosas y buscar aventuras emocionantes", value: 2 },
            { answer: "Disfrutar de momentos de tranquilidad y conexión con los demás", value: 3 }
        ]
    },
    {
        id: "p29",
        question: "¿Cómo te sientes acerca de los cambios en tu rutina diaria?",
        options: [
            { answer: "Me siento incómodo/a y prefiero mantenerme en mi zona de confort", value: 1 },
            { answer: "Los veo como oportunidades para crecer y aprender algo nuevo", value: 2 },
            { answer: "Me adapto fácilmente y encuentro maneras de aprovecharlos", value: 3 }
        ]
    }

];

const respuestas = {};


document.addEventListener('DOMContentLoaded', function() {
    
    const urlParams = new URLSearchParams(window.location.search);

    // calcular la puntuación total
    let totalPuntos = 0;
    for (let i = 0; i < 30; i++) {
        const respuesta = parseInt(urlParams.get('p' + i));
        totalPuntos += respuesta;
    }

    // Determinar la personalidad 
    let personalidad = '';
    if (totalPuntos < 23) {
        personalidad = 'Analista';
    } else if (totalPuntos >= 23 && totalPuntos < 45) {
        personalidad = 'Diplomático';
    } else if (totalPuntos >= 45 && totalPuntos < 75) {
        personalidad = 'Centinela';
    } else {
        personalidad = 'Explorador';
    }

    
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = `<p>Tu puntuación total es: ${totalPuntos}</p>
                                    <p>Tu personalidad es: ${personalidad}</p>`;
});


