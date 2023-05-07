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
function radikal()
{
    document.getElementById("result").value =  Math.sqrt(document.getElementById("result").value);
}
function deletee() {
    var s = Array.from(document.getElementById("result").value);
    s.pop();
    document.getElementById("result").value = s

}
