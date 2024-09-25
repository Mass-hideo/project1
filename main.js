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
    .fromTo(".rocket", {scale: 0, rotation: 120},{rotation: 160, delay: 2, scale: 1, y: "100%", x:"120%", ease:"steps(8)"})
    .fromTo(".rocket", {scale: 0,rotation: 0},{ rotation: 0, delay: 1, scale: 1, y: "-70%", x:"60%", ease:"steps(4)"})
    .from(".title", {y: "50%", opacity: "0", ease: "steps(8)"})
    .fromTo(".begin", {scale: 0, opacity: 0, y: "0%"},{delay: 1, scale: 1, opacity: 1, y: "100%", ease:"steps(4)"})
    .fromTo(".floor", {opacity:0},{opacity:0})
    .fromTo(".bed", {opacity:0},{opacity:0})
    .fromTo(".emptyBed", {opacity:0},{opacity:0})
    .fromTo(".head", {opacity:0},{opacity:0})
    .fromTo(".defaultClothes", {opacity:0},{opacity:0})
    .fromTo(".spaceSuit", {opacity:0},{opacity:0})
    .fromTo(".saiyan", {opacity:0},{opacity:0})
    .fromTo(".jedi", {opacity:0},{opacity:0})
    .fromTo(".wakeUp", {opacity:0},{opacity:0})
    .fromTo(".helpMilo", {opacity:0},{opacity:0})
    //Includes these elements on page, but theyre invisible.

const button = document.querySelector('.begin')
button.addEventListener('click', () => {
timeline
    .timeScale(3)
    .reverse()
})

button.addEventListener("click", () =>{
const spawnClothes = gsap.timeline({defaults:{duration:1}})
spawnClothes
    .fromTo(".floor", {opacity:0, y:"200%"},{delay:4, opacity:1,ease: "bounce", y:"0%"})
    .fromTo(".bed", {opacity:0},{opacity:1})
    .fromTo(".wakeUp", {opacity: 0},{opacity: 1})
})

const bed = document.querySelector(".bed")
bed.addEventListener('click', () => {
    const bedSelect = gsap.timeline({defaults:{duration:.5, ease:"steps(2)"}})
bedSelect
    .fromTo(".bed", {opacity: 1},{opacity: 0})
    .fromTo(".emptyBed",{opacity: 0}, {opacity: 1})
    .fromTo(".head", {opacity: 0},{opacity: 1})
    .fromTo(".defaultClothes", {opacity: 0},{opacity: 1})
    .fromTo(".wakeUp", {opacity: 1},{opacity: 0})
    .fromTo(".helpMilo", {opacity: 0},{delay: 1, opacity: 1})
})

const selected = document.querySelectorAll(".outfit");
selected.forEach(element => {
    element.addEventListener("click", () =>{
        moveFit(element)
    })
    moveFit()
});
function moveFit(shirt){
    const moveTimeline = gsap.timeline();
    moveTimeline.to(shirt, {y: "-1291%", x:"707%"}) 
}