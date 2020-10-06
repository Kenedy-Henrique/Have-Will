function makeTaskObj(title, description, dueDate, priority){
    let obj = {};
    obj.title = title;
    obj.description = description;
    obj.dueDate = dueDate;
    obj.priority = priority;

    return obj;
}

export default makeTaskObj;