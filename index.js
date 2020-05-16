"use strict";



var button = document.createElement("button");
button.innerText = "Start worker";
button.addEventListener("click", startWorker, false);
document.body.appendChild(button);


function startWorker () {
    button.removeEventListener("click", startWorker, false);
    button.addEventListener("click", stopWorker, false);
    button.innerText = "Stop worker";
    console.log("start");
}
function stopWorker () {
    button.removeEventListener("click", stopWorker, false);
    button.addEventListener("click", startWorker, false);
    button.innerText = "Start worker";

    console.log("stop");
}