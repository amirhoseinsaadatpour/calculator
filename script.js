function display(value) {
    document.getElementById("result").value += value;
}
function clearscreen() {
    document.getElementById("result").value = "";
}
function calculat() {
    var p =document.getElementById("result").value;
    var q =eval(p);
    document.getElementById("result").value = q;
}
function slashone()
{
    document.getElementById("result").value = 1/document.getElementById("result").value;
}
// function delete() {

// }