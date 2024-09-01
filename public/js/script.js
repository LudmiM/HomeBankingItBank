const icon_list = document.getElementById("icon_list");
const sidebar = document.querySelector(".sidebar");
const spans= document.querySelectorAll("span");
const menu = document.querySelector(".menu");


menu.addEventListener("click",()=>{
    sidebar.classList.toggle("max-sidebar");
    if(sidebar.classList.contains("max-sidebar")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";

    }
});

icon_list.addEventListener("click",()=>{
    sidebar.classList.toggle("mini-sidebar")
    spans.forEach((span)=>{
        span.classList.toggle("oculto")
    });
});