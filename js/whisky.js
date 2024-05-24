const productosWhisky = [
    {
        id: 500,
        titulo: "Whisky Monkey Shoulder",
        imagen: "../img/monkeyshoulder.png",
        descripcion: "Monkey Shoulder es un blended malt, una mezcla de varios whiskies de malta de William Grant que incluye whiskies de Kininvie, Balvenie y Glenfiddich. Originario de Escocia y producido por William Grant & Sons, Monkey Shoulder se inspira en la tradición del whisky de malta. Es suave y redondo, con toques de dulzura de la malta, vainilla, mermelada y azúcar de cebada.",
        categoria: {
            nombre: "Whisky",
            id: "whisky"
        },
        precio: 43330
    },
    {
        id: 501,
        titulo: "Johnnie Walker Black Label",
        imagen: "../img/johnnieblack.png",
        descripcion: "Johnnie Walker Black Label es un whisky escocés de lujo que se considera la última instancia en whisky escocés de calidad. Cada botella ha estado dos décadas en planificación y utiliza whisky de las mejores destilerías de Escocia. Su mezcla rica y suave ha ganado numerosos premios y es apreciada por su extraordinaria gama de sabores.",
        categoria: {
            nombre: "Whisky",
            id: "whisky"
        },
        precio: 52250
    },
    {
        id: 502,
        titulo: "Whiskey Jack Daniels",
        imagen: "../img/jackdaniels.png",
        descripcion: "Jack Daniel's es un whiskey estadounidense de Tennessee conocido por su sabor distintivo y suave. Producido en la destilería Jack Daniel's en Lynchburg, Tennessee, utiliza agua subterránea de una cueva local y se filtra a través de carbón de arce sacarino para obtener su sabor único. Es añejado en barriles de roble blanco para desarrollar su color ámbar y sabor característicos.",
        categoria: {
            nombre: "Whisky",
            id: "whisky"
        },
        precio: 42070
    },
    {
        id: 503,
        titulo: "Whisky Chivas Regal 12 Años En Estuche",
        imagen: "../img/chivaslitro.png",
        descripcion: "Chivas Regal 12 Años es un whisky escocés de lujo elaborado en la región de Speyside, Escocia. Este blend scotch whisky tiene un color ámbar radiante y ofrece una infusión aromática de frutas, flores, miel y un toque ahumado. Su sabor balanceado y cremoso incluye notas de vainilla, manzanas maduras y avellanas. Ideal para disfrutar solo, con hielo o en cócteles.",
        categoria: {
            nombre: "Whisky",
            id: "whisky"
        },
        precio: 52900
    },
    {
        id: 504,
        titulo: "Whisky Jameson",
        imagen: "../img/jameson.png",
        descripcion: "Jameson es un blend Irish whiskey de origen irlandés, reconocido por su suavidad y sabor excepcional. Destilado en tres ocasiones y envejecido en barricas de roble, ofrece notas de madera tostada, jerez, vainilla y miel. Su triple destilación le otorga un sabor suave y delicado, ideal para disfrutar solo, con hielo o en cócteles.",
        categoria: {
            nombre: "Whisky",
            id: "whisky"
        },
        precio: 28750
    },
    {
        id: 505,
        titulo: "Jameson Ipa Edition Caskmates",
        imagen: "../img/jamesonipa.png",
        descripcion: "Jameson Caskmates IPA Edition es un whisky irlandés terminado en barricas de cerveza IPA, que le confiere notas florales, crujientes y de lúpulo. Este whisky único combina los sabores de una IPA con la suavidad característica de Jameson. Perfecto para los amantes de la cerveza artesanal y los que buscan algo nuevo y emocionante.",
        categoria: {
            nombre: "Whisky",
            id: "whisky"
        },
        precio: 27800
    }
];

cargarProductos(productosWhisky);
