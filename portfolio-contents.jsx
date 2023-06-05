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
        "description": `Una aplicación web sencilla y práctica que te permite mantener un <span>registro organizado de tus contactos</span>. Con una <span>interfaz intuitiva y amigable</span>, podrás acceder fácilmente a un listado completo de usuarios y explorar sus detalles de contacto de manera eficiente. Además, cuenta con una <span>función de búsqueda</span> que te permite encontrar rápidamente la información que necesitas. Esta app está generada a partir de una <span>API</span> de contactos pública que devuelve un gran número de usuarios.`,
        "links": {
            "code": "https://github.com/LidiaA3/contact_book",
            "demo": "https://lidiaa3contactbook.netlify.app/"
        },
        "features": [
            "<span>Lista clara y ordenada de contactos:</span> Cada contacto se muestra con su nombre y una pequeña imagen, lo que te permite identificarlos rápidamente. La navegación suave te permite desplazarte hacia arriba y hacia abajo por la lista sin problemas.",
            "<span>Páginas individuales con información detallada:</span> Al hacer clic en un contacto en particular, se abrirá una página dedicada que muestra <span>información detallada sobre esa persona.</span> Podrás ver su nombre completo, número de teléfono, dirección de correo electrónico y cualquier otra información relevante. También se mostrará una imagen más grande del contacto para facilitar su reconocimiento.",
            "<span>Funcionalidad de búsqueda rápida:</span> Si necesitas encontrar un contacto específico, simplemente ingresa su nombre o apellido en el campo de búsqueda. La aplicación <span>filtrará automáticamente los resultados</span> relevantes, permitiéndote acceder rápidamente a la información que necesitas sin tener que desplazarte manualmente por toda la lista.",
            "La web está generada a partir de una <span>API</span>, está creada en su totalidad con <span>React</span> y utiliza <span>parámetros de ruta</span> para crear cada una de las páginas de usuario."
        ]
    },
    {
        "tittle": "Rock Paper Scissors",
        "subtittle": "¿Serás capaz de vencer a tu adversario?",
        "image": "/rockpaperscissors_mockup.webp",
        "icon": <PIconRockpaperscissors />,
        "id": "rockpaperscissors",
        "description": "El juego de 'Rock Paper Scissors' es una emocionante aplicación que te permite disfrutar del <span>clásico juego de manos en tu dispositivo.</span> Enfréntate a la inteligencia artificial en apasionantes partidas de <span>piedra, papel o tijeras.</span> Elige tu movimiento estratégicamente e intenta vencer a tu oponente en este divertido y adictivo juego. Sumérgete en la diversión del juego de 'Rock Paper Scissors' con esta aplicación digital creada en su totalidad con <span>React.</span>",
        "links": {
            "code": "https://github.com/LidiaA3/rockpaperscissors",
            "demo": "https://lidiaa3rockpaperscissors.netlify.app/"
        },
        "features": [
            "<span>Juego de 'Rock Paper Scissors':</span> Disfruta de emocionantes partidas de piedra, papel o tijeras directamente en tu dispositivo con un <span>diseño responsive.</span>",
            "<span>Interfaz intuitiva:</span> La aplicación cuenta con una interfaz sencilla y fácil de usar, con <span>opciones claras para seleccionar tu movimiento</span> (piedra, papel o tijeras) con un solo toque.",
            "<span>Resultados y puntuaciones:</span> Sigue el <span>registro de tus victorias y derrotas</span> para superarte en cada partida.",
            "App creada en su totalidad con <span>React con lógica propia de JavaScript.</span>"
        ]
    },
    {
        "tittle": "Tic Tac Toe",
        "subtittle": "El famoso tres en ralla ahora más estiloso",
        "image": "/tictactoe_mockup.webp",
        "icon": <PIconTictactoe />,
        "id": "tictactoe",
        "description": "La aplicación de Tic Tac Toe es una emocionante versión digital del <span>clásico juego de tres en raya.</span> Con una <span>interfaz fácil de usar</span> y divertidos gráficos, puedes desafiar a tus amigos en partidas rápidas y estratégicas. ¡Demuestra tu habilidad para <span>colocar tus X y O en el tablero</span> y lograr la línea ganadora! Disfruta de la emoción del Tic Tac Toe en esta aplicación digital, donde podrás poner a prueba tu estrategia y habilidades tácticas. ¡Demuestra quién es el mejor en este clásico juego de mesa!",
        "links": {
            "code": "https://github.com/LidiaA3/tictactoe",
            "demo": "https://lidiaa3tictactoe.netlify.app/"
        },
        "features": [
            "<span>Juego de Tic Tac Toe:</span> Disfruta de partidas de Tic Tac Toe en cualquier dispositivo, con un <span>diseño responsive.</span>",
            "<span>Interfaz intuitiva:</span> La aplicación presenta una <span>interfaz sencilla y fácil de entender</span>, con un tablero claro y botones para colocar tus movimientos.",
            "<span>Gestión de moviminetos:</span> Sigue el historial de tus partidas pudiendo <span>retroceder o avanzar</span> en los movimientos.",
            "<span>Fin de juego y reinicio:</span> Cuando se completa una partida, aparecerá un <span>popup con el jugador ganador y un botón con el que reiniciar</span> el juego fácilmente para continuar desafiando a tus oponentes."
        ]
    },
    {
        "tittle": "To Do App",
        "subtittle": "Organiza tus tareas",
        "image": "/todoapp_mockup.webp",
        "icon": <PIconTodoapp />,
        "id": "todoapp",
        "description": "La aplicación de lista de tareas (To-Do App) es una <span>herramienta práctica y eficiente</span> para gestionar y organizar tus tareas diarias. Con una <span>interfaz intuitiva y fácil de usar</span>, puedes crear, priorizar y realizar un seguimiento de tus tareas pendientes de manera efectiva. Mantén tus actividades bajo control y <span>aumenta tu productividad</span> con esta aplicación versátil. Organiza tu vida diaria y optimiza tu tiempo con la aplicación de lista de tareas (To-Do App). No dejes que las tareas se te escapen y disfruta de la satisfacción de <span>marcar tus tareas como completadas.</span> ¡Aumenta tu eficiencia y logra tus objetivos con facilidad!",
        "links": {
            "code": "https://github.com/LidiaA3/todoapp_react",
            "demo": "https://lidiaa3todoapp.netlify.app/"
        },
        "features": [
            "<span>Creación de tareas:</span> Crea fácilmente nuevas tareas, asignándoles un título y una descripción.",
            "<span>Marcado y seguimiento de progreso:</span> Marca las tareas completadas y realiza un seguimiento de tu progreso. Obtén una <span>visión general de tus tareas</span> pendientes y tareas completadas para evaluar tu productividad.",
            "<span>Eliminación de tareas:</span> Elimina las tareas cuando ya no las necesites o cuando las hayas completado de forma sencilla <span>con un solo click.</span>"
        ]
    },
    {
        "tittle": "Guess the Word",
        "subtittle": "Adivina la palabra y no te quedes sin vidas",
        "image": "/guessword_mockup.webp",
        "icon": <PIconGuessword />,
        "id": "guessword",
        "description": "El juego de 'Guess the word' es una emocionante aplicación en línea que te desafía a <span>adivinar una palabra oculta antes de quedarte sin vidas.</span> Cada palabra se presenta como una serie de guiones que representan las letras faltantes, y tu <span>objetivo es adivinar las letras correctas</span> para completar la palabra. Utiliza tu habilidad y conocimiento para adivinar la palabra antes de agotar todas tus vidas. ¡Sumérgete en la diversión del <span>juego de 'Guess the word'</span> en esta aplicación en línea! Pon a prueba tus habilidades de adivinanza y vocabulario mientras tratas de descubrir las palabras ocultas. ¿Estás listo para el desafío? Haz clic en el enlace y <span>comienza a jugar</span> ahora mismo.",
        "links": {
            "code": "https://github.com/LidiaA3/guessword",
            "demo": "https://lidiaa3guessword.netlify.app/"
        },
        "features": [
            "<span>Adivinanza de palabras:</span> El juego te presenta una <span>palabra oculta</span> representada por <span>guiones</span> que indican la cantidad de letras y su posición en la palabra.",
            "<span>Selección de letras:</span> Puedes seleccionar letras del alfabeto para adivinar la palabra. Si la letra está presente en la palabra, <span>se revelarán las posiciones correspondientes</span>; de lo contrario, <span>perderás una vida</span>.",
            "<span>Vidas:</span> Comienzas con un número determinado de vidas. Cada vez que adivines una <span>letra incorrecta, perderás una vida</span>. Trata de adivinar correctamente antes de quedarte sin vidas para ganar el juego.",
            "<span>Pop up de fin de partida:</span> Al adivinar la palabra o al quedarte sin vidas, se mostrará un pop up con un texto que demuestra si <span>has ganado o perdido</span> (en este caso aparecerá la palabra que no adivinaste).",
            "<span>Restart the game:</span> Podrás refrescar la web para volver a <span>jugar con una nueva palabra.</span>"
        ]
    },
    {
        "tittle": "Login Shop",
        "subtittle": "Diviértete comprando en esta falsa e-commerce",
        "image": "/loginshop_mockup.webp",
        "icon": <PIconLoginshop />,
        "id": "loginshop",
        "description": "La aplicación de 'False Login' es una herramienta de práctica diseñada para <span>simular un inicio de sesión</span> en una tienda en línea. Utilizando una <span>API pública,</span> la aplicación muestra una lista ficticia de productos disponibles para su visualización. Aunque el inicio de sesión utiliza un <span>usuario y contraseña fijos,</span> su objetivo es proporcionar una experiencia de usuario simulada para practicar el flujo de autenticación y la manipulación de datos de productos. Esta aplicación de 'False Login' con una lista de productos ficticios es una herramienta práctica para <span>familiarizarse con el flujo de autenticación,</span> la manipulación de datos de productos y la <span>gestión del carrito de la compra</span> en un contexto simulado.",
        "links": {
            "code": "https://github.com/LidiaA3/login-shop",
            "demo": "https://lidiaa3loginshop.netlify.app/"
        },
        "features": [
            "<span>Autenticación:</span> La aplicación presenta una interfaz de inicio de sesión donde los usuarios pueden ingresar un usuario y contraseña. Aunque siempre se utiliza el mismo conjunto de credenciales, el <span>proceso de inicio de sesión se simula</span> para familiarizarse con el flujo y la validación de credenciales.",
            "<span>Lista de productos:</span> Una vez iniciada la sesión, la aplicación muestra una <span>lista ficticia de productos obtenidos a través de una API pública.</span> Los datos de los productos, como nombre, descripción y precio, se generan para simular una tienda en línea.",
            "<span>Gestión del carrito de la compra:</span> Los usuarios pueden agregar productos ficticios al carrito de la compra. Aunque no hay una pasarela de pago real, esta funcionalidad permite simular la <span>experiencia de agregar y eliminar productos,</span> y practicar la manipulación de los elementos del carrito.",
            "<span>Navegación y experiencia del usuario:</span> La aplicación ofrece una <span>interfaz intuitiva y fácil de usar</span> para que los usuarios naveguen por la lista de productos y realicen acciones en el carrito de la compra. Aunque no hay una funcionalidad de pago real, el objetivo es proporcionar una <span>experiencia simulada de compra.</span>"
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
    {src: '/detail_project_magazine.webp', tittle: 'Proyecto de diseño de revista', text: "Este proyecto consistía en realizar el diseño y la maquetación de una revista de estilo de vida. El proyecto constaba de varias partes. En primer lugar el diseño de un lettering que funcionara como logotipo e imagen principal de la revista. También se necesitó editar y retocar fotografías de retrato y producto para simular anuncios publicitarios y reportajes. Finalmente se maquetó un reportaje consistente en un proyecto de diseño textil con temática de animales del Oceanogràfic de Valencia. Para este reportaje se realizaron seis ilustraciones distintas para plasmar en camisetas y bolsas."},
    {src: '/detail_project_postermuvim.webp', tittle: 'Diseño de carteles experimentación tipográfica', text: "Este proyecto consistía en maquetar carteles experimentando con la tipografía y fusionando técnicas distintas como pintura, grabado o serigrafía. En este caso se diseñaron dos carteles en tonos rojos y negros sobre fondo claro. Las letras se crearon por medio de sellos realizados sobre linóleo con la ayuda de gubias de distintos tamaños. Las manchas de color se produjeron utilizando pintura acrílica y cordón de yute. Uno de estos carteles fue expuesto en el MuVIM (Museo Valenciano de la Ilustración y de la Modernidad) en verano de 2022 como parte de la exposición 'Text-pontàniament'."},
    {src: '/detail_project_bookcover.webp', tittle: 'Diseño de portadas de libro', text: "La autora de novelas de misterio Amparo Arastell me propuso realizar el diseño de las portadas de sus dos novelas: 'El legado de las campanas' y 'El secreto de Amanda Soler'. En esta sección se recogen el diseño planteado para la primera novela y el diseño final de la segunda. Ambas son fotocomposiciones realizadas fusionando imágenes diferentes para sugerir la temática del libro."},
    {src: '/detail_project_webmusical.webp', tittle: 'Diseño y maquetación de una web musical', text: "Este proyecto consistía en realizar la maquetación de una web de temática musical utilizando Html, Css, JavaScript y Bootstrap. El resultado final es una web funcional que simula un blog para una banda de música de cuatro componentes.", url: 'https://lidiaa3.github.io/portfolio/webmusical/', urlText: 'Coonoce al grupo de música'},
    {src: '/detail_project_coleccionpendientes.webp', tittle: 'Diseño de colección de pendientes', text: "Este proyecto, siendo mi trabajo final de grado, consistía en el diseño de una colección de pendientes realizada con materiales plásticos y utilizando como método de fabricación el corte por láser. Para este proyecto, además del diseño de la colección, compuesta de ocho piezas, se realizó el diseño de una marca con la que promocionarlos, y el diseño y maquetación de una web a modo de tienda virtual.", url: 'https://lidiaa3.github.io/portfolio/webjoyeria/', urlText: 'Conoce más detalles sobre la colección'}
]

export default projects