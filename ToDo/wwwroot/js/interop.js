window.getValue = function (id) {
    var element = document.getElementById(id);
    if (element) {
        return element.value;
    } else {
        return null;
    }
}

window.setValue = function (id, value) {
    document.getElementById(id).value = value;
}

window.focusElement = function (id) {
    document.getElementById(id).focus();
}

function showNotification(taskName) {
    new Notification(taskName, { body: 'This task is due now!' });
}
