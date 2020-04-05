const likeIconsGal = document.querySelectorAll("i.fas.fa-heart")
const commentIconsGal = document.querySelectorAll(".gallery__comments")


for (let i = 0; i < likeIconsGal.length; i++) {
    likeIconsGal[i].addEventListener('click', e => {

        addLikeOnClick(e.toElement);
    })
}


function addLikeOnClick(iconElement) {
    if (iconElement.innerText === ` 100`) {
        iconElement.innerText = ` 101`
        iconElement.style.color = "red"
    } else {
        iconElement.innerText = ` 100`
        iconElement.style.color = "#111"
    }
}