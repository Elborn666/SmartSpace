const BurgerBtn = document.querySelector('.burger__btn')
const menuBurger = document.querySelector('.burger__container')
const body = document.querySelector('body')


BurgerBtn.addEventListener('click', onToggleMenuBurger)


function onToggleMenuBurger (){
    menuBurger.classList.toggle('active__burger')
    body.classList.toggle('hidden')
}
