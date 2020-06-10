console.log(123);
var marytesObuoliai = 5;
var jonukoObuoliai = 2;
var bendrai = marytesObuoliai + jonukoObuoliai;
console.log(bendrai);

bendrai += 5;
bendrai -= 2;

// marytesObuoliai > jonukoObuoliai ? console.log("Maryte turi daugiau obuoliu negu Jonukas") : console.log("Jonukas turi daugiau obuoliu negu Maryte");
if(marytesObuoliai > jonukoObuoliai){
    console.log("Maryte turi daugiau obuoliu negu Jonukas")
} else if (marytesObuoliai < jonukoObuoliai){
    console.log("Jonukas turi daugiau obuoliu negu Maryte")
} else if (marytesObuoliai == jonukoObuoliai) {
    console.log("Atiduokim obuolius Editai");
}
switch (bendrai) {
    case  5:
        console.log("Jus turite" + bendrai + "obuolius");
        break;
    case 10:
        console.log("Jus turite" + bendrai + "obuoliu");
        break;
    default:
    console.log("Jus neturi 5 ar 10 obuoliu")
} 

var vaisiuMasyvas = ["Mangas", "Abrikosas", "Mandarinas", "Mandarinas", "Bananas", "Melionas"];
console.log(vaisiuMasyvas[2], vaisiuMasyvas[4]);

var i;
for(i = 0;i < vaisiuMasyvas.length; i++){
    console.log(vaisiuMasyvas[i]);
}

var kai = 12;
var pre = "Kazkas";

function grazinimas(kaina, preke){
    console.log(kaina, preke);
}

grazinimas(kai, pre);