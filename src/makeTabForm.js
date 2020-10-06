function makeTabForm(){
    let form = document.createElement('form');
    form.classList.add('tabForm');

    let tabName = document.createElement('input');
    tabName.classList.add('tabName');
    tabName.name = 'tabName';
    tabName.type = 'text';
    tabName.placeholder = 'Insert tab name';
    form.appendChild(tabName);

    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.classList.add('addFormBtn');
    form.appendChild(submitBtn);
    
    document.body.appendChild(form);

    return form;
}

export default makeTabForm;