var i;

function timedCount() {
    if (typeof (i) == "undefined")
    {
        i = 0;
    } else {
        i = i + 1;
    }
    postMessage(i);
    setTimeout("timedCount()", 500);
}

onmessage = function (event) {
    i = event.data;
}

timedCount();