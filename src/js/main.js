// Hamburger js
const burger = document.getElementById('_hamburger');
const burgerLinks = document.getElementById('_hamburger__links');
burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    burgerLinks.classList.toggle('active');
})
document.addEventListener('click',(event)=>{
    // if(burger.classList.contains('active')||burgerLinks.classList.contains('active')){
        const target = event.target;
        if (!burger.contains(target)){
            burger.classList.remove('active');
            burgerLinks.classList.remove('active');
        }
    }
)