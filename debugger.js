export function ldebugger() {
    let eventArray = [
        "beforecopy",
        "beforecut",
        "beforepaste",
        "visibilitychange",
        "copy",
        "cut",
        "paste",
        "abort",
        "blur",
        "cancel",
        "canplay",
        "canplaythrough",
        "change",
        "close",
        "contextmenu",
        "cuechange",
        "dblclick",
        "drag",
        "dragend",
        "dragenter",
        "dragleave",
        "dragover",
        "dragstart",
        "drop",
        "durationchange",
        "emptied",
        "ended",
        "error",
        "focus",
        "input",
        "invalid",
        "keydown",
        "keyup",
        "load",
        "loadeddata",
        "loadedmetadata",
        "loadstart",
        "mousedown",
        "mouseup",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "reset",
        "resize",
        "scroll",
        "seeked",
        "seeking",
        "select",
        "stalled",
        "submit",
        "suspend",
        "timeupdate",
        "toggle",
        "volumechange",
        "waiting",
        "wheel",
        "auxclick",
        "gotpointercapture",
        "lostpointercapture",
        "selectstart",
        "selectionchange",
        "animationend",
        "animationiteration",
        "animationstart",
        "fullscreenchange",
        "fullscreenerror",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
        "formdata"
    ];
    for (const prop in document) {
        //creates an array of all possible events
        prop.startsWith("on") ? eventArray.push(prop.substring(2)) : null;
    }
    eventArray.forEach(eventName =>
        document.addEventListener(eventName, function () {
            console.log("============ log info: ============");
            console.log("CALLER at line of code [23]");
            console.log("EVENT is [" + event.type + "]");
            console.log("current node:");
            console.log(event.target);
        })
    );
}
