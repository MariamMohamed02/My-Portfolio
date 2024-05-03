var tablinks=document.getElementsByClassName("about-links");
var tabcontents=document.getElementsByClassName("about-content");

function opentab(tabname){
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
}