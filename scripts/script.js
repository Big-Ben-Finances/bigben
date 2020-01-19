// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//everything above is Muhammad


function goSomewhere(x){
window.location = x;
}
function startOff(){
if(localStorage.getItem("loggedIn") == "true"){
document.getElementById("changeToName").innerHTML = "<h2 class='text' style='float:right;'>"+localStorage.getItem('username')+"</h2><button class='loginandsignupconfirm' onclick='reset()' style='float:right;background-color:rgb(115,243,195);'>Log out</button><button class='loginandsignupconfirm' onclick='goSomewhere(\"profile.html\")' style='float:right;background-color:rgb(115,243,195);'>Profile</button>";
}
}
function reset(){
localStorage.setItem("loggedIn",null);
window.location = "/bigben/index.html";
}
function changeDescription(){
document.getElementById("descriptionr").innerHTML = "<textarea class='text' style='margin: 0px; width: 994px; height: 137px;font-size:20px;' id='textr' placeholder='Edit Description'></textarea>"+"<br><button class='loginandsignupconfirm' onclick='descriptionSave()'>Save</button>";
}
function startOffProfile(){
if(localStorage.getItem("loggedIn") == "true"){
document.getElementById("changeToName").innerHTML = "<h2 class='text' style='float:right;'>"+localStorage.getItem('username')+"</h2><button class='loginandsignupconfirm' onclick='reset()' style='float:right;background-color:rgb(115,243,195);'>Log out</button>";
document.getElementById("name").innerHTML = localStorage.getItem("firstname")+" "+ localStorage.getItem("lastname");
if(localStorage.getItem("description")){
document.getElementById("descriptionr").innerHTML = "<p class = 'text' style='font-size:20px;'>"+localStorage.getItem("description")+"</p>"+"<br><button class='loginandsignupconfirm' onclick='changeDescription()'>Edit Description</button>";
}else{
document.getElementById("descriptionr").innerHTML = "<textarea class='text' style='margin: 0px; width: 994px; height: 137px;font-size:20px;' id='textr' placeholder='Edit Description'></textarea>"+"<br><button class='loginandsignupconfirm' onclick='descriptionSave()'>Save</button>";
}
}
}
function descriptionSave(){
localStorage.setItem("description",document.getElementById("textr").value);
window.location = "profile.html";
}
function block(){
if(localStorage.getItem("loggedIn") == "true"){
 document.getElementById("accessDenied").innerHTML = "<button class="topbarbutton" onclick="goSomewhere('/bigben/menu/m.html')">Lessons</button>";
document.getElementById("securityYouMustLeave").innerHTML = "<button class="topbarbutton" onclick="goSomewhere ('/bigben/menu/n.html')">Tips</button>"
}else{
document.getElementById("accessDenied").innerHTML = " ";
document.getElementById("securityYouMustLeave").innerHTML = " ";
}
}
