const images = [ 

    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },

    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },

    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", },

    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },

    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
    
];

// collego una variabile al HTML
let slider = document.querySelector('.items-container');
// Creo un TAG Div dentro i quali metto img nel quale aggiungo src= [n] img incrementale
for(i = 0; i <= images.length; i++){
    
    // reao il Contenitore DivImg
    const divImg = document.createElement('div');

    // aggiungo l'active al contenitore
    if(i === 0) divImg.className = 'item active';
    else divImg.className = 'item';

    // creo img
    let img = document.createElement('img');
    // add src a img
    img.src = images[i].image;
    
    // unisco i pezzi
    divImg.appendChild(img);
    slider.appendChild(divImg);
}

let active = 0;
let item = document.getElementsByClassName('item');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
next.addEventListener('click',
    function(){
        if(active < images.length){
            item[active].classList.remove('active');

            active++

            item[active].classList.add('active');
        }
    }
);