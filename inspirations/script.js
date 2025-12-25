var lastUpdate = Date.now();
var dt = 0;
var now = 0;
var myInterval;
var negative = false;
var maxSize = 80;

function openBox(){
    lastUpdate = Date.now();
    dt = 0;
    negative = false;

    myInterval = setInterval(updateBox, 0)
}

function closeBox(){
    lastUpdate = Date.now();
    dt = 0;
    negative = true;

    myInterval = setInterval(updateBox, 0)
}

function updateBox(duration){
    var window = document.getElementById("window");

    if(dt < 500){
        now = Date.now();
        dt += now - lastUpdate;
        lastUpdate = now;

        var progress = Math.sin(dt/500.0*Math.PI/2);
        if(negative){
            window.style.opacity = 2 - (dt/250.0);
            window.style.width = (maxSize - (maxSize * progress)) + "%";
            window.style.height = (maxSize - (maxSize * progress)) + "%";
        } else{
            window.style.opacity = dt/250.0;
            window.style.width = (maxSize * progress) + "%";
            window.style.height = (maxSize * progress) + "%";
        }

        console.log("Top: " + window.style.top);
        console.log("Delta: " + dt);
        console.log("Now: " + now);
        console.log("Last Update: " + lastUpdate);
        console.log("Opacity: " + window.style.opacity);
    } else{
        clearInterval(myInterval);
    }
}