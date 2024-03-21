let pieniadze = 0;
let drewno = 0;
let marmur = 0;
let mieso = 0;
let zludzkie = 10;

let pieniadzens = 10;
let drewnons = 5;
let marmuns = 1;
let miesons = 3;
let WspWzrostuPop = 2;

function dodajsurowce(){
    dodajpieniadze();
    dodajdrewno();
    dodajmarmur();
    dodajmienso();
    dodajlud();
    setTimeout(dodajsurowce, 1000);
}

function dodajpieniadze(){

   pieniadze += pieniadzens;
   document.getElementById("hajs").innerHTML = "💲: " + pieniadze;
}


function dodajdrewno(){
    
    drewno += drewnons;
    document.getElementById("drewno").innerHTML = "🌲: " + drewno;
}


function dodajmarmur(){
    
    marmur += marmuns;
    document.getElementById("kamien").innerHTML = "🗿: " + marmur;
}


function dodajmienso(){
    
    mieso += miesons;
    document.getElementById("miesko").innerHTML = "🥩: " + mieso;
    
}

function dodajlud(){
    let czylud = Math.random() * (WspWzrostuPop - 0) + 0;
    czylud = parseInt(czylud);
    zludzkie += czylud;
    document.getElementById("zludzkie").innerHTML = "🧍‍♂️: " + zludzkie;
}

function chaupa(){

    if(pieniadze >= 50 && drewno >= 20)
    {
    pieniadze = pieniadze - 50;
    drewno = drewno - 20;

    pieniadzens += 5;
    drewnons += 2;

    document.getElementById("hajs").innerHTML = "💲: " + pieniadze;
    document.getElementById("drewno").innerHTML = "🌲: " + drewno;

    }
    dodajBudynek("https://cdn.pixabay.com/photo/2023/02/28/19/20/house-7821634_1280.png");
}

function dodajBudynek(imgTla){
      var budynek =  document.createElement("div");
      budynek.style.width = 100 + "px";
      budynek.style.height = 100 + "px";
      budynek.style.backgroundColor = "blue";
      
     document.getElementById("budynkiLista").appendChild(budynek);
}
