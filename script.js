function toggleSettings(){

const panel = document.getElementById("settingsPanel");

if(panel.style.display === "flex"){
panel.style.display = "none";
}
else{
panel.style.display = "flex";
}

}