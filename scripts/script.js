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
