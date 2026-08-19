var popupLastUpdate = Date.now();
var windowDelta = 0;
var popupNow = 0;
var popupInterval;
var negative = false;
const maxSize = 90;
const globalHTML = `
<div id="windowBack" onclick="closeBox()"></div>
<div id="window">
    <img onclick="closeBox()" id="closeButton" alt="Close Button" src="assets/images/windows/buttons/x.png">
    <p class="windowText" id="windowText"></p>
    <div id="windowGradient"></div>
    <div id="windowContent" class="windowContent">
        <p>Looks like something went wrong! Be sure to contact Eshan about it.</p>
    </div>
    <iframe id="windowSite" class="windowContent" frameboarder=0 src=""></iframe>
</div>
`

function openWebsite(site, name=site){
    popupLastUpdate = Date.now();
    windowDelta = 0;
    negative = false;
    getSite(site, name)
    document.getElementById("windowContent").style.visibility = "hidden";
    document.getElementById("windowSite").style.visibility = "visible";
    document.getElementById("windowGradient").style.visibility = "hidden";

    requestAnimationFrame(updateBox);
}

function closeBox(){
    popupLastUpdate = Date.now();
    windowDelta = 0;
    negative = true;

    requestAnimationFrame(updateBox);
}

function updateBox(){
    var window = document.getElementById("window");
    var windowContent = document.getElementById("windowContent");
    var windowSite = document.getElementById("windowSite");
    var windowBack = document.getElementById("windowBack");
    var windowName = document.getElementById("windowText");
    window.style.visibility = "visible";
    windowBack.style.visibility = "visible";

    if(windowDelta < 500){
        popupNow = Date.now();
        windowDelta += popupNow - popupLastUpdate;
        popupLastUpdate = popupNow;

        var progress = Math.sin(windowDelta/500.0*Math.PI/2);
        var opacityProgress = windowDelta/250.0;
        if(negative){
            window.style.opacity = 2 - opacityProgress;
            windowBack.style.opacity = 1 - opacityProgress;
            windowContent.style.opacity = 1 - windowDelta/150.0;
            windowSite.style.opacity = 1 - windowDelta/150.0;
            windowName.style.opacity = 1 - opacityProgress;
            window.style.width = (maxSize - (maxSize * progress)) + "%";
            window.style.height = (maxSize - (maxSize * progress)) + "%";
        } else{
            window.style.opacity = opacityProgress;
            windowBack.style.opacity = opacityProgress;
            windowContent.style.opacity = opacityProgress - 1;
            windowSite.style.opacity = opacityProgress - 1;
            windowName.style.opacity = opacityProgress - 1;
            window.style.width = (maxSize * progress) + "%";
            window.style.height = (maxSize * progress) + "%";
        }

        requestAnimationFrame(updateBox);
    } else{
        if(negative){
            window.style.visibility = "hidden";
            windowBack.style.visibility = "hidden";
        }
    }
}

function getPage(index, name=""){
    let page = pages[index];
    console.log(page);

    var window = document.getElementById("windowContent");
    var windowName = document.getElementById("windowText");
    window.innerHTML = page;
    windowName.innerHTML = name;
}

function getSite(site, name=""){
    var windowSite = document.getElementById("windowSite");
    var windowName = document.getElementById("windowText");

    windowSite.src = "";
    setTimeout(function(){
        windowSite.src = site;
    }, 200);
    windowName.innerHTML = name;

}

document.body.innerHTML += windowHTML;

if(screen.width > 1000){
    time_is_widget.init(
        {Toronto_z18a:{
            template:"Time: TIME ― DATE",
            time_format:"12hours:minutesAMPM",
            date_format:"monthname dnum, year"
        }
    });
}else{
    time_is_widget.init(
        {Toronto_z18a:{
            template:"Time: TIME",
            time_format:"12hours:minutesAMPM"
        }
    });
};