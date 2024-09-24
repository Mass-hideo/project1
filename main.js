document.addEventListener("DOMContentLoaded", (event) =>{
    const container = document.querySelector('.loadpage');

    for(let i = 0; i < 100; i++){
        const stars = document.createElement('span');
        stars.innerHTML = '✨';
        stars.style.top = getRndInteger(0, container.clientHeight) + 'px';
        stars.style.left = getRndInteger(0, container.clientWidth) + 'px';
        container.appendChild(stars);
    }
});

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
};