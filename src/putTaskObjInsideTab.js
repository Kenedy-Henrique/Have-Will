function putTaskObjInsideTab(tabsObj, currentTab, taskName, taskObj){
    tabsObj[currentTab][taskName] = taskObj;
    localStorage.setItem('tabsObj', JSON.stringify(tabsObj));
}

export default putTaskObjInsideTab;