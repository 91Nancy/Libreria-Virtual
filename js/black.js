const mode = document.getElementById("mode").addEventListener("click",cambio);
const body=document.querySelector("body");


function cambio(e){
	e.preventDefault()
	body.classList.toggle("oscuro");
}