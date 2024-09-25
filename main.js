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
    // I haven't figured out how to separate the scenes

    // EVENTS TRIGGERED ON LOADING (Rocket flies across screen, text loads in, begin button shows)
    // .fromTo(".rocket", {scale: 0,rotation: 0},{rotation: 0, scale: 1, y: "-300%", x:"-50%", ease:"steps(6)"})
    // .fromTo(".rocket", {scale: 0, rotation: 120},{rotation: 160, delay: 2, scale: 1, y: "100%", x:"120%", ease:"steps(8)"})
    // .fromTo(".rocket", {scale: 0,rotation: 0},{ rotation: 0, delay: 1, scale: 1, y: "-70%", x:"60%", ease:"steps(4)"})
    // .from(".title", {y: "50%", opacity: "0", ease: "steps(8)"})
    // .fromTo(".begin", {scale: 0, opacity: 0, y: "0%"},{delay: 1, scale: 1, opacity: 1, y: "100%", ease:"steps(4)"})

    //Loads in bed with a person on it, loads in the empty bed, and the default head and body, but at an opacity of 0. Should occur 
    //after the begin button starts. I want to add a basic bedroom around it, but I can't figure out how to.
    .fromTo(".bed", {scale: 0,rotation: 0},{rotation: 0, scale: 1, y: "-300%", x:"20%", ease:"bounce"})
    .fromTo(".emptyBed", {scale: 0,rotation: 0, opacity: 0},{rotation: 0, scale: 1, y: "-206%", x:"20%"})

    .fromTo(".defaultClothes", {scale: 0, opacity: 0},{opacity: 0, scale: 1, y: "-870%", x:"247%"})
    .fromTo(".head", {scale: 0, opacity: 0},{opacity: 0, scale: 1, y: "-1070%", x:"242%"})
    .fromTo(".spaceSuit", {scale: 0, opacity: 0},{opacity: 0, scale: 1, y: "-951%", x:"407%"})
    .fromTo(".saiyan", {scale: 0, opacity: 0},{opacity: 0, scale: 1, y: "-1151%", x:"557%"})
    .fromTo(".jedi", {scale: 0, opacity: 0},{opacity: 0, scale: 1, y: "-1291%", x:"707%"})

const bedSelect = gsap.timeline({defaults:{duration: .05, delay: 0}});
const bed = document.querySelector('.bed')
//Troubleshooting notes: 
// 1. The location of the bed changes based on which browser I am using.
// 2. I need to click multiple times to trigger the same event for the "Wake me up"
bed.addEventListener('click', () => {
bedSelect
    .fromTo(".bed", {opacity: 1},{opacity: 0})
    .fromTo(".emptyBed", {opacity: 0},{opacity: 1})
    .fromTo(".defaultClothes", {opacity: 0},{opacity: 1})
    .fromTo(".head", {opacity: 0},{opacity: 1})
    //These functions now work, it's just difficult to have a standard system of coordinates.
    // .fromTo(".spaceSuit", {opacity: 0},{opacity: 1})
    // .fromTo(".saiyan", {opacity: 0},{opacity: 1})
    // .fromTo(".jedi", {opacity: 0},{opacity: 1})
})

const outfits = gsap.timeline({defaults:{duration: 1}})

const button = document.querySelector('.begin')
button.addEventListener('click', () => {
    // timeline.timeScale(3)
    // timeline.reverse()
    /**I need to add the floorboard bounce, the bed slide in. then, on click, get milo out of bed, text appears.after delay, button says to get dressed.
     * one function that when clicked, will move whatever outfit selected to the body. 
     * once the outfit is on, steps into the rocket, then launch the rocket.
     */
    timeline.fromTo(".spaceSuit", {scale: 0, opacity: 0},{opacity: 0, scale: 1, y: "-870%", x:"247%"})
    timeline.fromTo(".outfit", {opacity: 0},{opacity: 1})
})

function moveFit(shirt){
    const moveTimeline = gsap.timeline();
    moveTimeline.to(shirt, {y: "-1291%", x:"707%"}) 
}