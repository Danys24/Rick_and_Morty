const abrirMenu = document.querySelector(".btn-menu");
const cerrarMenu = document.querySelector(".btn-salir");
const menu = document.querySelector("#menu-n");

console.log(abrirMenu);

abrirMenu.addEventListener("click",() => {
   menu.style.right = "0";
}); 

cerrarMenu.addEventListener("click",() => {
   menu.style.right = "40000px";
}); 