const images = document.getElementsByClassName('gallery__img-post') //Array de elementos con cada imagen de galería
const modalImages = document.querySelectorAll(`div[data-imgm]`) //Array de elementos con cada imagen de la galería del modal
const modalBg = document.getElementById('modal') // Modal Background
const leftArrow = document.getElementById('left-arrow-modal') //Botón derecha modal slide
const rightArrow = document.getElementById('right-arrow-modal') //Botón izquierda modal slide

let currentImgId, imgModal;

// cargamos todas las imagenes de galería con Event 'click'
function loadImageOnClickEvents() {
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', e => {
            // Al clickear sobre una imagen asignamos el valor de su atributo 'data-img' para saber su INDEX
            // total: 9 imagenes -> index 1-9
            const clickedImgId = e.toElement.getAttribute('data-img')
            addModalBackGround()
            // Pasamos número de index por param
            openModalImg(clickedImgId)
        });
    }
}

// Cargamos eventos onclick en las imágenes del modal para hacer slide hacia la derecha 
function loadModalOnClickImagesEvents() {
    for (var i = 0; i < modalImages.length; i++) {
        modalImages[i].addEventListener('click', e => {
            slideRight()
        });
    }
}

// Asignamos clase al fondo del modal para hacerlo visible
function addModalBackGround() {
    modalBg.classList.add('modal--active')
    leftArrow.classList.add('modal__left--active')
    rightArrow.classList.add('modal__right--active')
}

// Evento para cerrar al hacer click el background del modal
modalBg.addEventListener('click', (e) => {
    // Enviamos el id del elemento clickeado
    close(e.toElement.id)
})

function close(e) {
    // Si clickeamos el background del modal, quitamos clases.
    if (e == 'modal') {
        modalBg.classList.remove('modal--active')
        imgModal.classList.remove('modal__img-container--active')
        leftArrow.classList.remove('modal__left--active')
        rightArrow.classList.remove('modal__right--active')
    }
}

function openModalImg(clickedImgId) {
    //Asignamos el id que coincide con la imagen y lo hacemos visible 
    imgModal = document.querySelector(`div[data-imgm='${clickedImgId}']`)
    imgModal.classList.add('modal__img-container--active')
    addAnimationsToModalElements()
    //Guardamos el valor del index del modal actual
    currentImgId = clickedImgId;
}

function addAnimationsToModalElements() {
    // Asignamos y quitamos animación
    imgModal.classList.add('scaleup')
    setTimeout(() => {
        imgModal.classList.remove('scaleup')
    }, 600);
}
//Eventos para los iconos de flechas para hacer Slide
leftArrow.addEventListener('click', slideLeft)
rightArrow.addEventListener('click', slideRight)

function slideRight() {
    // Verificamos qué index es
    reviewCountRight()
    // Removemos la imagen anterior y sumamos index
    imgModal.classList.remove('modal__img-container--active')
    currentImgId++
    // Asignamos el index a la nueva imagen y la clase --active.
    imgModal = document.querySelector(`div[data-imgm='${currentImgId}']`)
    imgModal.classList.add('modal__img-container--active')
}

function slideLeft() {
    // Verificamos qué index es
    reviewCountLeft()
    imgModal.classList.remove('modal__img-container--active')
    // Removemos la imagen anterior y sumamos index
    currentImgId--
    // Asignamos el index a la nueva imagen y la clase --active.
    imgModal = document.querySelector(`div[data-imgm='${currentImgId}']`)
    imgModal.classList.add('modal__img-container--active')
}

function reviewCountRight() {
    //Si es el 9 (max) debemos volver al inicio.
    if (currentImgId == images.length) {
        // Asignamos 0 ya que la función suma 1 genéricamente
        currentImgId = 0
    }
}
function reviewCountLeft() {
    //Si es el 1 (min) debemos ir al final.
    if (currentImgId == 1) {
        // Asignamos 0 ya que la función resta 1 genéricamente
        currentImgId = (images.length + 1)
    }
}

loadImageOnClickEvents()
loadModalOnClickImagesEvents()