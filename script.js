// Delta Time Source - https://stackoverflow.com/questions/13996267/loop-forever-and-provide-delta-time
// Posted by Rikonator, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-17, License - CC BY-SA 3.0

var lastUpdate = Date.now();
var delta = 0;
var milliseconds = 0;
var myInterval = setInterval(tick, 0);

function tick() {
    var now = Date.now();
    delta += now - lastUpdate;
    lastUpdate = now;

    // update(delta);
    // render(delta);

    document.getElementById("imagesofmeinsuit").style.top = 30-(Math.sin(delta/500.0)*2.5) + "%";
    console.log(delta);
    console.log(document.getElementById("imagesofmeinsuit").style.top)
}
