function myFunction() {
    var vaisiausPav = document.getElementById("vaisiausPav").value;
    var vaisiausKain = document.getElementById("vaisiausKain").value;
    var vaisiausKiek = document.getElementById("vaisiausKiek").value;
    var ats = document.getElementById("ats");
    ats.innerHTML = vaisiausKiek + " " + vaisiausPav + " kainuos: " + vaisiausKain * vaisiausKiek;
    ats.innerHTML;
}