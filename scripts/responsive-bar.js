const nav = document.querySelector(".barra-navegacion")
const boton = document.querySelector(".button-bar")
const linkxd = document.querySelectorAll(".uwu")

boton.addEventListener("click", () => {
    
    nav.classList.toggle("barra-navegacion-visible")
});

function comprobador() {

    if (window.innerWidth <= 675) {
        console.log("well")
        for (let i = 0; i < linkxd.length; i++) {
            linkxd[i].addEventListener("click", () => {
                    
                    nav.classList.toggle("barra-navegacion-visible")
                
            })
            
        }
    }
}

window.addEventListener('load', comprobador);