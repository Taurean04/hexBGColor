const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const body = document.querySelector('body');
const button = document.getElementById('btn');
const value = document.getElementById('hex-value');
button.addEventListener('click', () => {
    let color = '#'
    for(let i = 0; i < 6; i++){
        const hexValues = Math.floor(Math.random() * hex.length);
        color += hex[hexValues];
    }
    value.textContent = color;
    body.style.backgroundColor = color;
})