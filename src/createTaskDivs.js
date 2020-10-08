import showTaskDetails from './showTaskDetails';

function createTaskDivs(tabsObj, currentTab, tasksContainer){
    for(let key in tabsObj[currentTab]){
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('taskDiv');

        let title = document.createElement('p');
        title.classList.add('taskDivTitle');
        title.innerText = tabsObj[currentTab][key].title;
        taskDiv.appendChild(title);

        let dueDate = document.createElement('p');
        dueDate.classList.add('taskDivDueDate');
        dueDate.innerHTML = tabsObj[currentTab][key].dueDate;
        taskDiv.appendChild(dueDate);

        let description = document.createElement('button');
        description.classList.add('descriptionButton');
        description.innerHTML = 'Show details';
        description.addEventListener('click', () => {
            showTaskDetails(tabsObj[currentTab][key].description);
        })
        taskDiv.appendChild(description);

        let priority = document.createElement('div');
        priority.classList.add('divPriority');
        priority.style.backgroundColor = tabsObj[currentTab][key].priority;
        taskDiv.appendChild(priority);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        taskDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            tasksContainer.removeChild(taskDiv);
            delete tabsObj[currentTab][key];
        })

        tasksContainer.appendChild(taskDiv);
    }
}

export default createTaskDivs;