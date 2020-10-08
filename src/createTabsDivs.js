import createTaskDivs from './createTaskDivs';

function createTabsDivs(tabsObj, tabName, tabsContainer, currentTabObj, tasksContainer, currentTabPElement){
    let tabDiv = document.createElement('div');
    tabDiv.classList.add('tabDiv');

    let tabTitle = document.createElement('p');
    tabTitle.innerHTML = tabName;
    tabTitle.classList.add('tabTitle');
    tabDiv.appendChild(tabTitle);

    let buttonsOptions = document.createElement('div');
    buttonsOptions.classList.add('tabDivBtnOptions');

    let changeTabBtn = document.createElement('button');
    changeTabBtn.classList.add('changeTabBtn');
    changeTabBtn.addEventListener('click', () => {
        currentTabObj.tabName = tabName;
        currentTabPElement.innerHTML = tabName;
        tasksContainer.innerHTML = '';
        createTaskDivs(tabsObj, currentTabObj.tabName, tasksContainer);
    });
    buttonsOptions.appendChild(changeTabBtn);

    let deleteTabBtn = document.createElement('button');
    deleteTabBtn.classList.add('deleteTabBtn');
    deleteTabBtn.addEventListener('click', () => {
        delete tabsObj[tabName];
        tabsContainer.removeChild(tabDiv);
        localStorage.setItem('tabsObj', JSON.stringify(tabsObj));
    });
    buttonsOptions.appendChild(deleteTabBtn);

    tabDiv.appendChild(buttonsOptions)
    tabsContainer.appendChild(tabDiv);
}

export default createTabsDivs;