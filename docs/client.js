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
    {instruction:"Lay the flat 6x12 green base plate horizontally.", img:"../img/base/step0.png"},
    {instruction:"Place one 2x4 pale blue brick horizontally in the upper left corner of the base plate.", img:"../img/base/step1.png"},
    {instruction:"Place one 2x6 sky blue brick below pale blue brick.", img:"../img/base/step2.png"},
    {instruction:"Put two 2x2 narrow sky blue bicks to the right of the 2x6 brick.", img:"../img/base/step3.png"},
    {instruction:"Put two 1x2 sky blue bricks to the right of the narrow bricks.", img:"../img/base/step4.png"},
    {instruction:"Starting at the bottom left corner of the green plate, place three 2x3 dark blue bricks side by side.", img:"../img/base/step5.png"},
    {instruction:"Place three 1x2 dark blue bricks to the right of the other dark blue bricks.", img:"../img/base/step6.png"},
    {instruction:"Stack two 1x2 light blue bricks horizontally on top of the dark blue bricks in the bottom right corner of the plate.", img:"../img/base/step7.png"},
    {instruction:"Stack two 2x4 light blue bricks side by side to the left of the two 1x2 light blue bricks.", img:"../img/base/step8.png"},
];
const ferrySteps = [
    {instruction:"Place two 1x2 sloped white bricks on each end of one 2x8 green plate.", img:"../img/ferry/step1.png"},
    {instruction:"Place two 1x4 white bricks with holes in between sloped white bricks. Make sure the holes are facing outwards.", img:"../img/ferry/step2.png"},
    {instruction:"Stack two 2x3 light blue plates on top of the white bricks.", img:"../img/ferry/step3.png"},
    {instruction:"Centered in the middle of the light blue plates, stack one 2x2 white brick.", img:"../img/ferry/step4.png"},
    {instruction:"Place one 1x2 clear brick on each side of the white 2x2 brick.", img:"../img/ferry/step5.png"},
];
const mountainSteps = [
    {instruction:"Place two 1x2 grey bricks to the right of one 2x6 grey brick.", img:"../img/mountain/step1.png"},
    {instruction:"Stack two 2x4 green bricks directly on top of grey bricks.", img:"../img/mountain/step2.png"},
    {instruction:"Stack two 1x2 lime green bricks in the center of the green bricks.", img:"../img/mountain/step3.png"},
    {instruction:"Place one 2x4 green brick on each side of the lime green bricks.", img:"../img/mountain/step4.png"},
    {instruction:"Put one 1x1 sloped green brick underneath the overhanging prongs on the right side. \nNote: the slanted side should be facing away from you.", img:"../img/mountain/step5.png"},
    {instruction:"In the center of the stack, place two 2x3 brown bricks side by side.", img:"../img/mountain/step6.png"},
    {instruction:"Add one 1x2 red/brown brick to each side of the brown bricks.", img:"../img/mountain/step7.png"},
    {instruction:"Stack three 2x2 light brown bricks directly on top of the brown bricks.", img:"../img/mountain/step8.png"},
    {instruction:"Add one 1x2 transparent yellow brick to each side of the light brown bricks.", img:"../img/mountain/step9.png"},
    {instruction:"Stack two 2x3 tan bricks side by side directly on top of the light brown bricks.", img:"../img/mountain/step10.png"},
    {instruction:"Stack two tall 1x2 white bricks in the center of the tan bricks.", img:"../img/mountain/step11.png"},
    {instruction:"Add one 1x2 white brick to each side of the tall white bricks.", img:"../img/mountain/step12.png"},
    {instruction:"Place one 1x2 clear brick on both sides of the white bricks.", img:"../img/mountain/step13.png"},
    {instruction:"Stack one 1x2 clear brick on top of each short white brick.", img:"../img/mountain/step14.png"},
    {instruction:"Stack one 2x2 white brick on the top in the center of the entire stack.", img:"../img/mountain/step15.png"},
];

const needleSteps = [ 
    {instruction:"Stack two 2x2 black square bricks directly on top of each other.", img:"../img/needle/step1.png"},
    {instruction:"Add one 2x2 yellow square brick.", img:"../img/needle/step2.png"},
    {instruction:"Stack two 1x2 light green/yellow bricks side by side on top of the yellow brick.", img:"../img/needle/step3.png"},
    {instruction:"Add two 1x2 sage green bricks.",img:"../img/needle/step4.png"},
    {instruction:"Repeat step 4.",img:"../img/needle/step5.png"},
    {instruction:"Stack two 2x2 light grey bricks on top of the sage green bricks.",img:"../img/needle/step6.png"},
    {instruction:"Stack two 1x2 light grey bricks side by side on top of the other light grey bricks.",img:"../img/needle/step7.png"},
    {instruction:"Add two 2x2 black square plates.",img:"../img/needle/step8.png"},
    {instruction:"Stack one 2x4 tan plate brick on top of the stack.",img:"../img/needle/step9.png"},
    {instruction:"Add one 2x6 lime green plate centered on top of the tan plate.",img:"../img/needle/step10.png"},
    {instruction:"Add one 2x8 light green/yellow plate centered on top of the lime green plate.",img:"../img/needle/step11.png"},
    {instruction:"Stack one 2x8 green plate directly on top of the light green/yellow plate.",img:"../img/needle/step12.png"},
    {instruction:"Stack one 2x8 light green/yellow plate directly on top of the green plate.",img:"../img/needle/step13.png"},
    {instruction:"Add one 2x6 lime green plate in the center of the light green/yellow plate.",img:"../img/needle/step14.png"},
    {instruction:"Add two 2x2 lime green square plate side by side in the center of the lime green plate.",img:"../img/needle/step15.png"},
    {instruction:"Stack one 2x4 tan plate directly on top of the two lime green plate.",img:"../img/needle/step16.png"},
    {instruction:"Stack one black round brick in the center of the tan plate.",img:"../img/needle/step17.png"},
    {instruction:"In the center of the black brick, stack two brown connector brick?s on top of each other.",img:"../img/needle/step18.png"},
    {instruction:"Add clear yellow cap brick to the top of the connectors.",img:"../img/needle/step19.png"},
]

const finalSteps = [
    {instruction:"Make sure the base is lying horizontally with the empty green prongs in the top right corner.", img:"../img/final/step1.png"},
    {instruction:"Stack the Mt. Rainier build on the open green prongs on the top right corner. Note: the slanted green Lego should be hanging off the base to the right.", img:"../img/final/step2.png"},
    {instruction:"Add the Space Needle build all the way to the left side of the base with half of the black square on the pale blue Lego and the other half on the light blue Lego.", img:"../img/final/step3.png"},
    {instruction:"Add Ferry build towards the front of the base leaving two light blue Lego prongs exposed on the left side.", img:"../img/final/step4.png"}
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