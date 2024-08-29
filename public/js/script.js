const icon_list = document.getElementById("icon_list");
const sidebar = document.querySelector(".sidebar");
const spans= document.querySelectorAll("span");


icon_list.addEventListener("click",()=>{
    sidebar.classList.toggle("mini-sidebar")
    spans.forEach((span)=>{
        span.classList.toggle("oculto")
    });
});