function putTaskObjInsideTab(tabsObj, currentTab, taskName, taskObj){
    tabsObj[currentTab][taskName] = taskObj;
}

export default putTaskObjInsideTab;