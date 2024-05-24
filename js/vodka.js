const productosVodka = [
    {
        id: 400,
        titulo: "Voda Absolut",
        imagen: "img/absolut.png",
        descripcion: "El primero de todos los Absolut, producido en 1979. Origen: Åhus, Suecia. Tipo de producto: Vodka Premium. Grado alcohólico: 40% Alc/Vol. Tipo de elaboración: Destilación continua. Descripción: Es producido del trigo de invierno, un grano de trigo robusto que da su carácter de grano liso al vodka. Absolut Vodka es un vodka sueco elaborado exclusivamente a partir de ingredientes naturales, y a diferencia de algunos otros vodkas, no contiene azúcar añadido. De hecho, Absolut es tan limpio como puede ser el vodka. Aun así, tiene un cierto sabor: rico, con cuerpo y complejo, pero suave y maduro con un carácter distinto de cereales, seguido de un toque de frutos secos.",
        categoria: {
            nombre: "Vodka",
            id: "vodka"
        },
        precio: 17080
    },
    {
        id: 401,
        titulo: "Vodka Grey Goose",
        imagen: "img/greygoose.png",
        descripcion: "Es un vodka Premium producido en Francia de 40,0 % alc./vol., obtenido por un proceso de quíntuple destilación en alambique de columna, de grano de trigo de invierno de la zona de La Beauce, con agua de pozo artesano filtrada con piedra caliza de la región de Cognac.Se empezó a producir en 1997, según un diseño del estadounidense Sidney Frank. Se presenta en una botella estilizada, transparente, con etiqueta grabada en la que aparece un ganso volando con tapón de corcho. El Vodka Grey Goose es elaborado con el mejor trigo francés producido en la popular región de La Beauce y la más pura agua de pozo artesano. Filtrado con piedra caliza de champagne y destilado cuidadosamente de acuerdo a los cánones tradicionales de la región francesa de Cognac. Su destilación se basa en un proceso patentado de cinco destilaciones.",
        categoria: {
            nombre: "Vodka",
            id: "vodka"
        },
        precio: 87900
    },
    {
        id: 402,
        titulo: "Vodka Frances Ciroc",
        imagen: "img/ciroc.png",
        descripcion: "Curiosamente, a pesar de que el vodka es una bebida típicamente rusa no está elaborada ahí, sino en Francia, además tampoco está elaborado únicamente con cereales o tubérculos como es habitual, sino que principalmente está hecho con uvas blancas de dos tipos: la Mauzac Blanc de la región de Gaillac y la Ugni Blanc de la región de Cognac. Al estar hecho con uvas tiene un sabor claramente diferente al vodka habitual, a pesar de conservar la esencia de este, tiene un aroma distinto, y un sabor frutal. Durante el proceso de la elaboración el Cîroc Vodka se destila 5 veces, lo que hace que bebida tenga al final de la destilación un contenido alcohólico muy alto (96 grados), tanto que después de terminar el proceso de destilado tiene que mezclarse con agua para alcanzar los 40. Al final se obtiene una bebida con mucha fuerza y cuerpo, de aroma suave y afrutado y un sabor suave pero duradero, también con la esencia de las frutas.",
        categoria: {
            nombre: "Vodka",
            id: "vodka"
        },
        precio: 83600
    },
    {
        id: 403,
        titulo: "Vodka Absolut Wild Berri",
        imagen: "img/absolutwild.png",
        descripcion: "Absolut Wild Berri es el nuevo sabor de la marca, contiene un sabor distintivo a berries silvestres con notas refrescantes dulces. Absolut Wild Berri es el aperitivo perfecto para una fiesta de inauguración, un rompehielos ideal para esa reunión espontánea después del trabajo, y todo menos un comodín cuando se trata de mezclar con otros. Con un sabor a arándanos, moras y fresas silvestres recién recogidos, Absolut Wild Berri proporciona un complejo sabor a bayas para que puedas perfeccionar fácilmente tu bebida.",
        categoria: {
            nombre: "Vodka",
            id: "vodka"
        },
        precio: 18500
    },
    {
        id: 404,
        titulo: "Vodka Absolut Extrakt",
        imagen: "img/absolutextra.png",
        descripcion: "Absolut Extrakt ha sido elaborado con vodka Absolut de primera calidad de una sola fuente y aromas naturales, entre los que se incluye extracto de cardamomo verde. El vodka Absolut se elabora con agua y trigo de invierno. El agua procede de un pozo ubicado en la ciudad de Åhus que, por su profundidad, está protegido de impurezas. Lo que diferencia al trigo de invierno del resto de cultivos es que se siembra en otoño y se cosecha el otoño siguiente. Durante el periodo comprendido entre la siembra y la cosecha, el trigo crece bajo las nieves suecas, lo que permite obtener una dureza de grano característica. Además, se reduce al mínimo el uso de fertilizantes.",
        categoria: {
            nombre: "Vodka",
            id: "vodka"
        },
        precio: 29750
    },
    {
        id: 405,
        titulo: "Vodka Smirnoff Red",
        imagen: "img/smirnoff.png",
        descripcion: "Smirnoff es un vodka de origen ruso, de 37,5% alc./vol., obtenido por triple destilación del alcohol de grano, y filtrado por carbón, cuya fabricación se inició en el año1864 por Pyotr Alexandrovich Smirnov. Tras perder la fábrica primitiva a manos del Tzar ruso, se instalaron en Turquía, Polonia y Francia, y posteriormente en Estados Unidos, tomando desde entonces la denominación Smirnoff, en lugar del Smirnov original. En la actualidad, es propiedad del grupo multinacional Diageo de origen inglés. Se presenta en una botella característica transparente, con etiqueta roja, en versiones de 700 ml. Es el vodka más vendido del mundo.",
        categoria: {
            nombre: "Vodka",
            id: "vodka"
        },
        precio: 5.870
    }
]

cargarProductos(productosVodka);