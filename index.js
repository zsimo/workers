"use strict";

var button = document.createElement("button");
button.innerText = "Start worker";
button.addEventListener("click", startWorker, false);
document.body.appendChild(button);

var w;
import Worker from 'worker-loader!./workers/01.js';


function startWorker () {
    button.removeEventListener("click", startWorker, false);
    button.addEventListener("click", stopWorker, false);
    button.innerText = "Stop worker";
    console.log("start");

    w = new Worker("./workers/01.js");
    w.addEventListener("message", onMessage);
}
function stopWorker () {
    button.removeEventListener("click", stopWorker, false);
    button.addEventListener("click", startWorker, false);
    button.innerText = "Start worker";

    console.log("stop");
    w.terminate();
}

function onMessage (event) {
    console.log(event.data);
    w.postMessage("ciao");
}