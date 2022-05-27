const stepHolder = document.getElementById('stepHolder');

const stepInstruction = document.getElementById('stepInstruction');
const stepImg = document.getElementById("stepImg");

const steps = [
    {instruction:"Stack two black four prong Legos", img:"../img/heroimg.png"},
    {instruction:"Stack one yellow four prong Lego directly on top of the stack created in previous step."},
    {instruction:"Stack two yellow two prong Lego directly on top of stack created in previous step."},
    {instruction:"Stack two sage green two prong Lego directly on top of stack created in previous step."}
]
loadStep(0);

for (let i = 0; i < steps.length; i++) {
    const stepSelector = document.createElement('div');
    stepSelector.innerHTML = i;
    stepSelector.classList.add('stepNum')
    stepSelector.addEventListener('click', () => {
        loadStep(stepSelector.innerHTML);
        if(document.getElementsByClassName('stepSelected').length > 0)document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
        stepSelector.classList.add("stepSelected");
    })
    // stepSelector.onclick = loadStep(stepSelector.innerHTML);
    stepHolder.appendChild(stepSelector);
}
document.getElementsByClassName('stepNum')[0].classList.add('stepSelected');

function loadStep(stepNum){
    stepInstruction.innerHTML = steps[stepNum].instruction;
    stepImg.src = steps[stepNum].img;
    // console.log(steps[stepNum].instruction);
}