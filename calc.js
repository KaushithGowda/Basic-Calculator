let input = document.getElementById('input');
let track = false;
function dis(val) {
    if (track) {
        his();
        track = false;
    }
    input.innerHTML += val;
}
let output = document.getElementById('output');
let history = document.getElementById('history');
let ans;
function solve() {
    ans = eval(input.innerHTML);
    output.innerHTML = ans;
    track = true;
}
function clearAll() {
    input.innerHTML = ' ';
    output.innerHTML = ' ';
    history.innerHTML = ` `;
}
function his() {
    history.innerHTML = `${input.innerHTML} = ${ans}`;
    input.innerHTML = ' ';
    output.innerHTML = ' ';
}