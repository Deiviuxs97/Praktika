var btn = document.getElementById("KARAMBA");
btn.setAttribute("onclick", "myFunction()");
btn.style.height = "50px";
btn.style.width = "50px";
btn.innerHTML = "Good Job";

function myFunction(){
    console.log("hello");
    var newFrame = document.createElement("iframe");
    newFrame.style.height = "300px";
    newFrame.style.width = "300px";
    newFrame.src = "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1";
    newFrame.style.display = "block";
    newFrame.style.margin = "0 auto"; 
    document.body.appendChild(newFrame); 
}