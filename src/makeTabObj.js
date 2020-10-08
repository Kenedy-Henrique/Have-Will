function makeTabObj(tabsObj, newTabName){
    tabsObj[newTabName] = {};
    localStorage.setItem('tabsObj', JSON.stringify(tabsObj));
}

export default makeTabObj;