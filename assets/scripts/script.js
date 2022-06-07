
const burger = document.querySelector('.menu');
const resNav = document.querySelector('.resNav')

burger.addEventListener('click', ()=>{
    resNav.classList.toggle('toggle')
})

const navlinks = document.querySelectorAll('.resNav ul li a');
navlinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        resNav.classList.remove('toggle')
    })
})