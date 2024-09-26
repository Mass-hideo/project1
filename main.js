document.addEventListener("DOMContentLoaded", (event) =>{
    const container = document.querySelector('.loadpage');

    for(let i = 0; i < 100; i++){
        const stars = document.createElement('span');
        stars.innerHTML = '.';
        stars.style.top = getRndInteger(0, container.clientHeight) + 'px';
        stars.style.left = getRndInteger(0, container.clientWidth) + 'px';
        container.appendChild(stars);
        stars.style.color = "white";

    }

});

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
};

const bedChange = document.querySelector(".bed")
const empty = document.querySelector(".emptyBed")
const wakeUpBtn = document.querySelector(".wakeUp")
const miloMsg = document.querySelector(".helpMilo")
const confirms = document.querySelector(".sure")
const deny = document.querySelector(".no")
const check = document.querySelector(".positive")
const uncheck = document.querySelector(".negative")
const launchMe = document.querySelector(".pickFit")
const tfp = document.querySelector(".thanks")
const again = document.querySelector(".again")

const timeline = gsap.timeline({defaults:{duration:1}});
timeline
    .fromTo(".rocket", {scale: 0,rotation: 0},{rotation: 0, scale: 1, y: "-700%", x:"-50%", ease:"steps(6)"})
    .fromTo(".rocket", {scale: 0, rotation: 120},{rotation: 160, delay: 2, scale: 1, y: "200%", x:"120%", ease:"steps(16)"})
    .fromTo(".rocket", {scale: 0,rotation: 0},{ rotation: 0, delay: 1, scale: 1, y: "0%", x:"60%", ease:"steps(4)"})
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
    .fromTo(".sure", {opacity:0},{opacity:0})
    .fromTo(".no", {opacity:0},{opacity:0})
    .fromTo(".positive", {opacity:0},{opacity:0})
    .fromTo(".negative", {opacity:0},{opacity:0})
    .fromTo(".pickFit", {opacity:0},{opacity:0})
    .fromTo(".thanks", {opacity:0},{opacity:0})
    bedChange.style.visibility = "hidden"; //visible bed cannot be clicked while invisible
    empty.style.visibility = "hidden"; //invisible bed cannot be clicked either
    wakeUpBtn.style.visibility = "hidden"; //wake up milo is hidden
    miloMsg.style.visibility = "hidden"; //milo's help message is hidden
    confirms.style.visibility = "hidden"; //I will help milo button hidden
    deny.style.visibility = "hidden"; //I won't help hidden too
    check.style.visibility = "hidden"; //positive response hidden
    uncheck.style.visibility = "hidden"; //negative response hidden
    launchMe.style.visibility = "hidden"; //launch me button hidden
    tfp.style.visibility = "hidden"; //thank you for playing hidden
    again.style.visibility = "hidden"; //thank you for playing hidden

    //Includes these elements on page, but theyre invisible.

const button = document.querySelector('.begin')
button.addEventListener('click', () => {
timeline
    .timeScale(3)
    .reverse()
});

const rocketSound = new Audio()
rocketSound.src = "rocket.mp3"

const yawn = new Audio()
yawn.src = "yawn.mp3"

button.addEventListener("click", () =>{
const spawnClothes = gsap.timeline({defaults:{duration:1}})
bedChange.style.visibility = "visible"; //visible bed cannot be clicked while invisible
empty.style.visibility = "visible";//visible bed cannot be clicked while invisible
wakeUpBtn.style.visibility = "visible"; //wake up milo is hidden
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
    bedChange.style.visibility = "hidden";
    miloMsg.style.visibility = "visible"; //milo's help message is hidden
    confirms.style.visibility = "visible"; //I will help milo button hidden
    deny.style.visibility = "visible"; //I won't help hidden too
    bedSelect
    .fromTo(".helpMilo", {opacity: 0},{delay: 1, opacity: 1})
    .fromTo(".sure", {opacity:0},{opacity:1})
    .fromTo(".no", {opacity:0},{opacity:1})

})

bed.addEventListener('click', () => {
    yawn.play();
})
const nextPage = gsap.timeline({defaults:{duration: .5}})

