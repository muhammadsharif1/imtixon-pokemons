var favourites = document.getElementById('favourites');
var NEW_ROW = document.getElementById('pokemon');
var numerator = [];
//==================== interface ==============================

for(var i=0; i<pokemons.length; i++){
    
    // col yaratish
   
    var NEW_COL = document.createElement('li');
    NEW_COL.classList.add('col-3', 'mb-4');
    NEW_ROW.appendChild(NEW_COL);
    
    // card yaratish
    
    var NEW_CARD = document.createElement('div');
    NEW_CARD.classList.add('card');
    NEW_COL.appendChild(NEW_CARD);
    
    // image qismi
    
    var CARD_TOP = document.createElement('div');
    CARD_TOP.classList.add('card-img-top','mt-5', 'd-flex', 'justify-content-center');
    NEW_CARD.appendChild(CARD_TOP);

    // img yaratish

    var NEW_IMG = document.createElement('img');
    NEW_IMG.setAttribute('src', pokemons[i].img)
    NEW_IMG.setAttribute('width', '130')
    NEW_IMG.setAttribute('height', '130')
    CARD_TOP.appendChild(NEW_IMG);
    // cardni body qismi

    var NEW_DIV = document.createElement('div');
    NEW_DIV.classList.add('card-body',);
    NEW_CARD.appendChild(NEW_DIV);

    // pocemon nomi

    var POCEMON_NAME = document.createElement('p');
    POCEMON_NAME.classList.add('card-title', 'fs-4', 'fw-bold', 'text-center', 'text-truncate');
    POCEMON_NAME.textContent = 'Name: ' + pokemons[i].name;
    NEW_DIV.appendChild(POCEMON_NAME);

    // pocemon typesi

    var POCEMON_TYPE = document.createElement('p');
    POCEMON_TYPE.classList.add('card-text', 'fs-5', 'fw-normal', 'text-center', 'text-primary', 'fst-italic');
    POCEMON_TYPE.textContent = 'Type: ' + pokemons[i].type;
    NEW_DIV.appendChild(POCEMON_TYPE);


    var time = document.createElement('p');
    time.classList.add('card-text', 'fs-5', 'fw-normal', 'text-center', 'text-black', 'fst-italic');
    time.textContent = 'Time:' + pokemons[i].spawn_time;
    NEW_DIV.appendChild(time);

    var num = document.createElement('p');
    num.classList.add('card-text', 'fs-5', 'fw-normal', 'text-center', 'text-black', 'fst-italic');
    num.textContent = '#' + pokemons[i].num;
    NEW_CARD.appendChild(num);


    // like tugmasi

    var BUTTON = document.createElement('button');
    BUTTON.classList.add('btn', 'btn-primary',);
    BUTTON.dataset.id = i;
    BUTTON.textContent = 'like';
    NEW_DIV.appendChild(BUTTON);


}
NEW_ROW.addEventListener('click', function(event){
    var pocemonId = Number(event.target.dataset.id);

    if(event.target.matches('.btn-primary')){

        event.target.classList.remove('btn-primary');
        event.target.classList.add('btn-danger');
        event.target.textContent = 'dislike';
        numerator.push(pokemons[pocemonId]);
        // favourites.value = numerator.length;
        console.log(numerator)

    } else if(event.target.matches('.btn-danger')){
        event.target.classList.remove('btn-danger');
        event.target.classList.add('btn-primary');
        event.target.textContent = 'like';
        // numerator.splice(pocemonId-1, 1);
        delete numerator[pocemonId];
        numerator.length -=1;
        // favourites.value = numerator.length;
        console.log(numerator);
    }
    favourites.value = numerator.length;
})