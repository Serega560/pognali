const cardList = [
    {
        id: 0,
        name: "Таня Фирсова",
        online: false,
        image: "https://i.ibb.co/Cmgp1tP/Rectangle-4.png",
        hashtags: "#ЗОЖ #ПП #Фитнес #пляж  #авокадо #смузи",
        transport: {
            plane: true,
            bus: false,
            bicycle: false,
            onfoot: false,
        },
        countries: [
            {name: "Шри-ланка", flag: ""}, 
            {name: "Таиланд", flag: ""}, 
            {name: "сейшелы", flag: ""}
        ],
        level: 99,
        likes: 1500,
    },
    {
        id: 1,
        name: "Петя Демин",
        online: false,
        image: "https://i.ibb.co/Cmgp1tP/Rectangle-4.png",
        hashtags: "#бургер #бар #футбол #концерт #крафт",
        transport: {
            plane: true,
            bus: true,
            bicycle: false,
            onfoot: true,
        },
        countries: [
            {name: "бельгия", flag: ""}, 
            {name: "чехия", flag: ""}
        ],
        level: 80,
        likes: 1500,
    },
    {
        id: 2,
        name: "Марк Смолов",
        online: false,
        image: "https://i.ibb.co/Cmgp1tP/Rectangle-4.png",
        hashtags: "#рэп #тату #хайпбист #кроссовки #суприм",
        transport: {
            plane: true,
            bus: false,
            bicycle: true,
            onfoot: false,
        },
        countries: [
            {name: "сша", flag: ""}, 
            {name: "австралия", flag: ""},
            {name: "доминика", flag: ""}
        ],
        level: 25,
        likes: 170,
    },
    {
        id: 3,
        name: "Лариса Роговая",
        online: true,
        image: "https://i.ibb.co/Cmgp1tP/Rectangle-4.png",
        hashtags: "#образование #карьера #учеба #линкедин",
        transport: {
            plane: true,
            bus: true,
            bicycle: false,
            onfoot: false,
        },
        countries: [
            {name: "Великобритания", flag: ""}, 
            {name: "Германия", flag: ""}
        ],
        level: 50,
        likes: 23,
    },
  ];
  
  export default cardList;
