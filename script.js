const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const containerHighlighted = document.querySelector('.highlighted');
const containerThumbs = document.querySelector('.thumbs');

images.forEach((element, index) => {
    containerHighlighted.innerHTML += `
    <img src="${element.image}" alt="${element.title}" ${index == 0 ? 'class="active"' : ''}>
    <div class="img-text${index == 0 ? ' img-active' : ''}">
        <h1>${element.title}</h1>
        <span>${element.text}</span>
    </div>`;
	containerThumbs.innerHTML += `<img src="${element.image}" alt="${element.title}" ${index == 0 ? 'class="active"' : ''}>`;
});


// selezionimo le immagini nell'html
const listHighlighted = document.querySelectorAll('.highlighted img');
// selezioniamo le miniature
const listThumbs = document.querySelectorAll('.thumbs img');
// selezioniamo i bottoni
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const listText = document.querySelectorAll('.img-text');


// definito una variabile che rappresenta lo stato attuale del carosello
// cioe' l'indice dell'immagine attiva
let activeIndex = 0;

btnNext.addEventListener('click',
	function() {
		// dall'immagine attiva tolgo la classe active
        listHighlighted[activeIndex].removeAttribute('class');
		listThumbs[activeIndex].removeAttribute('class');
        listText[activeIndex].classList.remove('img-active');
		// settiamo il nuovo valore di active index
		activeIndex++;
		if (activeIndex >= listHighlighted.length) {
			activeIndex = 0;
		}
		// alla nuova immagine attiva aggiungiamo la classe active
		listHighlighted[activeIndex].classList.add('active');
		listThumbs[activeIndex].classList.add('active');
        listText[activeIndex].classList.add('img-active');
	}
);

btnPrev.addEventListener('click',
	function() {
		// dall'immagine attiva tolgo la classe active
		listHighlighted[activeIndex].removeAttribute('class');
		listThumbs[activeIndex].removeAttribute('class');
        listText[activeIndex].classList.remove('img-active');
		// settiamo il nuovo valore di active index
		activeIndex--;
		if (activeIndex < 0) {
			activeIndex = listHighlighted.length - 1;
		}
		// alla nuova immagine attiva aggiungiamo la classe active
		listHighlighted[activeIndex].classList.add('active');
		listThumbs[activeIndex].classList.add('active');
        listText[activeIndex].classList.add('img-active');
	}
);

// ciclo per aggiungere gli event listeners alle miniature

listThumbs.forEach((element, index) => {
    element.addEventListener('click',
		function() {
			console.log('cliccata la miniature in posizione ' + index)
			listHighlighted[activeIndex].removeAttribute('class');
			listThumbs[activeIndex].removeAttribute('class');
			activeIndex = index;
			listHighlighted[activeIndex].classList.add('active');
			listThumbs[activeIndex].classList.add('active');
		}
	)
});
