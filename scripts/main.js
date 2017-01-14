var lastPos = {
    x: 0,
    y: 0,
}
var canvas = document.querySelector("#canvas")
var brush = canvas.getContext("2d")
var press = false

window.addEventListener("mousedown", function(event){
    if (event.button === 0){
        press = true
        lastPos = {
            x: event.clientX,
            y: event.clientY
        }
    }
})
window.addEventListener("mouseUp", function(event){
    press= false
})
window.addEventListener("mousemove", function(event){
    if (event.clientX >= 8 && event.clientX <= 648 && event.clientY >= 8 && event.clientY <= 488) {
        if(press) {
            brush.beginPath()
            brush.moveTo(clientX - 8, clientY - 8)
            brush.lineTo(event.clientX - 8, event.clientY - 8)
            brush.stroke()

            lastPos = {
            x: event.clientX,
            y: event.clientY
            }
        }
    }
})