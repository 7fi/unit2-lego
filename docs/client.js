const stepHolder = document.getElementById('stepHolder');

const stepInstruction = document.getElementById('stepInstruction');
const stepImg = document.getElementById("stepImg");

const nextStep = document.getElementById("nextStep");
const prevStep = document.getElementById("prevStep");

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
loadStep(1);

for (let i = 0; i < steps.length; i++) {
    const stepSelector = document.createElement('div');
    stepSelector.innerHTML = i + 1;
    stepSelector.classList.add('stepNum')
    stepSelector.addEventListener('click', () => {
        loadStep(stepSelector.innerHTML);
        if(document.getElementsByClassName('stepSelected').length > 0)document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
        stepSelector.classList.add("stepSelected");
    })
    // stepSelector.onclick = loadStep(stepSelector.innerHTML);
    stepHolder.appendChild(stepSelector);
    const stepSeperator = document.createElement('div');
    stepSeperator.innerHTML = "|";
    stepHolder.appendChild(stepSeperator);
}
document.getElementsByClassName('stepNum')[0].classList.add('stepSelected');

function loadStep(stepNum){
    stepInstruction.innerHTML = steps[stepNum - 1].instruction;
    stepImg.src = steps[stepNum - 1].img;
    // console.log(steps[stepNum].instruction);
}

nextStep.addEventListener('click', () =>{
    let currentStep = parseInt(document.getElementsByClassName('stepSelected')[0].innerHTML);
    if(currentStep < steps.length){
        loadStep(currentStep + 1);
        document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
        document.getElementsByClassName('stepNum')[currentStep].classList.add("stepSelected");
    }
})
prevStep.addEventListener('click', () =>{
    let currentStep = parseInt(document.getElementsByClassName('stepSelected')[0].innerHTML);
    if(currentStep > 0){
        loadStep(currentStep - 1);
        document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
        document.getElementsByClassName('stepNum')[currentStep - 2].classList.add("stepSelected");
    }
})