let head = document.querySelector('header');
let cont = document.querySelector('.container');
let submit = document.getElementById('submit');
let rate = document.getElementById('rate');
let rating = document.getElementById('rating');
let list = document.querySelectorAll('.number');

submit.addEventListener('click', () => {
    cont.classList.remove('hidden');
    head.style.display = 'none';
})

rate.addEventListener('click', () => {
    cont.classList.add('hidden');
    head.style.display = 'block';
}) 
list.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    })
})