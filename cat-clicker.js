const countingCats = document.getElementById("kitten-to-click");
const display = document.getElementById("counter");
let countOne = 0;

countingCats.onclick = function() {
    display.innerHTML = countOne += 1;
}