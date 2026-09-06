// Busca un elemento comparando su texto con la busqueda

/** @type {HTMLInputElement | null} */
const search = document.getElementById("searchBar")

const productos = document.querySelectorAll(".sell-card__text")

search.addEventListener('keydown', function(event){
    if (event.key === "Enter") {
        const busqueda = search.value.toLowerCase()

        productos.forEach(producto => {
            const texto = producto.textContent.toLowerCase()
            const card = producto.closest(".sell-card")

            if (texto.includes(busqueda)) {
                card.style.display = ""
            }else{
                card.style.display = "none"

            }
        })
        
    }
})

// Al apretar el boton detalle, se abre un modal que muestra informacion

const detallebtn = document.querySelectorAll(".sell-card__button")
const modals = document.querySelectorAll(".modal-overlay-container")
const modalsbackground = document.querySelector(".modal-background")

detallebtn.forEach((detalle, indice) => {
    detalle.addEventListener('click', () => {
        modals[indice].style.display = "flex"
        modalsbackground.style.display = "flex"
    })
})

// Al apretar la x del modal se cierra el modal

const endmodal = document.querySelectorAll(".modal-overlay__close-icon")

endmodal.forEach((end, indice) => {
    end.addEventListener('click', () => {
        modals[indice].style.display = "none"
        modalsbackground.style.display = "none"
    })
}) 