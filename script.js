const text = document.getElementById("text");
const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("resetBtn");
const decrease = document.getElementById("decreaseBtn");
let count = 0

increase.onclick = function(){
    count++;
    text.textContent = count;
}
reset.onclick = function(){
    count = 0;
    text.textContent = count;
}
decrease.onclick = function(){
    count--;
    text.textContent = count;
}
function theme() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}