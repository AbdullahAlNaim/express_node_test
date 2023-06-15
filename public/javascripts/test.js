const press = document.querySelector('button')
const num = document.querySelector('p')
let count = 0;
press.addEventListener('click', () => {
    count += 1;
    num.innerHTML = count;
})