var poengsum, rundePoeng, aktivSpiller;

let gameIsOn = false;

const maxPoeng = 100;

const startSpill = () => {
    poengsum = [0, 0];
    rundePoeng = 0;
    aktivSpiller = 0;
    gameIsOn = 0;
    //skjuler terningen
    document.querySelector('.terning').style.display = 'none';
    // nullstiller poengene
    document.getElementById( 'poeng-0').textContent = '0'
    document.getElementById('poeng-1').textContent = '0'
    document.getElementById('sum-0').textContent = '0'
    document.getElementById('sum-1').textContent = '0'
    
    // kastTerning();
}

const kastTerning = () => {
    let terning = Math.floor(Math.random() * 6) + 1 ;
    document.querySelector('.terning').style.display = 'block';
    console.log(terning);
    document.querySelector('.terning').src = 'img/terning-' + terning + '.png';
    rundePoeng += terning;
    console.log('rundepoeng:', rundePoeng)
    document.querySelector(`#poeng-${aktivSpiller}`).textContent = rundePoeng;
    console.log('rundepoeng:', rundePoeng);
    if(terning === 1) {
        console.log('Du fikk 1')
        rundePoeng = 0;
        document.querySelector(`#poeng-${aktivSpiller}`).textContent = rundePoeng;
        byttSpiller()
    }
    else if (poengsum[aktivSpiller] >= 100){
        console.log('Vi har en vinner', aktivSpiller);
        document.querySelector('#navn-' + aktivSpiller).textContent = 'Vinner!';
    }
}

const byttSpiller = () => {
    //Neste spiller 
    aktivSpiller === 0 ? aktivSpiller = 1 : aktivSpiller = 0;
    rundePoeng = 0;
    //Oppdatere GUI 
    document.getElementById('poeng-0').textContent = '0';
    document.getElementById('poeng-1').textContent = '0';
    //Endre på aktiv spiller i CSS
    document.querySelector('.spiller-0-panel').classList.toggle ('aktiv');
    document.querySelector('.spiller-1-panel').classList.toggle('aktiv');
}

const beholdPoeng = () => {
    poengsum[aktivSpiller] += rundePoeng; 
    rundePoeng = 0;
    document.getElementById('sum-' + aktivSpiller).textContent = poengsum[aktivSpiller];
    document.getElementById('poeng-' + aktivSpiller).textContent = rundePoeng;
    byttSpiller();
}






const nyttSpillKnapp = document.querySelector('.btn-ny');
nyttSpillKnapp.addEventListener('click', startSpill);

const kastTerninglKnapp = document.querySelector('.btn-kast');
kastTerninglKnapp.addEventListener('click', kastTerning);

const holdKnapp = document.querySelector('.btn-hold');
holdKnapp.addEventListener('click', beholdPoeng);


startSpill();