window.getValue = function (id) {
    return document.getElementById(id).value;
}

window.setValue = function (id, value) {
    document.getElementById(id).value = value;
}

window.focusElement = function (id) {
    document.getElementById(id).focus();
}