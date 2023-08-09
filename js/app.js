


/**
 * EVENT ADD TASK
 */
let formSubmit = document.getElementById("form");
formSubmit.addEventListener("submit", function (e) {
    e.preventDefault();

    let task = document.getElementById("task");

    console.log(task);

});


/**
 * ADD TASK LOCALSTORAGE
 */
function addTask(task, detail) {
   
}

/**
 * CLEAN FORM
 */
function cleanForm() {
    let task = document.getElementById("task");
    task.value = "";

    let detail = document.getElementById("detail");
    detail.value = "";
}

