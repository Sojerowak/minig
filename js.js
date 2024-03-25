// Ile surowców gracz aktualnie posiada
let pieniadze = 0;
let drewno = 0;
let marmur = 0;
let mieso = 0;
let zludzkie = 10;

//O ile się zwiększa co okres czasu
let pieniadzens = 10;
let drewnons = 5;
let marmuns = 1;
let miesons = 3;
let WspWzrostuPop = 2;

// Inne
let iloscBudynkow = 0;
let KurtCzasZycia = 5;

function rozpoczecie(){
    dodajsurowce();
    KurtCob();
   
}

function dodajsurowce(){
    dodajpieniadze();
    dodajdrewno();
    dodajmarmur();
    dodajmienso();
    dodajlud();
    setTimeout(dodajsurowce, 1000);
}

function KurtCob(){
    if (KurtCzasZycia > 0)
    {
        KurtCzasZycia--;
        setTimeout(KurtCob,1000)
    }
    else
    {
        reset();
        document.getElementById("kategorie").style.display = "none";
        document.getElementById("cobainsDeath").style.display = "block";
        setTimeout(wybor,10000);
    }
}

function wybor(){
    document.getElementById("cobainsDeath").style.display = "none";
    
    document.getElementById("wybor").style.display = "block";
}

function nowywladca(){
    document.getElementById("zdjWlad").src ;
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

// Funkcje Budynków:

function chaupa(){

    if(pieniadze >= 50 && drewno >= 20)
    {
    pieniadze = pieniadze - 50;
    drewno = drewno - 20;

    pieniadzens += 5;

    document.getElementById("hajs").innerHTML = "💲: " + pieniadze;
    document.getElementById("drewno").innerHTML = "🌲: " + drewno;

    dodajBudynek("brown");

    }
}

function tartak(){

    if(pieniadze >= 100 && marmur >= 20 && zludzkie >=15)
    {
    pieniadze -= 100;
    marmur -= 20;

    pieniadzens += 5;
    drewnons += 2;

    document.getElementById("hajs").innerHTML = "💲: " + pieniadze;
    document.getElementById("kamien").innerHTML = "🗿: " + marmur;

    dodajBudynek("green");

    }
}

function kamieniolom(){

    if(pieniadze >= 100 && drewno >= 20 && zludzkie >=15)
    {
    pieniadze -= 100;
    drewno -= 20;

    pieniadzens += 5;
    marmuns += 2;

    document.getElementById("hajs").innerHTML = "💲: " + pieniadze;
    document.getElementById("drewno").innerHTML = "🌲: " + drewno;

    dodajBudynek("grey");

    }
}

function dodajBudynek(kolorTla){
     if(iloscBudynkow > 60){
        document.getElementById("budynkiLista").style.height = "auto";
     }

      var budynek =  document.createElement("div");
      budynek.style.width = 100 + "px";
      budynek.style.height = 100 + "px";
      budynek.style.backgroundColor = kolorTla;
      budynek.style.margin = 2 + "px";
      
      iloscBudynkow++;
     document.getElementById("budynkiLista").appendChild(budynek);
}

// Funkcje zmiany 

function reset(){
    document.getElementById("budynki").style.display = "none";
    document.getElementById("budynkiLista").style.display = "none";
    document.getElementById("wioskaInfo").style.display = "none";
    document.getElementById("wojaki").style.display = "none";
}

function krajInfo(){

    reset();
    document.getElementById("wioskaInfo").style.display = "block";
}

function budynkizakl(){
    reset();
    document.getElementById("budynki").style.display = "flex";
    document.getElementById("budynkiLista").style.display = "flex";
}

function wojskoinfo(){
    reset();
    document.getElementById("wojaki").style.display = "block";
}