"use strict";


self.postMessage("hello from worker");
self.onmessage = onmessage;


function onmessage (event) {
    console.log("received in web workers: " + event.data);
}