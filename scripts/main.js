var lastPos = {
    x: 0,
    y: 0,
}
var canvas = document.querySelector("#canvas")
var brush = canvas.getContext("2d")
var bool = false

window.addEventListener("mouseOver", function(event){
    if (event.clientX >= 8 && event.clientX <= 648 && event.clientY >= 8 && event.clientY <= 488) {
        bool = true
    }
})
window.addEventListener("mousedown", function(event){
    if(bool)
})