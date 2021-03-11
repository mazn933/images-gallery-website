
const explore=document.querySelector('.explore');
const menu=document.querySelector('.menu');
const signup=document.querySelector('.signup')
const form=document.querySelector('.signUp-form')
//showing menu when explore button is clicked on
explore.addEventListener('click',function(){
    menu.classList.toggle('show-menu');
})




//deleting text inside search box
const dlt=document.querySelector('.delete-text');
const inputSearch=document.querySelector('.search-input')

inputSearch.addEventListener('keyup',function(){
    dlt.style.display='inline'
})
dlt.addEventListener('click',function(){
    inputSearch.value='';
    dlt.style.display='none'
})

//changing color of the heart
const HeartSign=document.querySelectorAll('.fa-heart')

HeartSign.forEach(e =>{
    e.addEventListener('click',function(){
        e.classList.toggle('changingcolor')

        
    })
})


//Hamburger menu
const Humburger=document.querySelector('.fa-bars');
const HumburgerMenu=document.querySelector('.hamburger-menu');

Humburger.addEventListener('click',function(){
    HumburgerMenu.classList.toggle('hamburger-menu-show-menu')
})

