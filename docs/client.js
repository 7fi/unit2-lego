const stepHolder = document.getElementById('stepHolder');

const stepInstruction = document.getElementById('stepInstruction');
const stepImg = document.getElementById("stepImg");

const nextStep = document.getElementById("nextStep");
const prevStep = document.getElementById("prevStep");

const needleTab = document.getElementById('needleTab');
const ferryTab = document.getElementById('ferryTab');
const mountainTab = document.getElementById('mountainTab');
const baseTab = document.getElementById('baseTab');

const modeToggle = document.getElementById("modeToggle");
let lightMode = true;

const baseSteps = [
    {instruction:"Lay the flat 72-prong green Lego horizontally.", img:"../img/base/step1.png"},
    {instruction:"Place one 8-prong pale blue Lego horizontally in the upper left corner of the base Lego.", img:"../img/base/step1.png"},
    {instruction:"Place one 12-prong sky blue Lego below pale blue Lego.", img:"../img/base/step2.png"},
    {instruction:"Put two 4-prong narrow sky blue Legos to the right of the 12-prong Lego.", img:"../img/base/step3.png"},
    {instruction:"Put two 2-prong sky blue Legos to the right of the narrow Legos.", img:"../img/base/step4.png"},
    {instruction:"Starting at the bottom left corner of the green base, place three 6-prong dark blue Legos side by side.", img:"../img/base/step5.png"},
    {instruction:"Place three 2-prong dark blue Legos to the right of the other dark blue Legos.", img:"../img/base/step6.png"},
    {instruction:"Stack two 2-prong light blue Legos horizontally on top of the dark blue Legos in the bottom right corner of the base.", img:"../img/base/step7.png"},
    {instruction:"Stack two 8-prong light blue Legos side by side to the left of the two 2-prong light blue Legos.", img:"../img/base/step8.png"},
];
const ferrySteps = [
    {instruction:"Place two 2-prong slanted white Legos on each end of one flat 16-prong green Lego.", img:"../img/ferry/step1.png"},
    {instruction:"Place two 4-prong narrow white Legos with holes in between slanted white Legos. Make sure the holes are facing outwards.", img:"../img/ferry/step2.png"},
    {instruction:"Stack two flat 6-prong light blue Legos on top of the white Legos.", img:"../img/ferry/step3.png"},
    {instruction:"Centered in the middle of the light blue Legos, stack one 4-prong white square Lego.", img:"../img/ferry/step4.png"},
    {instruction:"Place one 2-prong clear Lego on each side of the white square Lego.", img:"../img/ferry/step5.png"},
];
const mountainSteps = [
    {instruction:"Place two 2-prong grey Legos to the right of one 12-prong grey Lego.", img:"../img/mountain/step1.png"},
    {instruction:"Stack two 8-prong green Legos directly on top of grey Legos.", img:"../img/mountain/step2.png"},
    {instruction:"Stack two 2-prong lime green Legos in the center of the green Legos.", img:"../img/mountain/step3.png"},
    {instruction:"Place one 8-prong green Lego on each side of the lime green Legos.", img:"../img/mountain/step4.png"},
    {instruction:"Put one 1-prong slanted green Lego underneath the overhanging prongs on the right side.  Note: the slanted side should be facing away from you.", img:"../img/mountain/step5.png"},
    {instruction:"In the center of the stack, place two 6-prong brown Legos side by side.", img:"../img/mountain/step6.png"},
    {instruction:"Add one 2-prong red/brown Lego to each side of the brown Legos.", img:"../img/mountain/step7.png"},
    {instruction:"Stack three 4-prong light brown Legos directly on top of the brown Legos.", img:"../img/mountain/step8.png"},
    {instruction:"Add one 2-prong transparent yellow Lego to each side of the light brown Legos.", img:"../img/mountain/step9.png"},
    {instruction:"Stack two 6-prong tan Legos side by side directly on top of the light brown Legos.", img:"../img/mountain/step10.png"},
    {instruction:"Stack two tall 2-prong white Legos in the center of the tan Legos.", img:"../img/mountain/step11.png"},
    {instruction:"Add one 2-prong white Lego to each side of the tall white Legos.", img:"../img/mountain/step12.png"},
    {instruction:"Place one 2-prong clear Lego on both sides of the white Legos.", img:"../img/mountain/step13.png"},
    {instruction:"Stack one 2-prong clear Lego on top of each short white Lego.", img:"../img/mountain/step14.png"},
    {instruction:"Stack one 4-prong white Lego on the top in the center of the entire stack.", img:"../img/mountain/step15.png"},
];

const needleSteps = [
    {instruction:"Stack two 4-prong black square Legos directly on top of each other.", img:"../img/needle/step1.png"},
    {instruction:"Add one 4-prong yellow square Lego.", img:"../img/needle/step2.png"},
    {instruction:"Stack two 2-prong light green/yellow Legos side by side on top of the yellow square.", img:"../img/needle/step3.png"},
    {instruction:"Add two 2-prong sage green Legos.",img:"../img/needle/step4.png"},
    {instruction:"Repeat step 4.",img:"../img/needle/step5.png"},
    {instruction:"Stack two 4-prong light grey Legos on top of the sage green Legos.",img:"../img/needle/step6.png"},
    {instruction:"Stack two 2-prong light grey Legos side by side on top of the other light grey Legos.",img:"../img/needle/step7.png"},
    {instruction:"Add two flat 4-prong black square Legos.",img:"../img/needle/step8.png"},
    {instruction:"Stack one flat 8-prong tan Lego centered on top of the stack.",img:"../img/needle/step9.png"},
    {instruction:"Add one flat 12-prong lime green Lego centered on top of the tan Lego.",img:"../img/needle/step10.png"},
    {instruction:"Add one flat 16-prong light green/yellow Lego centered on top of the lime green Lego.",img:"../img/needle/step11.png"},
    {instruction:"Stack one flat 16-prong green Lego directly on top of the light green/yellow Lego.",img:"../img/needle/step12.png"},
    {instruction:"Stack one flat 16-prong light green/yellow Lego directly on top of the green Lego.",img:"../img/needle/step13.png"},
    {instruction:"Add one flat 12-prong lime green Lego in the center of the light green/yellow Lego.",img:"../img/needle/step14.png"},
    {instruction:"Add two flat 4-prong lime green square Legos side by side in the center of the lime green Lego.",img:"../img/needle/step15.png"},
    {instruction:"Stack one flat 8-prong tan Lego directly on top of the two lime green Legos.",img:"../img/needle/step16.png"},
    {instruction:"Stack one black round Lego in the center of the tan Lego.",img:"../img/needle/step17.png"},
    {instruction:"In the center of the black Lego, stack two brown connector Legos on top of each other.",img:"../img/needle/step18.png"},
    {instruction:"Add clear yellow cap Lego to the top of the connectors.",img:"../img/needle/step19.png"},
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
        modeToggle.children[0].classList.replace('gg-sun','gg-moon');
        document.body.classList.remove("darkMode");
    }
    else{
        modeToggle.children[0].classList.replace('gg-moon','gg-sun');
        document.body.classList.add("darkMode");
    }
    lightMode = !lightMode;
    document.cookie = ("lightMode=" + lightMode + "; path=/");
}