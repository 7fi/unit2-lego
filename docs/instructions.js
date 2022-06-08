let currentTab = "base";
let tabs = ["base", "ferry", "mountain", "needle","final"]
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
    baseTab.innerHTML = "Base";
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
    ferryTab.innerHTML = "Ferry";
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
    mountainTab.innerHTML = "Mountain";
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
    needleTab.innerHTML = "Space Needle";
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
    
    const finalTab = document.createElement('div');
    finalTab.classList.add("tabName");
    finalTab.id = "finalTab";
    finalTab.onclick = function(){loadTab("final")};
    finalTab.innerHTML = "Assembly";
    stepHolder.appendChild(finalTab);
    const finalSeperator = document.createElement('div');
    finalSeperator.classList.add("stepSeperator");
    finalSeperator.innerHTML = "|";
    stepHolder.appendChild(finalSeperator);
    if(tab == "final"){
        steps = finalSteps;
        finalTab.classList.add('curTab');
        finalSeperator.classList.add('curTab');
        createSteps(steps);
    } 

    loadStep(1,currentTab);
    document.getElementsByClassName('stepNum')[0].classList.add('stepSelected');
    // console.log(document.getElementsByClassName('stepNum')[0].classList);
}

function createSteps(steps){
    for (let i = 0; i < steps.length; i++) {
        const stepSelector = document.createElement('div');
        stepSelector.innerHTML = i + 1;
        stepSelector.classList.add('stepNum')
        stepSelector.addEventListener('click', () => {
            loadStep(stepSelector.innerHTML, currentTab);
            if(document.getElementsByClassName('stepSelected').length > 0)document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
            stepSelector.classList.add("stepSelected");
        })
        stepHolder.appendChild(stepSelector);
        const stepSeperator = document.createElement('div');
        stepSeperator.classList.add("stepSeperator");
        stepSeperator.innerHTML = "|";
        stepHolder.appendChild(stepSeperator);
    }
}

function loadStep(stepNum,tab){
    // console.log("loading step ", stepNum);
    if(tab == "base"){
        if(stepNum <= baseSteps.length){
            stepInstruction.innerHTML = baseSteps[stepNum - 1].instruction;
            stepImg.src = baseSteps[stepNum - 1].img;
        }else{
            // document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
            loadTab("ferry");
            // loadStep(1,currentTab);
            document.getElementsByClassName('stepNum')[0].classList.add("stepSelected");
        }
    }else if(tab == "ferry"){
        if(stepNum <= ferrySteps.length){
            stepInstruction.innerHTML = ferrySteps[stepNum - 1].instruction;
            stepImg.src = ferrySteps[stepNum - 1].img;
        }else{
            loadTab("mountain");
            loadStep(1,currentTab);
            document.getElementsByClassName('stepNum')[0].classList.add("stepSelected");
        }
    }else if(tab == "mountain"){
        if(stepNum <= mountainSteps.length){
            stepInstruction.innerHTML = mountainSteps[stepNum - 1].instruction;
            stepImg.src = mountainSteps[stepNum - 1].img;
        }else{
            loadTab("needle");
            loadStep(1,currentTab);
            document.getElementsByClassName('stepNum')[0].classList.add("stepSelected");
        }
    }else if(tab == "needle"){
        if(stepNum <= needleSteps.length){
            stepInstruction.innerHTML = needleSteps[stepNum - 1].instruction;
            stepImg.src = needleSteps[stepNum - 1].img;
        }else{
            loadTab("final");
            loadStep(1,currentTab);
            document.getElementsByClassName('stepNum')[0].classList.add("stepSelected");
        }
    }else{
        if(stepNum < finalSteps.length){
            stepInstruction.innerHTML = finalSteps[stepNum - 1].instruction;
            stepImg.src = finalSteps[stepNum - 1].img;
        }
    }
    // console.log(steps[stepNum].instruction);
}

nextStep.addEventListener('click', () =>{
    let currentStep = parseInt(document.getElementsByClassName('stepSelected')[0].innerHTML);
    // console.log(document.getElementsByClassName('step'))
    if(document.getElementsByClassName('stepNum').length != currentStep){
        loadStep(currentStep + 1, currentTab);
        document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
        document.getElementsByClassName('stepNum')[currentStep].classList.add("stepSelected");
    }else{
        if(tabs.indexOf(currentTab) != tabs.length - 1)
        loadTab(tabs[tabs.indexOf(currentTab) + 1]);
        document.getElementsByClassName('stepNum')[0].classList.add("stepSelected");
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