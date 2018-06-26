//
// ZMIENNE:
//
let energia = 0;
let lepszaKorba = 0;
let lepszyGen = 0;
let malyGeneratorWodny = 0;
let malyGeneratorWiatrowy = 0;
let perClick = 1;
let perSec = 0;
// Koszty:
let kosztKorby = 10;
let kosztGen = 100;
let kosztMalyGenWod = 10;
let kosztMalyGenWiat = 100;


function klik() {

  energia += perClick;
  console.log(`Obecna energia: ${energia}`);

}

function addPerSec() {
  perSec = malyGeneratorWodny+malyGeneratorWiatrowy;
  energia += perSec;
}

function odswiez() {
  //ODSWIEŻANIE WARTOŚCI NA INTERFEJSIE GRAFICZNYM
  document.querySelector('.energia').innerHTML = energia;
  document.querySelector('#iloscKorb').innerHTML = lepszaKorba;
  document.querySelector('#iloscGen').innerHTML = lepszyGen;
  document.querySelector('#iloscGenWod').innerHTML = malyGeneratorWodny;
  document.querySelector('#iloscGenWiat').innerHTML = malyGeneratorWiatrowy;
  document.querySelector('#perClick').innerHTML = perClick;
  document.querySelector('#iloscKosztKorby').innerHTML = kosztKorby;
  document.querySelector('#kosztGen').innerHTML = kosztGen;
  document.querySelector('#kosztMalyGenWod').innerHTML = kosztMalyGenWod;
  document.querySelector('#kosztMalyGenWiat').innerHTML = kosztMalyGenWiat;
  document.querySelector('#perSec').innerHTML = perSec;
  perClick = 1+lepszaKorba+(lepszyGen*10);

}
//
// ULEPSZENIA
//
function ileEnergii(_potrzeba) {
  //Sprawdza czy jest wystarczająco energii
  if (energia >= _potrzeba) {
    console.log("Yo " + _potrzeba);
    return true;
  } else {
    infobox(`Potrzebujesz ${_potrzeba} energii`);
    console.log("nie ma tyle energii");
    return false;
  }
}

function kupLepszaKorba() {
  //Kupowanie Korby
  if (ileEnergii(kosztKorby)) {
    energia -= kosztKorby;
    lepszaKorba += 1;
    console.log(`Lepsza Korba: ${lepszaKorba}`);
    kosztKorby = (lepszaKorba+1)*10;
  }
}

function kupLepszyGen() {
  //Kupowanie Generatora
  if (ileEnergii(kosztGen)) {
    energia -= kosztGen;
    lepszyGen += 1;
    console.log(`Lepszy Gen: ${lepszyGen}`);
    kosztGen = (lepszyGen+1)*100;
  }
}

function kupMalyGenWodny() {
  //Kupowanie Elektrowni Wodnej
  if (ileEnergii(kosztMalyGenWod)) {
    energia -= kosztMalyGenWod;
    malyGeneratorWodny += 1;
    console.log(`Mały Generator Wodny: ${malyGeneratorWodny}`);
    kosztMalyGenWod = (malyGeneratorWodny+1)*10;
  }
}

function kupMalyGenWiatrowy() {
  //Kupowanie Elektrowni Wiatrowej
  if (ileEnergii(kosztMalyGenWiat)) {
    energia -= kosztMalyGenWiat;
    malyGeneratorWiatrowy += 1;
    console.log(`Lepszy Gen: ${malyGeneratorWiatrowy}`);
    kosztMalyGenWiat = (malyGeneratorWiatrowy+1)*100;
  }
}


// WYWOŁYWANE FUNKCJE

setInterval(odswiez, 100);
setInterval(addPerSec, 1000);

//INFOBOX - Wyświetla daną wiadomość w oknie
let infoboxTimeout;
function infobox(_info) {
  if (infoboxTimeout!=undefined) clearTimeout(infoboxTimeout);
  document.querySelector("#infobox").innerHTML = _info;
  document.querySelector("#infobox").classList.add("infoboxblink");
  infoboxTimeout = setTimeout(function(){
    document.querySelector("#infobox").classList.remove("infoboxblink");
  }, 1500);
}


















//END
