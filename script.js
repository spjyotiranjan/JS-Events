// Challenge 1
var user = document.getElementById("user")
function add(a) {
    var nm = "S P Jyotiranjan Sahoo"
    a.innerHTML = nm
}
window.onload=()=> add(user)

// Challenge 2
var changebtn = document.querySelector("#btn-click")
function bgcolor(a){
    a.style.backgroundColor = "lightblue"
}
changebtn.onclick=()=> bgcolor(changebtn)

//Challenge 3
var buildbtn = document.querySelector("#build-button")
var statementBox = document.querySelector("#statement")
function makesentence(a) {
    var noun = document.getElementById("noun").value
    var verb = document.getElementById("verb").value
    var adverb = document.getElementById("adverb").value
    var sentence = noun + " " + verb + " " + adverb
    a.innerHTML = sentence
}
buildbtn.addEventListener("click",makesentence(statementBox))

//Challenge 4.1
var grandparent = document.querySelector("#grandparent")
var parent = document.querySelector("#parent")
var child = document.querySelector("#child")
// function print(a) {
//     console.log(`${a} clicked`);
// }
child.addEventListener("click",(e)=>{console.log("Child clicked")})
parent.addEventListener("click",(e)=>{console.log("Parent clicked")})
grandparent.addEventListener("click",(e)=>{console.log("Grandparent clicked")})


// Challenge 4.2
child.addEventListener("click",()=>{console.log("Child clicked")},true)
parent.addEventListener("click",()=>{console.log("Parent clicked")},true)
grandparent.addEventListener("click",()=>{console.log("Grandparent clicked")},true)

//Challenge 5
var category = document.querySelector("#category")
category.addEventListener("click",function(e){
    console.log(e.target.id)
},true)