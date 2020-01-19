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
