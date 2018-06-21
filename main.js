let energia = 0;
let lepszaKorba = 0;
let lepszyGen = 0;
let malyGeneratorWodny = 0;
let malyGeneratorWiatrowy = 0;
let perClick = 1;
let perSec = 0;

let licznikEnergii = document.querySelector('.energia');
let iloscKorb = document.querySelector('#iloscKorb');
let iloscGen = document.querySelector('#iloscGen');
let iloscGenWod = document.querySelector('#iloscGenWod');
let iloscGenWiat = document.querySelector('#iloscGenWiat');


let iloscPerClick = document.querySelector('#perClick');

function klik() {

  energia += perClick;
  console.log(`energia: ${energia}`);

}

function addPerSec() {
  perSec = malyGeneratorWodny+malyGeneratorWiatrowy;
  energia += perSec;
}

function odswiez() {
  licznikEnergii.innerHTML = energia;
  iloscKorb.innerHTML = lepszaKorba;
  iloscGen.innerHTML = lepszyGen;
  iloscGenWod.innerHTML = malyGeneratorWodny;
  iloscGenWiat.innerHTML = malyGeneratorWiatrowy;
  iloscPerClick.innerHTML = perClick;
  perClick = 1+lepszaKorba+lepszyGen

}

function kupLepszaKorba() {
  lepszaKorba += 1;
  console.log(`Lepsza Korba: ${lepszaKorba}`);
}

function kupLepszyGen() {
  lepszyGen += 1;
  console.log(`Lepszy generator: ${lepszyGen}`);
}

function kupMalyGenWodny() {
  malyGeneratorWodny += 1;
  console.log(`malyGeneratorWodny: ${malyGeneratorWodny}`);
}

function kupMalyGenWiatrowy() {
  malyGeneratorWiatrowy += 1;
  console.log(`malyGeneratorWiatrowy: ${malyGeneratorWiatrowy}`);
}


setInterval(odswiez, 100);
setInterval(addPerSec, 1000);
