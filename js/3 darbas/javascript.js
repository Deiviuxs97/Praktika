var div = document.createElement("div");
div.setAttribute("id", "moku");
document.body.appendChild(div);   
div.innerHTML = "Valio pavyko"
div.style.height = "300px";
div.style.width = "300px";
div.style.margin = "0 auto"; 

var btn = document.createElement("button");
btn.setAttribute("id", "spaudaliukas");
btn.setAttribute("onclick", "myFunction()");
btn.style.height = "50px";
btn.style.width = "100px";
btn.innerHTML = "Valio pavyko";
document.body.appendChild(btn); 

function myFunction(){
    document.getElementById("moku").remove();
    document.getElementById("spaudaliukas").remove();
}