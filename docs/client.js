const stepHolder = document.getElementById('stepHolder');

const stepInstruction = document.getElementById('stepInstruction');
const stepImg = document.getElementById("stepImg");

const nextStep = document.getElementById("nextStep");
const prevStep = document.getElementById("prevStep");

const modeToggle = document.getElementById("modeToggle");
let lightMode = true;

const steps = [
    {instruction:"Stack two black four prong Legos", img:"../img/step1.png"},
    {instruction:"Stack one yellow four prong Lego directly on top of the stack created in previous step."},
    {instruction:"Stack two yellow two prong Lego directly on top of stack created in previous step."},
    {instruction:"Stack two sage green two prong Lego directly on top of stack created in previous step.",img:"../img/step4.png"},
    {instruction:"Repeat Step 4, but stack Lego perpendicularly this time.",img:"../img/step5.png"},
    {instruction:"Stack two grey four prong Lego directly on top of stack created in previous step.",img:"../img/step6.png"},
    {instruction:"Stack two flat black four prong Lego directly on top of stack created in previous step.",img:"../img/step7.png"},
    {instruction:"Stack one flat tan eight prong Lego on top of stack created in previous step, centered so that two prongs stick out of stack on both ends.",img:"../img/step8.png"},
    {instruction:"Stack one flat olive green twelve prong Lego on top of stack created in previous step, centered so that two prongs stick out of stack on both ends.",img:"../img/step9.png"},
    {instruction:"Stack one flat light green sixteen prong Lego on top of stack created in previous step, centered so that two prongs stick out of stack on both ends.",img:"../img/step10.png"},
    {instruction:"Stack one flat green sixteen prong Lego directly on top of stack created in previous step.",img:"../img/step11.png"},
    {instruction:"Stack one flat light green sixteen prong Lego on top of stack created in previous step.",img:"../img/step12.png"},
    {instruction:"Stack one flat olive green twelve prong Lego on top of stack created in previous step, centered so that two prongs from last Lego added stick out on both ends",img:"../img/step13.png"},
    {instruction:"Stack two flat olive green four prong Lego on top of stack created in previous step, centered so that two prongs from last Lego added stick out on both ends.",img:"../img/step14.png"},
    {instruction:"Stack one flat tan eight prong Lego directly on top of stack created in previous step",img:"../img/step15.png"},
    {instruction:"Stack one black circular Lego on top of stack created in previous step, centered so that two prongs from last Lego added stick out on both ends.",img:"../img/step16.png"},
    {instruction:"Stack two brown connector Lego on top of each other and place them on stack created in previous step.",img:"../img/step17.png"},
    {instruction:"Stack one transparent yellow cap Lego on top of stack created in previous step.",img:"../img/step18.png"},
]

function load(){
    let myBool = (decodeURIComponent(document.cookie).split('=')[1] === 'true');
    console.log("Lightmode is wrong:", myBool != lightMode)
    if(myBool != lightMode){
        switchMode();
    }
}

// Toggle between light and dark mode
modeToggle.addEventListener('click', () => {
    console.log("modeSwitched")
    switchMode();
})

function switchMode(){
    if(document.body.classList.contains("darkMode")){
        document.body.classList.remove("darkMode");
        modeToggle.children[0].classList.replace('gg-moon','gg-moon');
    }
    else{
        document.body.classList.add("darkMode");
        modeToggle.children[0].classList.replace('gg-moon','gg-sun');
    }
    lightMode = !lightMode;
    document.cookie = ("lightMode=" + lightMode + "; path=/");
}