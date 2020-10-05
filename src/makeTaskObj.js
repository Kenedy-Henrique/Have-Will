function makeTaskObj(title, description, dueDate, priority, isDone){
    let obj = {};
    obj.title = title;
    obj.description = description;
    obj.dueDate = dueDate;
    obj.priority = priority;
    obj.isDone = isDone;

    return obj;
}

export default makeTaskObj;