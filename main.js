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


const timeline = gsap.timeline({defaults:{duration:1}});
timeline
    .fromTo(".rocket", {scale: 0,rotation: 0},{rotation: 0, scale: 1, y: "-300%", x:"-50%", ease:"steps(6)"})
    .fromTo(".rocket", {scale: 0, rotation: 120},{rotation: 160, delay: 2, scale: 1, y: "100%", x:"120%", ease:"steps(6)"})
    .fromTo(".rocket", {scale: 0,rotation: 0},{ rotation: 0, delay: 2, scale: 1, y: "-70%", x:"60%", ease:"steps(6)"})
    .from(".title", {y: "50%", opacity: "0", ease: "steps(8)"})
    .fromTo(".begin", {scale: 0, opacity: 0, y: "0%"},{delay: 1, scale: 1, opacity: 1, y: "100%", ease:"steps(4)"});

const button = document.querySelector('.begin')
button.addEventListener('click', () => {
    timeline
        .timeScale(3)
        .reverse();
    /**I need to add the floorboard bounce, the bed slide in. then, on click, get milo out of bed, text appears.after delay, button says to get dressed.
     * one function that when clicked, will move whatever outfit selected to the body. 
     * once the outfit is on, steps into the rocket, then launch the rocket.
     */
})
