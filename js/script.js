// ----- MILESTONE 0 -----
// CREO UN ARRAY DI OGGETTI INSERENDO LE INFORMAZIONE CONTENENTI NEL PNG "tabell_dipendenti"
let dipendenti = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]


// ----- MILESTONE 1 -----
// STAMPO SU CONSOLE LE INFORMAZIONI DI OGNI MEMBRO DEL TEAM
for (let i = 0; i <= 5; i++) {
    console.log(dipendenti[i]);
}


// ----- MILESTONE 2 -----
// STAMPO LE MEDISIME INFORMAZIONI DI OGNI MEMEBRO NEL DOM
for (let i = 0; i <= 5; i++) {
    document.getElementById("dipendenti").innerHTML += `<li class="list-group-item active">${dipendenti[i].name}</li>`

    document.getElementById("dipendenti").innerHTML += `<li class="list-group-item">${dipendenti[i].role}</li>`

    document.getElementById("dipendenti").innerHTML += `<li class="list-group-item">${dipendenti[i].image}</li>`
}