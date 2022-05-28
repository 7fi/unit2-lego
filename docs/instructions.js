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
    stepSeperator.classList.add("stepSeperator");
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