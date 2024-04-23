const questions = [
    {
        id: 1,
        question: '¿Cómo te sientes en situaciones sociales?',
        answers: [
            { option: 'Introvertido', value: 1 },
            { option: 'Ambivertido', value: 2 },
            { option: 'Extrovertido', value: 3 }
        ]
    },
    {
        id: 2,
        question: '¿Prefieres trabajar en equipo o de forma independiente?',
        answers: [
            { option: 'Equipo', value: 1 },
            { option: 'Depende de la situación', value: 2 },
            { option: 'Independiente', value: 3 }
        ]
    },
    {
        id: 3,
        question: '¿Cómo reaccionas ante el estrés?',
        answers: [
            { option: 'Me estreso fácilmente', value: 1 },
            { option: 'Puedo manejarlo con calma', value: 2 },
            { option: 'Me motiva a dar lo mejor de mí', value: 3 }
        ]
    },
    {
        id: 4,
        question: '¿Prefieres planificar las cosas o dejarlas fluir?',
        answers: [
            { option: 'Planificar', value: 1 },
            { option: 'Depende de la situación', value: 2 },
            { option: 'Dejarlas fluir', value: 3 }
        ]
    },
    {
        id: 5,
        question: '¿Cómo te describirían tus amigos en una palabra?',
        answers: [
            { option: 'Cariñoso', value: 1 },
            { option: 'Versátil', value: 2 },
            { option: 'Enérgico', value: 3 }
        ]
    },
    {
        id: 6,
        question: '¿Qué tipo de películas prefieres?',
        answers: [
            { option: 'Drama', value: 1 },
            { option: 'Comedia', value: 2 },
            { option: 'Acción', value: 3 }
        ]
    },
    {
        id: 7,
        question: '¿Cómo prefieres pasar tus vacaciones?',
        answers: [
            { option: 'Relajándome en la playa', value: 1 },
            { option: 'Explorando nuevas ciudades', value: 2 },
            { option: 'Realizando actividades de aventura', value: 3 }
        ]
    },
    {
        id: 8,
        question: '¿Cómo sueles abordar nuevos desafíos?',
        answers: [
            { option: 'Con cautela', value: 1 },
            { option: 'Con curiosidad', value: 2 },
            { option: 'Con determinación', value: 3 }
        ]
    },
    {
        id: 9,
        question: '¿Cómo te sientes acerca de la rutina diaria?',
        answers: [
            { option: 'Me siento cómodo con ella', value: 1 },
            { option: 'Puede ser aburrida a veces', value: 2 },
            { option: 'La encuentro necesaria para mi vida', value: 3 }
        ]
    },
    {
        id: 10,
        question: '¿Qué actividad prefieres hacer en tu tiempo libre?',
        answers: [
            { option: 'Leer un libro', value: 1 },
            { option: 'Salir con amigos', value: 2 },
            { option: 'Practicar deporte', value: 3 }
        ]
    },
    {
        id: 11,
        question: '¿Cómo manejas los conflictos con otras personas?',
        answers: [
            { option: 'Trato de evitarlos', value: 1 },
            { option: 'Busco una solución pacífica', value: 2 },
            { option: 'Afronto el problema directamente', value: 3 }
        ]
    },
    {
        id: 12,
        question: '¿Cómo prefieres aprender nuevas cosas?',
        answers: [
            { option: 'Leyendo', value: 1 },
            { option: 'Experimentando', value: 2 },
            { option: 'Escuchando a otros', value: 3 }
        ]
    },
    {
        id: 13,
        question: '¿Qué tipo de música te gusta más?',
        answers: [
            { option: 'Clásica', value: 1 },
            { option: 'Pop/Rock', value: 2 },
            { option: 'Electrónica', value: 3 }
        ]
    },
    {
        id: 14,
        question: '¿Cómo te sientes acerca del cambio?',
        answers: [
            { option: 'Me cuesta adaptarme', value: 1 },
            { option: 'Lo acepto si es necesario', value: 2 },
            { option: 'Me emociona', value: 3 }
        ]
    },
    {
        id: 15,
        question: '¿Qué te motiva más en la vida?',
        answers: [
            { option: 'El éxito personal', value: 1 },
            { option: 'El crecimiento personal', value: 2 },
            { option: 'El bienestar de los demás', value: 3 }
        ]
    },
    {
        id: 16,
        question: '¿Cómo manejas las críticas?',
        answers: [
            { option: 'Me afectan mucho', value: 1 },
            { option: 'Las tomo en cuenta para mejorar', value: 2 },
            { option: 'Las uso como motivación', value: 3 }
        ]
    },
    {
        id: 17,
        question: '¿Qué te hace sentir realizado?',
        answers: [
            { option: 'Lograr mis metas personales', value: 1 },
            { option: 'Ayudar a los demás', value: 2 },
            { option: 'Aprender algo nuevo', value: 3 }
        ]
    },
    {
        id: 18,
        question: '¿Qué cualidad valoras más en los demás?',
        answers: [
            { option: 'Honestidad', value: 1 },
            { option: 'Empatía', value: 2 },
            { option: 'Determinación', value: 3 }
        ]
    },
    {
        id: 19,
        question: '¿Cómo sueles resolver problemas?',
        answers: [
            { option: 'Analizando cuidadosamente las opciones', value: 1 },
            { option: 'Siguiendo mi intuición', value: 2 },
            { option: 'Actuando con rapidez', value: 3 }
        ]
    },
    {
        id: 20,
        question: '¿Cómo te sientes acerca de la autoridad?',
        answers: [
            { option: 'Me incomoda', value:1 },
            { option: 'Me impresiona', value:2 },
            { option: 'Me enfada', value:3 }
        ]
         }
        ]
        const questionContainer = document.getElementById('question-container');
        const nextBtn = document.getElementById('next-btn');
        let currentQuestionIndex = 0;
        let answers = [];
        
        function showQuestion(index) {
            const question = questions[index];
            const options = question.answers.map(answer => `<input type="radio" name="question" value="${answer.value}"> ${answer.option}<br>`);
            questionContainer.innerHTML = `<p>${question.question}</p>${options.join('')}`;
        }
        
        nextBtn.addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name=question]:checked');
            if (selectedOption) {
                answers.push(parseInt(selectedOption.value));
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion(currentQuestionIndex);
                } else {
                    showResult();
                }
            } else {
                alert('Por favor selecciona una respuesta.');
            }
        });
        
        function showResult() {
            const totalScore = answers.reduce((acc, cur) => acc + cur, 0);
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<p>Tu puntaje total es: ${totalScore}</p>`;
        }
        
        
        showQuestion(currentQuestionIndex);
        function showResult() {
            const totalScore = answers.reduce((acc, cur) => acc + cur, 0);
            let personality = '';
            if (totalScore >= 20 && totalScore <= 35) {
                personality = 'Analista';
            } else if (totalScore >= 36 && totalScore <= 50) {
                personality = 'Diplomático';
            } else if (totalScore >= 51 && totalScore <= 65) {
                personality = 'Centinela';
            } else if (totalScore >= 66 && totalScore <= 80) {
                personality = 'Explorador';
            } else {
                personality = 'No se pudo determinar';
            }
           
            window.location.href = `resultado.html?personality=${personality}`;
        }
        

        // Función para obtener el parámetro de personalidad de la URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Obtener el parámetro de personalidad de la URL
const personalityParam = getParameterByName('personality');

// Mostrar la personalidad en la página
const personalityContainer = document.getElementById('personality');
if (personalityParam) {
    personalityContainer.innerHTML = `<p>Tu personalidad es: ${personalityParam}</p>`;
} else {
    personalityContainer.innerHTML = `<p>No se pudo determinar la personalidad.</p>`;
}
