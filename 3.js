//3a. array of strings
let Tasks = [];

//3b. addTask function
let addTask = (task) => {
    Tasks.push(task);
    console.log(task + " has been added to my tasks.")
}

//3.c listAllTasks function
let listAllTasks = () => {
    Tasks.forEach((element) => {
        console.log(element);
    });
}

//3d. deleteTask function
let deleteTask = (task) => {
    let index = Tasks.indexOf(task);

    //if greater than 1, it's in the array
    if(index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been deleted from my tasks");
    }else {
        console.log(task + " not found");
    }//if not found in array

    return Tasks.length;
}

//add tasks to the array
addTask("Task 1");
addTask("Task 2");
addTask("Task 3");

//list all of them
listAllTasks();

//delete a specific task
deleteTask("Task 2");