const yes = document.querySelector(".sure")
yes.addEventListener("click", () => {
    gsap.fromTo(".no", {opacity:1},{opacity:0})
    gsap.fromTo(".helpMilo", {opacity: 1},{opacity: 0})
    gsap.fromTo(".positive", {opacity:0},{opacity:1})
    const nextPage = gsap.timeline({defaults:{duration: .5}})
    nextPage.fromTo(".positive", {opacity:1},{delay: 4, opacity:0})
    nextPage.fromTo(".sure", {opacity:1}, {opacity:0})
    nextPage.fromTo(".emptyBed", {opacity:1}, {opacity:0})
    nextPage.fromTo(".pickFit", {opacity:0},{opacity:1})
    // gsap.fromTo(".spaceSuit", {opacity:0},{delay:7, opacity:1})
    // gsap.fromTo(".saiyan", {opacity:0},{delay:7,opacity:1})
    // gsap.fromTo(".jedi", {opacity:0},{delay:7,opacity:1})
    check.style.visibility = "visible"; //positive response hidden
    launchMe.style.visibility = "visible"; //positive response hidden
})


const no = document.querySelector(".no")
no.addEventListener("click", () => {
    nextPage.fromTo(".sure", {opacity:1}, {opacity:0})
    gsap.fromTo(".positive", {opacity:1},{opacity:0})
    gsap.fromTo(".helpMilo", {opacity: 1},{opacity: 0})
    gsap.fromTo(".negative", {opacity:0},{opacity:1})
    nextPage.fromTo(".emptyBed", {opacity:1}, {opacity:0})
    nextPage.fromTo(".negative", {opacity:1},{delay: 4, opacity:0})
    nextPage.fromTo(".no", {opacity:1},{opacity:0})
    nextPage.fromTo(".pickFit", {opacity:0},{opacity:1})
    uncheck.style.visibility = "visible"; //positive response hidden
    launchMe.style.visibility = "visible"; //positive response hidden
    // gsap.fromTo(".spaceSuit", {opacity:0},{delay:7, opacity:1})
    // gsap.fromTo(".saiyan", {opacity:0},{delay:7,opacity:1})
    // gsap.fromTo(".jedi", {opacity:0},{delay:7,opacity:1})
})

const launch = document.querySelector(".pickFit")
launch.addEventListener("click", () => {
    gsap.fromTo(".pickFit", {opacity:0},{delay: 5, opacity:1})
    gsap.fromTo(".head", {opacity:1}, {opacity:0})
    gsap.fromTo(".defaultClothes", {opacity:1}, {opacity:0})
    gsap.fromTo(".rocket", {scale: 1,rotation: 0,y: "20%", x:"30%"},{ rotation: 30, delay: 5, scale: 0, y: "-300%", x:"60%", ease:"steps(4)"})
    gsap.fromTo(".floor", {opacity:1, y:"0%"},{delay:4, opacity:1,ease: "bounce", y:"200%"})
    gsap.fromTo(".thanks", {opacity:0},{delay:4, opacity:1})
    gsap.fromTo(".pickFit", {opacity:1},{opacity:0})
    bedChange.style.visibility = "hidden"; //visible bed cannot be clicked while invisible
    empty.style.visibility = "hidden"; //invisible bed cannot be clicked either
    wakeUpBtn.style.visibility = "hidden"; //wake up milo is hidden
    miloMsg.style.visibility = "hidden"; //milo's help message is hidden
    confirms.style.visibility = "hidden"; //I will help milo button hidden
    deny.style.visibility = "hidden"; //I won't help hidden too
    check.style.visibility = "hidden"; //positive response hidden
    uncheck.style.visibility = "hidden"; //negative response hidden
    launchMe.style.visibility = "hidden"; //launch me button hidden
    tfp.style.visibility = "hidden"; //thank you for playing hidden
    again.style.visibility = "hidden"; //thank you for playing hidden

})

const reload = document.querySelector(".again")
launch.addEventListener("click", () => {
    rocketSound.play();
    launchMe.style.visibility = "hidden"; //positive response hidden
    tfp.style.visibility = "visible";
    gsap.to(".thanks", {opacity: 0, delay:10})
    again.style.visibility = "visible";
    gsap.fromTo(".again", {opacity: 0}, { delay: 11, opacity: 1}) //thank you for playing hidden
})

reload.addEventListener("click", () => {
    location.reload()
    again.style.visibility = "hidden";
})

// const selected = document.querySelectorAll(".outfit");
// selected.forEach(element => {
//     element.addEventListener("click", () =>{
//         moveFit(element)
//     })
// });

// function moveFit(shirt){
//     const moveTimeline = gsap.timeline();
//     moveTimeline.to(shirt, {y: "-1291%", x:"707%"}) 
// }