const usuarios = [
    {
        name: "Carolina",
        age: 25,
        color: "blue",
        ocupation: "Aux",
        motivation: `Sueños por cumplir`,
        hobbies: ["Dormir", "Leer", "Estudiar", "Lulú"],
    },
    {
        name: "Cristian",
        age: 19,
        color: "verde",
        ocupation: "musico",
        motivation: `fjdkslfdskjfakljfasdklfjdgodajdgoij`,
        hobbies: ["correr", "leer", "saltar", "comprar"],
    },
    {
        name: "jose gonzales",
        age: 33,
        color: "black",
        ocupation: "DEV",
        motivation: `mejorar codiando todos los dias`,
        hobbies: ["bici", "correr", "futbol", "natación"],
    },
    {
        name: "Alex",
        age: 20,
        color: "morado",
        ocupation: "estudiante",
        motivation: `una vida cómoda`,
        hobbies: ["jugar", "series", "nada", ""],
    },
    {
        name: "Romario",
        age: 22,
        color: "red",
        ocupation: "null",
        motivation: `aprender a codear`,
        hobbies: ["codear", "manejar moto", "comer"],
    },
    {
        name: "Eliseo Torres",
        age: 24,
        color: "Black",
        ocupation: "Electronico",
        motivation: `$`,
        hobbies: ["aprender", "leer", "jugar futbol", "viajar"],
    },
    {
        name: "Derian",
        age: 43,
        color: "blanco",
        ocupation: "ecomerce",
        motivation: `dev`,
        hobbies: ["tennis", "futbol", "tv", "dev"],
    },
    {
        name: "Fernando",
        age: 30,
        color: "Blue",
        ocupation: "Dev",
        motivation: `Money`,
        hobbies: ["Gym", "Run"],
    },
    {
        name: "Diego",
        age: 26,
        color: "blue",
        ocupation: "Piloto",
        motivation: `progress`,
        hobbies: ["dormir", "comer", "dormir", "dormir"],
    },
    {
        name: "Luis",
        age: 25,
        color: "azul casi verde",
        ocupation: "no tengo",
        motivation: `conquistar el mundo`,
        hobbies: ["parkour", "fronton", "codear", "leer"],
    },
  
];


function printHobbies(array) {
    let html = "";

    array.forEach((value) => {
        html += `<li>${value}</li>`;
    });

    return html;
}

function printUser() {
    const users = document.querySelector(".users");
    let html = "";

    for (const user of usuarios) {
        
        html += `
        <div class="users">
            <h2>${user.name}</h2>
            <h3>${user.color} - ${user.age} - ${user.ocupation}</h3>
            <p><i>${user.motivation}</i></p>
            <ul>
                ${printHobbies(user.hobbies)}
            </ul>
        </div>`;
    
        users.innerHTML = html ;   
    }
}

printUser();
