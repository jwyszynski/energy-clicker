let energia = 0;
let lepszaKorba = 0;
let lepszyGen = 0;
let malyGeneratorWodny = 0;
let malyGeneratorWiatrowy = 0;

let licznikEnergii = document.querySelector('.energia');

function klik() {
  energia += 1+lepszaKorba+lepszyGen;
  console.log(`energia: ${energia}`);

}

function odswiez() {
  licznikEnergii.innerHTML = energia;
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
