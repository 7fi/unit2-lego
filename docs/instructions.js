let currentTab = "parts";
let tabs = ["parts","base", "ferry", "mountain", "needle","final"]
loadTab(currentTab);
loadStep(1, currentTab);

function loadTab(tab){
    while(stepHolder.childElementCount > 0){
        stepHolder.children[stepHolder.childElementCount - 1].remove();
    }

    currentTab = tab;
    let steps;

    const partsTab = document.createElement('div');
    partsTab.classList.add("tabName");
    partsTab.id = "partsTab";
    partsTab.onclick = function(){loadTab("parts")};
    partsTab.innerHTML = "Parts";
    stepHolder.appendChild(partsTab);
    const partsSeperator = document.createElement('div');
    partsSeperator.classList.add("stepSeperator");
    partsSeperator.innerHTML = "|";
    stepHolder.appendChild(partsSeperator);

    if(tab == "parts"){
        steps = partsSteps;
        partsTab.classList.add('curTab');
        partsSeperator.classList.add('curTab');
        createSteps(steps);
    }

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
    console.log("loading step ", stepNum);
    if(tab == "parts"){    
        if(stepNum <= partsSteps.length){
            stepInstruction.innerHTML = "Base:<br>1 – 6x12 green plate (4541414)<br><br>1 – 2x4 pale blue brick (4205058)<br><br>1 – 2x6 sky blue brick (6022000)<br><br>2 – 1x4 sky blue brick (6036238)<br><br>2 – 1x2 sky blue brick (6092674)<br><br>3 – 2x3 dark blue brick (300223)<br><br>3 – 1x2 dark blue brick (300423)<br><br>2 – 1x2 light blue brick (6004943)<br><br>2 – 2x4 light blue brick (4655172)<br><br>>> 17 total pieces<br><br><br>Ferry:<br><br>1 – 2x8 green plate (303428)<br><br>2 – 1x2 sloped white brick (303901)<br><br>2 – 1x4 white brick with holes (4143254)<br><br>2 – 2x3 light blue plate (6144149)<br><br>1 – 4x4 white brick (300301)<br><br>2 – 1x2 clear brick (306540)<br><br> >> 10 total pieces <br><br> <br> Mt. Rainier:<br><br>1 – 2x6 grey brick (4210875)<br><br>2 – 1x2 grey brick (4211088)<br><br>4 – 2x4 green brick (4106356)<br><br>2 – 1x2 lime green brick (4164022)<br><br>2 – 1x1 sloped green brick (412969)<br><br>2 – 2x3 brown brick (4216668)<br><br>2 – 1x2 red/brown brick (4539102)<br><br>3 – 2x2 light brown brick (6058085)<br><br>2 – 1x2 transparent yellow brick (306544)<br><br>2 – 2x3 tan brick (4159739)<br><br>2 – 1x2 tall white brick (4113261)<br><br>2 – 1x2 white brick (300401)<br><br>4 – 1x2 clear brick (306540)<br><br>1 – 2x2 white brick (300301)<br><br>>> 31 total pieces<br><br><br>Space Needle:<br><br>2 – 2x2 black brick (300326)<br><br>1 – 2x2 yellow brick (6212064)<br><br>2 – 1x2 yellow brick (6022083)<br><br>4 – 1x2 sage green brick (4616581)<br><br>2 – 2x2 light grey brick (4211387)<br><br>2 – 2x2 black plate (302226)<br><br>2 – 2x4 tan plate (4267874)<br><br>2 – 2x6 lime green plate (4621548)<br><br>2 – 2x8 light green/yellow plate (6216968)<br><br>1 – 2x8 green plate (303428)<br><br>2 – 2x2 lime green plate (4537937)<br><br>1 – black round brick (6024730)<br><br>2 – brown connector (4211183)<br><br>1 – clear yellow cap (4650500)<br><br>>> 26 total pieces";
            stepImg.style.display = "none";
        }else{
            // document.getElementsByClassName('stepSelected')[0].classList.remove('stepSelected');
            loadTab("base");
            // loadStep(1,currentTab);
            document.getElementsByClassName('stepNum')[0].classList.add("stepSelected");
        }
    }else if(tab == "base"){
        if(stepNum <= baseSteps.length){
            stepInstruction.innerHTML = baseSteps[stepNum - 1].instruction;
            stepImg.style.display = "block";
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
        if(stepNum <= finalSteps.length){
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