//productos Gin
const productosGin=[
    {
        id: 100,
        titulo: "Beefeater",
        imagen: "img/beefeater.jpg",
        descripcion: "Esta ginebra, una London Dry Gin por antonomasia hecha con un intenso toque de enebro y fuertes notas cítricas, es una auténtica London Dry para quienes disfrutan del sabor auténtico de la ginebra. Con una tradición en el mundo de la destilación de 200 años, había una época en la que pesábamos a mano los extractos naturales de cada lote de ginebra que producíamos… Era hace dos días.",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 21000
    },
    {
        id: 101,
        titulo: "Bombay",
        imagen: "img/bombay-750-.png",
        descripcion: "Elaborado según una receta secreta que data de 1761, bombay sapphire se produce logrando una combinación única de diez ingredientes botánicos naturales seleccionados y un proceso exclusivo de destilación. El resultado es un complejo líquido aromático, con sabor refinado y un delicado equilibrio.",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 27000
    },
    {
        id: 102,
        titulo: "Bulldog",
        imagen: "img/bulldog.png",
        descripcion: "El aguardiente neutro de grano (96% ABV) se infunde con los sabores y aromas naturales de los 12 ingredientes botánicos característicos de BULLDOG Gin en un alambique de cobre. Esto permite que los ingredientes de la ginebra se maceren en el aguardiente antes de la destilación, para liberar sus aceites esenciales, dando lugar a la creación de vapor.",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 30000
    },
    {
        id: 103,
        titulo: "Heraclito & Macedonio",
        imagen: "img/heraclito.png",
        descripcion: "Su composición cuenta con 12 Botánicos de dominante enebro y notas florales, que aparte de aportarle un color rubí, único en su categoría, armoniza las notas de cardamomo y coriandro que se desarrollan en esta bebida, luego de una salida compleja de cítricos que se balancean en esta sutil formula con un leve picante que evoca una postal de la India. Cada botella es ÚNICA. Cada una de las botellas de Heráclito & Macedonio cuenta con sellos distintivos que las hacen irrepetibles.",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 11500
    },
    {
        id: 104,
        titulo: "Principe de los Apostoles",
        imagen: "img/principe.png",
        descripcion: "No vamos a contarte a qué huele o cómo entra en boca, Principe es una experiencia personal. Te invitamos a preparar un buen trago, o tomarlo solo refrescado y a viajar con El. Destilado en partidas de 200 litros de un alambique de cobre es tan artesanal como puede serlo.",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 8000
    },
    {
        id: 105,
        titulo: "Brighton",
        imagen: "img/brighton.png",
        descripcion: "Inspirado en una ciudad portuaria, donde la brisa de mar o la frescura de una noche cerca del río, te transporta a ese momento de escapada con amigos en primavera o en otoño, refrescando tu espíritu. Un gin de perfil clásico London Dry, con un diseño moderno y un precio accesible.",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 6500
    }
      
]

cargarProductos(productosGin)