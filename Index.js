const nombre = "Gabriel";
const apellido = "Roatta";

const persona = {
    nombre,
    apellido
}

sessionStorage.setItem("persona",JSON.stringify(persona));
localStorage.setItem("persona",JSON.stringify(persona))

let time = new Date();
time.setMinutes(time.getMinutes()+2);

document.cookie = "newCookie="+JSON.stringify(persona)+";expires=" + time.toUTCString();
