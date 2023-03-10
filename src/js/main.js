// Hamburger js
const burger = document.getElementById('_hamburger');
const burgerLinks = document.getElementById('_hamburger__links');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerLinks.classList.toggle('active');
})
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!burger.contains(target)) {
        burger.classList.remove('active');
        burgerLinks.classList.remove('active');
    }
}
)


// Design Cards javascript
const card = document.querySelectorAll('.card');
console.log(card);
card.forEach(element => {
    element.addEventListener('click', () => {
        card.forEach(e => {
            if (!(e === element)) {
                e.classList.remove('active');
            } else element.classList.add('active');
        });
    })
});
