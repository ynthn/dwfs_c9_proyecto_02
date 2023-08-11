


/**
 * EVENT ADD TASK
 */
let formSubmit = document.getElementById("form");
formSubmit.addEventListener("submit", function (e) {
    e.preventDefault();

    let task = document.getElementById("task").value;
    let detail = document.getElementById("detail").value;

    addTask(task, detail);
    cleanForm();
    showData();
});


/**
 * ADD TASK LOCALSTORAGE
 */
function addTask(task, detail) {
    let listData;
    if (window.localStorage.getItem("listData") == null) {
        listData = [];
    } else {
        listData = JSON.parse(window.localStorage.getItem("listData"));
    }
    listData.push({
        task: task,
        detail: detail
    });
    window.localStorage.setItem("listData", JSON.stringify(listData));
}

/**
 * CLEAN FORM
 */
function cleanForm() {
    document.getElementById("task").value = "";
    document.getElementById("detail").value = "";
}


/**
 * SHOW DATA IN TABLE
 */
function showData() {
    let listData;
    if (window.localStorage.getItem("listData") == null) {
        listData = [];
    } else {
        listData = JSON.parse(window.localStorage.getItem("listData"));
    }
    let html = "";
    let count = 0;
    listData.forEach(element => {
        count++;
        html += "<tr>";
        html += "<td>" + count + "</td>";
        html += "<td>" + element.task + "</td>";
        html += "<td>" + element.detail + "</td>";
        html += "<td class='text-center'>";
        html += "<buttom class='btn btn-danger'>BORRAR</buttom>";
        html += "<buttom class='btn btn-primary'>EDITAR</buttom>";
        html += "</td>";
        html += "</tr>";
    });
    document.querySelector("#table-data tbody").innerHTML = html;
}


showData();
