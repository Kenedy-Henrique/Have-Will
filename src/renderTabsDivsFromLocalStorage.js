import createTaskDivs from './createTaskDivs';

function renderTabsDivsFromLocalStorage(tabsObj, tabsContainer, currentTabObj, tasksContainer, currentTabPElement){
    for(let key in tabsObj){
        let tabDiv = document.createElement('div');
    tabDiv.classList.add('tabDiv');

    let tabTitle = document.createElement('p');
    tabTitle.innerHTML = key;
    tabTitle.classList.add('tabTitle');
    tabDiv.appendChild(tabTitle);

    let buttonsOptions = document.createElement('div');
    buttonsOptions.classList.add('tabDivBtnOptions');

    let changeTabBtn = document.createElement('button');
    changeTabBtn.classList.add('changeTabBtn');
    changeTabBtn.addEventListener('click', () => {
        currentTabObj.tabName = key;
        currentTabPElement.innerHTML = key;
        tasksContainer.innerHTML = '';
        createTaskDivs(tabsObj, key, tasksContainer);
    });
    buttonsOptions.appendChild(changeTabBtn);

    let deleteTabBtn = document.createElement('button');
    deleteTabBtn.classList.add('deleteTabBtn');
    deleteTabBtn.addEventListener('click', () => {
        delete tabsObj[key];
        tabsContainer.removeChild(tabDiv);
        localStorage.setItem('tabsObj', JSON.stringify(tabsObj));
        currentTabPElement.innerHTML = 'Choose a tab';
        currentTabObj.tabName = '';
    });
    buttonsOptions.appendChild(deleteTabBtn);

    tabDiv.appendChild(buttonsOptions)
    tabsContainer.appendChild(tabDiv);
    }
}

export default renderTabsDivsFromLocalStorage;