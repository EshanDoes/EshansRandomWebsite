// Delta Time Source - https://stackoverflow.com/questions/13996267/loop-forever-and-provide-delta-time
// Posted by Rikonator, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-17, License - CC BY-SA 3.0

var lastUpdate = Date.now();
var dt = 0;
var milliseconds = 0;
var myInterval = setInterval(tick, 0);

function tick() {
    var now = Date.now();
    dt += now - lastUpdate;
    lastUpdate = now;

    // update(dt);
    // render(dt);

    document.getElementById("imagesofmeinsuit").style.top = 15-(Math.sin(dt/500.0)*2.5) + "%";
    console.log(dt);
    console.log(document.getElementById("imagesofmeinsuit").style.top)
}
