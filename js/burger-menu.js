const BurgerBtn = document.querySelector('.burger__btn')
const menuBurger = document.querySelector('.burger__container')
const body = document.querySelector('body')
let windowWidth = document.documentElement.clientWidth

BurgerBtn.addEventListener('click', onToggleMenuBurger)


function onToggleMenuBurger (){
    menuBurger.classList.toggle('active__burger')
    body.classList.toggle('hidden')
}

// Слухач який реагує на зміну ширини екрана

window.addEventListener("resize",  onRemoveBlock)

function onRemoveBlock () {
    if(document.documentElement.clientWidth > 600){
       console.log('width > 600')
       menuBurger.classList.remove('active__burger')
       body.classList.remove('hidden')
    } else {
        console.log('width < 600')
    }
}

onRemoveBlock()
