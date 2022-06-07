let currentTab = "base";

loadTab(currentTab);
loadStep(1, currentTab);

function loadTab(tab){
    while(stepHolder.childElementCount > 0){
        stepHolder.children[stepHolder.childElementCount - 1].remove();
    }

    currentTab = tab;
    let steps;
    const baseTab = document.createElement('div');
    baseTab.classList.add("tabName");
    baseTab.id = "baseTab";
    baseTab.onclick = function(){loadTab("base")};
    baseTab.innerHTML = "Part 1";
    stepHolder.appendChild(baseTab);
    const baseSeperator = document.createElement('div');
    baseSeperator.classList.add("stepSeperator");
    baseSeperator.innerHTML = "|";
    stepHolder.appendChild(baseSeperator);

    if(tab == "base"){
        steps = baseSteps;
        baseTab.classList.add('curTab');
        baseSeperator.classList.add('curTab');
        createSteps(steps);
    }

    const ferryTab = document.createElement('div');
    ferryTab.classList.add("tabName");
    ferryTab.id = "ferryTab";
    ferryTab.onclick = function(){loadTab("ferry")};
    ferryTab.innerHTML = "Part 2";
    stepHolder.appendChild(ferryTab);
    const ferrySeperator = document.createElement('div');
    ferrySeperator.classList.add("stepSeperator");
    ferrySeperator.innerHTML = "|";
    stepHolder.appendChild(ferrySeperator);
    
    if(tab == "ferry"){
        steps = ferrySteps;
        ferryTab.classList.add('curTab');
        ferrySeperator.classList.add('curTab');
        createSteps(steps);
    }

    const mountainTab = document.createElement('div');
    mountainTab.classList.add("tabName");
    mountainTab.id = "mountainTab";
    mountainTab.onclick = function(){loadTab("mountain")};
    mountainTab.innerHTML = "Part 3";
    stepHolder.appendChild(mountainTab);
    const mountainSeperator = document.createElement('div');
    mountainSeperator.classList.add("stepSeperator");
    mountainSeperator.innerHTML = "|";
    stepHolder.appendChild(mountainSeperator);
    
    if(tab == "mountain"){
        steps = mountainSteps;
        mountainTab.classList.add('curTab');
        mountainSeperator.classList.add('curTab');
        createSteps(steps);
    }

    const needleTab = document.createElement('div');
    needleTab.classList.add("tabName");
    needleTab.id = "needleTab";
    needleTab.onclick = function(){loadTab("needle")};
    needleTab.innerHTML = "Part 4";
    stepHolder.appendChild(needleTab);
    const needleSeperator = document.createElement('div');
    needleSeperator.classList.add("stepSeperator");
    needleSeperator.innerHTML = "|";
    stepHolder.appendChild(needleSeperator);
    if(tab == "needle"){
        steps = needleSteps;
        needleTab.classList.add('curTab');
        needleSeperator.classList.add('curTab');
        createSteps(steps);
    }

    // if(tab == "needle"){
    //     steps = needleSteps;
    //     // for (let i = 0; i < 8; i++) {
    //     //     stepHolder.children[i].classList.remove("curTab");
    //     // }
        
    //     needleTab.classList.add('curTab');
    //     stepHolder.children[7].classList.add('curTab');
    // }else if(tab == "ferry"){
    //     steps = ferrySteps;
    //     for (let i = 0; i < 8; i++) {
    //         stepHolder.children[i].classList.remove("curTab");
    //     }
    //     ferryTab.classList.add('curTab');
    //     stepHolder.children[3].classList.add('curTab');
    // }else if(tab == "mountain"){
    //     steps = mountainSteps;
    //     for (let i = 0; i < 8; i++) {
    //         stepHolder.children[i].classList.remove("curTab");
    //     }
    //     mountainTab.classList.add('curTab');
    //     stepHolder.children[5].classList.add('curTab');
    // }else{
    //     steps = baseSteps;
    //     for (let i = 0; i < 8; i++) {
    //         stepHolder.children[i].classList.remove("curTab");
    //     }
    //     baseTab.classList.add('curTab');
    //     stepHolder.children[1].classList.add('curTab');
    // }

    // oldSteps = document.getElementsByClassName('stepNum');
    // for (let i = 8; i < stepHolder.children.length; i++) {
    //     stepHolder.children[i].classList.add('curTab');
    // }
    
    loadStep(1,currentTab);
    document.getElementsByClassName('stepNum')[0].classList.add('stepSelected');
}

function createSteps(steps){
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
}

function loadStep(stepNum,tab){
    if(tab == "base"){
        stepInstruction.innerHTML = baseSteps[stepNum - 1].instruction;
        stepImg.src = baseSteps[stepNum - 1].img;
    }else if(tab == "ferry"){
        stepInstruction.innerHTML = ferrySteps[stepNum - 1].instruction;
        stepImg.src = ferrySteps[stepNum - 1].img;
    }else if(tab == "mountain"){
        stepInstruction.innerHTML = mountainSteps[stepNum - 1].instruction;
        stepImg.src = mountainSteps[stepNum - 1].img;
    }else{
        stepInstruction.innerHTML = needleSteps[stepNum - 1].instruction;
        stepImg.src = needleSteps[stepNum - 1].img;
    }
    // console.log(steps[stepNum].instruction);
}

nextStep.addEventListener('click', () =>{
    let currentStep = parseInt(document.getElementsByClassName('stepSelected')[0].innerHTML);
    if(currentStep < needleSteps.length){
        loadStep(currentStep + 1, currentTab);
        document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
        document.getElementsByClassName('stepNum')[currentStep].classList.add("stepSelected");
    }
})
prevStep.addEventListener('click', () =>{
    let currentStep = parseInt(document.getElementsByClassName('stepSelected')[0].innerHTML);
    if(currentStep > 0){
        loadStep(currentStep - 1, currentTab);
        document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
        document.getElementsByClassName('stepNum')[currentStep - 2].classList.add("stepSelected");
    }
})