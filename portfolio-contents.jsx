import PIconContactbook from "./src/components/icons/PIconContactbook"
import PIconGuessword from "./src/components/icons/PIconGuessword"
import PIconLoginshop from "./src/components/icons/PIconLoginshop"
import PIconRockpaperscissors from "./src/components/icons/PIconRockpaperscissors"
import PIconTictactoe from "./src/components/icons/PIconTictactoe"
import PIconTodoapp from "./src/components/icons/PIconTodoapp"

const projects = [
    {
        "tittle": "Contact Book",
        "subtittle": "Todos los contactos al alcance de un click",
        "image": "/contactbook_mockup.webp",
        "icon": <PIconContactbook />,
        "id": "contactbook",
        "description": `Una aplicación web sencilla y práctica que te permite mantener un registro organizado de tus contactos. Con una interfaz intuitiva y amigable, podrás acceder fácilmente a un listado completo de usuarios y explorar sus detalles de contacto de manera eficiente. Además, cuenta con una función de búsqueda que te permite encontrar rápidamente la información que necesitas. Esta app está generada a partir de una API de contactos pública que devuelve un gran número de usuarios.`,
        "links": {
            "code": "https://github.com/LidiaA3/contact_book",
            "demo": "https://lidiaa3contactbook.netlify.app/"
        },
        "features": [
            "Lista clara y ordenada de contactos: Cada contacto se muestra con su nombre y una pequeña imagen, lo que te permite identificarlos rápidamente. La navegación suave te permite desplazarte hacia arriba y hacia abajo por la lista sin problemas.",
            "Páginas individuales con información detallada: Al hacer clic en un contacto en particular, se abrirá una página dedicada que muestra información detallada sobre esa persona. Podrás ver su nombre completo, número de teléfono, dirección de correo electrónico y cualquier otra información relevante. También se mostrará una imagen más grande del contacto para facilitar su reconocimiento.",
            "Funcionalidad de búsqueda rápida: Si necesitas encontrar un contacto específico, simplemente ingresa su nombre o apellido en el campo de búsqueda. La aplicación filtrará automáticamente los resultados relevantes, permitiéndote acceder rápidamente a la información que necesitas sin tener que desplazarte manualmente por toda la lista.",
            "La web está generada a partir de una API, está creada en su totalidad con React y utiliza parámetros de ruta para crear cada una de las páginas de usuario."
        ]
    },
    {
        "tittle": "Rock Paper Scissors",
        "subtittle": "¿Serás capaz de vencer a tu adversario?",
        "image": "/rockpaperscissors_mockup.webp",
        "icon": <PIconRockpaperscissors />,
        "id": "rockpaperscissors",
        "description": "El juego de 'Rock Paper Scissors' es una emocionante aplicación que te permite disfrutar del clásico juego de manos en tu dispositivo. Enfréntate a la inteligencia artificial en apasionantes partidas de piedra, papel o tijeras. Elige tu movimiento estratégicamente e intenta vencer a tu oponente en este divertido y adictivo juego. Sumérgete en la diversión del juego de 'Rock Paper Scissors' con esta aplicación digital creada en su totalidad con React",
        "links": {
            "code": "https://github.com/LidiaA3/rockpaperscissors",
            "demo": "https://lidiaa3rockpaperscissors.netlify.app/"
        },
        "features": [
            "Juego de 'Rock Paper Scissors': Disfruta de emocionantes partidas de piedra, papel o tijeras directamente en tu dispositivo con un diseño responsive.",
            "Interfaz intuitiva: La aplicación cuenta con una interfaz sencilla y fácil de usar, con opciones claras para seleccionar tu movimiento (piedra, papel o tijeras) con un solo toque.",
            "Resultados y puntuaciones: Sigue el registro de tus victorias y derrotas para superarte en cada partida.",
            "App creada en su totalidad con React con lógica propia de JavaScript."
        ]
    },
    {
        "tittle": "Tic Tac Toe",
        "subtittle": "El famoso tres en ralla ahora más estiloso",
        "image": "/tictactoe_mockup.webp",
        "icon": <PIconTictactoe />,
        "id": "tictactoe",
        "description": "La aplicación de Tic Tac Toe es una emocionante versión digital del clásico juego de tres en raya. Con una interfaz fácil de usar y divertidos gráficos, puedes desafiar a tus amigos en partidas rápidas y estratégicas. ¡Demuestra tu habilidad para colocar tus X y O en el tablero y lograr la línea ganadora! Disfruta de la emoción del Tic Tac Toe en esta aplicación digital, donde podrás poner a prueba tu estrategia y habilidades tácticas. ¡Demuestra quién es el mejor en este clásico juego de mesa!",
        "links": {
            "code": "https://github.com/LidiaA3/tictactoe",
            "demo": "https://lidiaa3tictactoe.netlify.app/"
        },
        "features": [
            "Juego de Tic Tac Toe: Disfruta de partidas de Tic Tac Toe en cualquier dispositivo, con un diseño responsive.",
            "Interfaz intuitiva: La aplicación presenta una interfaz sencilla y fácil de entender, con un tablero claro y botones para colocar tus movimientos.",
            "Gestión de moviminetos: Sigue el historial de tus partidas pudiendo retroceder o avanzar en los movimientos.",
            "Fin de juego y reinicio: Cuando se completa una partida, aparecerá un popup con el jugador ganador y un botón con el que reiniciar el juego fácilmente para continuar desafiando a tus oponentes."
        ]
    },
    {
        "tittle": "To Do App",
        "subtittle": "Organiza tus tareas",
        "image": "/todoapp_mockup.webp",
        "icon": <PIconTodoapp />,
        "id": "todoapp",
        "description": "La aplicación de lista de tareas (To-Do App) es una herramienta práctica y eficiente para gestionar y organizar tus tareas diarias. Con una interfaz intuitiva y fácil de usar, puedes crear, priorizar y realizar un seguimiento de tus tareas pendientes de manera efectiva. Mantén tus actividades bajo control y aumenta tu productividad con esta aplicación versátil. Organiza tu vida diaria y optimiza tu tiempo con la aplicación de lista de tareas (To-Do App). No dejes que las tareas se te escapen y disfruta de la satisfacción de marcar tus tareas como completadas. ¡Aumenta tu eficiencia y logra tus objetivos con facilidad!",
        "links": {
            "code": "https://github.com/LidiaA3/todoapp_react",
            "demo": "https://lidiaa3todoapp.netlify.app/"
        },
        "features": [
            "Creación de tareas: Crea fácilmente nuevas tareas, asignándoles un título y una descripción.",
            "Marcado y seguimiento de progreso: Marca las tareas completadas y realiza un seguimiento de tu progreso. Obtén una visión general de tus tareas pendientes y tareas completadas para evaluar tu productividad.",
            "Eliminación de tareas: Elimina las tareas cuando ya no las necesites o cuando las hayas completado de forma sencilla con un solo click."
        ]
    },
    {
        "tittle": "Guess the Word",
        "subtittle": "Adivina la palabra y no te quedes sin vidas",
        "image": "/guessword_mockup.webp",
        "icon": <PIconGuessword />,
        "id": "guessword",
        "description": "El juego de 'Guess the word' es una emocionante aplicación en línea que te desafía a adivinar una palabra oculta antes de quedarte sin vidas. Cada palabra se presenta como una serie de guiones que representan las letras faltantes, y tu objetivo es adivinar las letras correctas para completar la palabra. Utiliza tu habilidad y conocimiento para adivinar la palabra antes de agotar todas tus vidas. ¡Sumérgete en la diversión del juego de 'Guess the word' en esta aplicación en línea! Pon a prueba tus habilidades de adivinanza y vocabulario mientras tratas de descubrir las palabras ocultas. ¿Estás listo para el desafío? Haz clic en el enlace y comienza a jugar ahora mismo.",
        "links": {
            "code": "https://github.com/LidiaA3/guessword",
            "demo": "https://lidiaa3guessword.netlify.app/"
        },
        "features": [
            "Adivinanza de palabras: El juego te presenta una palabra oculta representada por guiones que indican la cantidad de letras y su posición en la palabra.",
            "Selección de letras: Puedes seleccionar letras del alfabeto para adivinar la palabra. Si la letra está presente en la palabra, se revelarán las posiciones correspondientes; de lo contrario, perderás una vida.",
            "Vidas: Comienzas con un número determinado de vidas. Cada vez que adivines una letra incorrecta, perderás una vida. Trata de adivinar correctamente antes de quedarte sin vidas para ganar el juego.",
            "Pop up de fin de partida: Al adivinar la palabra o al quedarte sin vidas, se mostrará un pop up con un texto que demuestra si has ganado o perdido (en este caso aparecerá la palabra que no adivinaste).",
            "Restart the game: Podrás refrescar la web para volver a jugar con una nueva palabra."
        ]
    },
    {
        "tittle": "Login Shop",
        "subtittle": "Diviértete comprando en esta falsa e-commerce",
        "image": "/loginshop_mockup.webp",
        "icon": <PIconLoginshop />,
        "id": "loginshop",
        "description": "La aplicación de 'False Login' es una herramienta de práctica diseñada para simular un inicio de sesión en una tienda en línea. Utilizando una API pública, la aplicación muestra una lista ficticia de productos disponibles para su visualización. Aunque el inicio de sesión utiliza un usuario y contraseña fijos, su objetivo es proporcionar una experiencia de usuario simulada para practicar el flujo de autenticación y la manipulación de datos de productos. Esta aplicación de 'False Login' con una lista de productos ficticios es una herramienta práctica para familiarizarse con el flujo de autenticación, la manipulación de datos de productos y la gestión del carrito de la compra en un contexto simulado.",
        "links": {
            "code": "https://github.com/LidiaA3/login-shop",
            "demo": "https://lidiaa3loginshop.netlify.app/"
        },
        "features": [
            "Autenticación: La aplicación presenta una interfaz de inicio de sesión donde los usuarios pueden ingresar un usuario y contraseña. Aunque siempre se utiliza el mismo conjunto de credenciales, el proceso de inicio de sesión se simula para familiarizarse con el flujo y la validación de credenciales.",
            "Lista de productos: Una vez iniciada la sesión, la aplicación muestra una lista ficticia de productos obtenidos a través de una API pública. Los datos de los productos, como nombre, descripción y precio, se generan para simular una tienda en línea.",
            "Gestión del carrito de la compra: Los usuarios pueden agregar productos ficticios al carrito de la compra. Aunque no hay una pasarela de pago real, esta funcionalidad permite simular la experiencia de agregar y eliminar productos, y practicar la manipulación de los elementos del carrito.",
            "Navegación y experiencia del usuario: La aplicación ofrece una interfaz intuitiva y fácil de usar para que los usuarios naveguen por la lista de productos y realicen acciones en el carrito de la compra. Aunque no hay una funcionalidad de pago real, el objetivo es proporcionar una experiencia simulada de compra"
        ]
    }
]

