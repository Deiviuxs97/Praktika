var herojai = {
    Deividas: "vienas",
    Jonas: "du",
    Jonaitis: "trys",
    Berzas: "berzaitis",
    Vardenis: "Pavardenis"
}
myFunction();

function myFunction(){
    let raktai = Object.keys(herojai);
    let value = Object.values(herojai);
    raktai.forEach(funkcija);
    value.forEach(funkcija);
}

function funkcija(item, index){
    var p = document.createElement("p");
    p.innerHTML = item;
    if(index%2==0 && index != 0){
        p.style.backgroundColor = "blue";
        p.style.color = "white";
    }
    document.body.appendChild(p); 
}