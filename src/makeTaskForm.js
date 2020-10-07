function makeTaskForm(){
    let form = document.createElement('form');
    form.classList.add('taskForm');
    
    let title = document.createElement('input');
    title.classList.add('title');
    title.type = 'text';
    title.name = 'title';
    title.placeholder = 'Title';
    form.appendChild(title);

    let description = document.createElement('textarea');
    description.classList.add('description');
    description.name = 'description';
    description.placeholder = 'Description';
    form.appendChild(description);

    let dueDate = document.createElement('input');
    dueDate.classList.add('dueDate');
    dueDate.type = 'date';
    dueDate.name = 'dueDate';
    form.appendChild(dueDate);

    let priority = document.createElement('select');
    priority.classList.add('priority');
    priority.name = 'priority';

    let nothing = document.createElement('option');
    nothing.innerHTML = 'Choose a priority level';
    priority.appendChild(nothing);

    let red = document.createElement('option');
    red.value = 'rgb(255, 37, 92)';
    red.innerHTML = 'High';
    priority.appendChild(red);

    let yellow = document.createElement('option');
    yellow.value = 'rgb(255, 210, 0)';
    yellow.innerHTML = 'Medium';
    priority.appendChild(yellow);

    let green = document.createElement('option');
    green.value = 'rgb(0, 175, 65)';
    green.innerHTML = 'Low';
    priority.appendChild(green);

    form.appendChild(priority);


    let btnsOptions = document.createElement('div');
    btnsOptions.classList.add('btnsOptions');

    let resetBtn = document.createElement('input');
    resetBtn.type = 'reset';
    resetBtn.classList.add('resetBtn');
    btnsOptions.appendChild(resetBtn);

    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.classList.add('addTaskBtn')
    btnsOptions.appendChild(submitBtn);

    form.appendChild(btnsOptions);
    document.body.appendChild(form);
    
    return form;
}

export default makeTaskForm;