export const skills = ["Figma", "Ilustrator", "Photoshop", "After Effects", "InDesign", "HTML", "CSS", "Sass", "Flexbox", "DOM", "Netlify", "GitHub", "Git", "JavaScript", "Wordpress", "Basic PHP", "React", "Vite", "Hooks", "Context API", "UX/UI", "Design system", "Jira", "Metodología Agile"]

export const galleryImgs = [
    {src: '/diseño_de_carteles.webp', text: 'Diseño de carteles estilo póster'},
    {src: '/diseño_producto_pendientes.webp', text: 'Diseño de colección de pendientes'},
    {src: '/diseño_textil_sobre_revista.webp', text: 'Diseño de interior de revista con productos de textil'},
    {src: '/diseño_reportaje_de_revista_2.webp', text: 'Diseño de interior de revista con reportaje'},
    {src: '/diseño_reportaje_de_revista.webp', text: 'Diseño de interior de revista con reportaje'},
    {src: '/diseño_portada_libro_2.webp', text: 'Diseño de portada para la novela El secreto de Amanda Soler'},
    {src: '/diseño_portada_libro_1.webp', text: 'Diseño de portada para la novela El legado de las campanas'},
    {src: '/diseño_portada_de_revista.webp', text: 'Diseño de portada de revista parteindo de un lettering'},
    {src: '/diseño_de_web_musical.webp', text: 'Diseño de web con temática musical'}
]

export const accordionGallery = [
    {src: '/detail_project_magazine.webp', tittle: 'Proyecto de diseño de revista', text: 'Lettering edicion fotos maquetación y composición'},
    {src: '/detail_project_postermuvim.webp', tittle: 'Diseño de carteles experimentación tipográfica', text: 'Trabajo presentado en muvim'},
    {src: '/detail_project_bookcover.webp', tittle: 'Diseño de portadas de libro', text: 'Explicación de proyecto'},
    {src: '/detail_project_webmusical.webp', tittle: 'Diseño y maquetación de web musical', text: 'Explicación de proyecto y link a demo'},
    {src: '/detail_project_coleccionpendientes.webp', tittle: 'Diseño de colección de pendientes', text: 'Explicación de proyecto TFG y link a web demo'}
]

export default projects