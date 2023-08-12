/**
 * FOR MODAL
 */
const modalUpdate = new bootstrap.Modal(document.getElementById('modal-update'));
const modalDelete = new bootstrap.Modal(document.getElementById('modal-delete'));

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
 * SHOW MODAL DELETE DATA
 * @param {*} index 
 */
function showModalDelete(index) {
    document.getElementById("delete-index").value = index;

    let listData;
    if (window.localStorage.getItem("listData") == null) {
        listData = [];
    } else {
        listData = JSON.parse(window.localStorage.getItem("listData"));
    }

    document.getElementById("delete-task").value = listData[index].task;
    document.getElementById("delete-detail").value = listData[index].detail;

    modalDelete.show();
}

/**
 * HIDE MODAL DELETE DATA
 */
function hideModalDelete() {
    document.getElementById("delete-index").value = "";
    document.getElementById("delete-task").value = "";
    document.getElementById("delete-detail").value = "";

    modalDelete.hide();
}


/**
 * DELETE DATA
 */
let formDelete = document.getElementById("formDelete");
formDelete.addEventListener("submit", function (e) {
    e.preventDefault();

    let index = document.getElementById("delete-index").value;

    let listData;
    if (window.localStorage.getItem("listData") == null) {
        listData = [];
    } else {
        listData = JSON.parse(window.localStorage.getItem("listData"));
    }

    listData.splice(index, 1);
    window.localStorage.setItem("listData", JSON.stringify(listData));

    showData();
    hideModalDelete();
});

/**
 * HIDE MODAL UPDATE DATA
 */
function hideModalUpdate() {
    document.getElementById("update-index").value = "";
    document.getElementById("update-task").value = "";
    document.getElementById("update-detail").value = "";

    modalUpdate.hide();
}

/**
 * SHOW MODAL UPDATE DATA
 * @param {*} index 
 */
function showModalUpdate(index) {
    document.getElementById("update-index").value = index;

    let listData;
    if (window.localStorage.getItem("listData") == null) {
        listData = [];
    } else {
        listData = JSON.parse(window.localStorage.getItem("listData"));
    }

    document.getElementById("update-task").value = listData[index].task;
    document.getElementById("update-detail").value = listData[index].detail;

    modalUpdate.show();
}



/**
 * SUBMIT UPDATE DATA
 */
let formUpdate = document.getElementById("formUpdate");
formUpdate.addEventListener("submit", function (e) {
    e.preventDefault();

    let index = document.getElementById("update-index").value;

    let listData;
    if (window.localStorage.getItem("listData") == null) {
        listData = [];
    } else {
        listData = JSON.parse(window.localStorage.getItem("listData"));
    }

    listData[index].task = document.getElementById("update-task").value;
    listData[index].detail = document.getElementById("update-detail").value;

    window.localStorage.setItem("listData", JSON.stringify(listData));

    showData();
    hideModalUpdate();
});

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
    listData.forEach(function (element, index) {
        count++;
        html += "<tr>";
        html += "<td>" + count + "</td>";
        html += "<td>" + element.task + "</td>";
        html += "<td>" + element.detail + "</td>";
        html += "<td class='text-center'>";
        html += "<buttom class='btn btn-danger' onClick='showModalDelete(" + index + ")'>BORRAR</buttom>";
        html += "<buttom class='btn btn-primary' onClick='showModalUpdate(" + index + ")'>EDITAR</buttom>";
        html += "</td>";
        html += "</tr>";
    });
    document.querySelector("#table-data tbody").innerHTML = html;
}



/**
 * DELETE ALL DATA
 */
let deleteAllData = document.getElementById("deleteAllData");
deleteAllData.addEventListener("click", function (e) {
    let listData = [];
    window.localStorage.setItem("listData", JSON.stringify(listData));

    showData();
});






/**
 * SHOW ALL DATA
 */
showData();
