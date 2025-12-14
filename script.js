let meinsuitRotation = document.getElementById("meinsuit").style.rotate

// Code taken from https://stackoverflow.com/questions/13996267/loop-forever-and-provide-delta-time
var lastUpdate = Date.now();
var myInterval = setInterval(tick, 0);

function tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;

    update(dt);
    render(dt);

    meinsuitRotation = (360 * dt)*(Math.PI/180);
    print(meinsuitRotation);
};
