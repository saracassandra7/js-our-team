/***MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.*/ 

const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg"
  },

  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
  },

  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg"
  },

  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
  },

  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg"
  },

  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
  }
];


/***MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto*/

const lista = document.querySelector('.list-group');
const row = document.querySelector(".row");

for(let member of team){
  const output = `${member.nome}, ${member.ruolo}, ${member.foto}`;
  
  console.log(output);

  /***MILESTONE 2:**
  Stampare le stesse informazioni su DOM sotto forma di stringhe*/
  lista.innerHTML += `<li class="list-group-item"> <strong>Nome:</strong> ${member.nome}, <strong>Ruolo:</strong> ${member.ruolo}, <strong>Url foto:</strong> ${member.foto}</li>`

  /****MILESTONE 3:**
  Stampare delle card formattate contenete immagini e testo */
  let card = `
  <div class="col-4">
  
  <div class="card m-3" style="width: 18rem;">
  <img src="${member.foto}" class="card-img-top" alt="${member.nome}">
  <div class="card-body text-center">
  <h5 class="card-title">${member.nome}</h5>
  <p class="card-text">${member.ruolo}</p>
  </div>
  </div>
  
  </div>`;

  row.innerHTML += card;
}

