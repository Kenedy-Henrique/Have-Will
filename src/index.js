import makeTabObj from './makeTabObj';
import makeTaskObj from './makeTaskObj';
import putTaskObjInsideTab from './putTaskObjInsideTab';
import makeTabAnimation from './animations/tabAnimation';
import makeShowTabsBtnAnimation from './animations/makeShowTabsBtnAnimation';
import makeTaskForm from './makeTaskForm';
import createTaskDivs from './createTaskDivs';
import makeTabForm from './makeTabForm';
import createTabsDivs from './createTabsDivs';
import renderTabsDivsFromLocalStorage from './renderTabsDivsFromLocalStorage';

let tabsObj = {};

let currentTabObj = {
    tabName: ''
}

let tasksContainer = document.querySelector('.tasksContainer');
let showTaskFormBtn = document.querySelector('.showTaskFormBtn');
let showTabsBtn = document.querySelector('.showTabsBtn');
let tabsContainer = document.querySelector('.tabsContainer');
let makeTabBtn = document.querySelector('.makeTabBtn');

let isTabsShow = false;

let addTaskForm;
let addTaskBtn;
let taskObj;
let isTaskForm = false;

let addTabForm;
let addFormBtn;
let isTabForm = false;
let currentTabPElement = document.querySelector('.currentTabPElement');

if(localStorage.getItem('tabsObj')) {
    tabsObj = JSON.parse(localStorage.getItem('tabsObj'));
    renderTabsDivsFromLocalStorage(tabsObj, tabsContainer, currentTabObj, tasksContainer, currentTabPElement)
}

showTabsBtn.addEventListener('click', () => {
    makeTabAnimation(isTabsShow, tabsContainer);
    makeShowTabsBtnAnimation(isTabsShow, showTabsBtn);
    isTabsShow = !isTabsShow;
})

showTaskFormBtn.addEventListener('click', () => {
    if(!isTaskForm) {
        addTaskForm = makeTaskForm();
        addTaskBtn = document.querySelector('.addTaskBtn');
        addTaskBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(addTaskForm.title.value === '' || addTaskForm.description.value === '' || addTaskForm.dueDate.value === '' || addTaskForm.priority.value === ''){
                alert('Put all the informations!');
            } else if(currentTabObj.tabName === '' || currentTabObj.tabName === undefined){
                alert('Create and go to a tab!');
            } else {
                taskObj = makeTaskObj(addTaskForm.title.value,
                    addTaskForm.description.value,
                    addTaskForm.dueDate.value,
                    addTaskForm.priority.value);
                putTaskObjInsideTab(tabsObj, currentTabObj.tabName, addTaskForm.title.value, taskObj);
                tasksContainer.innerHTML = '';
                createTaskDivs(tabsObj, currentTabObj.tabName, tasksContainer);
            }
        });
    } else {
        document.body.removeChild(addTaskForm);
    }
    isTaskForm = !isTaskForm;
})

makeTabBtn.addEventListener('click', () => {
    if(!isTabForm){
        addTabForm = makeTabForm();
        addFormBtn = document.querySelector('.addFormBtn');
        addFormBtn.addEventListener('click', (e) => {
            if(tabsObj[addTabForm.tabName.value]){
                e.preventDefault();
                alert('Tab alredy exists!');
            } else {
                e.preventDefault();
                makeTabObj(tabsObj, addTabForm.tabName.value);
                createTabsDivs(tabsObj,
                    addTabForm.tabName.value,
                    tabsContainer,
                    currentTabObj,
                    tasksContainer,
                    currentTabPElement);
            }
        })
    } else {
        document.body.removeChild(addTabForm);
    }
    isTabForm = !isTabForm;
})