var popupLastUpdate = Date.now();
var windowDelta = 0;
var popupNow = 0;
var popupInterval;
var negative = false;
var maxSize = 90;
var pages = [
    '<img src="https://cdn.impress.games/presskits/75080441a8a70ac3745cb06eb13f3fe9/logos/5.png?t=1757704590" id="beatblockLogo"></img><p>' + "I'd say a very big inspiration for me is Beatblock. You may have heard of it, you may have not, but I absolutely love it. The biggest thing about it that inspired me is the visuals, more specifically the way many of the levels made by both the developers and the community involve screen effects like a waving effect to make it look a lot better." + '</p><p>' + "Plus, the way the game handles the level editor itself is phenomenal! It's very simple to figure out yet very capable, and a few of my own levels were the first actual projects I've shared online because I never really shared any of my projects with anyone. Definitely worth checking out if you're looking for a good game!" + '</p><a href="https://store.steampowered.com/app/3045200/Beatblock/" id="windowBottomButton"><img src="/inspirations/images/cranky-beatblock.png" title="Check out the game!"></img></a>',
    '<img src="/inspirations/images/Undertale_Yellow_sprite_logo.png" id="undertaleYellowLogo"></img><p>' + "Oh boy, where do I even begin?" + '</p><p>' + "While this game isn't perfect, the way it told a story was stellar, especially for an Undertale fangame. The sprites themselves are also a big step up from the original game as well in terms of quality, and my start in pixel art actually was modifying the Ceroba sprites to look more robotic." + '</p><p>' + "Most of all though, the game helped me find an online community for the first time. I stumbled into it completely randomly in around May, and didn't really know what to do at first. However, through posting just whatever I wanted very frequently, I'd somehow managed to become one of the biggest names, before stopping when summer break ended. Still though, I had even became a moderator of r/UndertaleYellow and the related Discord server for about a year as well, and met my first online friends." + '</p><a href="https://gamejolt.com/games/UndertaleYellow/136925" id="windowBottomButton"><img src="/inspirations/images/yellowSoul.png" title="Check out the game!"></img></a>',
    '<img src="/inspirations/images/Undertale_Yellow_sprite_logo.png" id="undertaleYellowLogo"></img><p>' + "Yellow yellow yellow yellow yellow" + '</p><p>' + "Yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow" + '</p><p>' + "Yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow" + '</p><a href="https://gamejolt.com/games/UndertaleYellow/136925" id="windowBottomButton"><img src="/inspirations/images/yellowSoul.png" title="Check out the game!"></img></a>',
    '<h2 id="glitchCatTitle">GLITCH CAT</h2><p>' + "When it comes to music, Glitch Cat is definitely a big inspiration for me. I found her from her song <i><a href='https://soundcloud.com/glitchcatsounds/so-stressed'>so stressed!</a></i> being a level in the demo of Beatblock, and I absolutely loved her music. Because of her, I've uploaded a few songs online, and even outside of me making stuff I'm just generally excited whenever she drops a new upload." + '</p><a href="https://soundcloud.com/glitchcatsounds" id="windowBottomButton"><img src="/inspirations/images/glitchCatBounceback.png" title="Check out her music!"></img></a>'
]

function openBox(index, name = ""){
    popupLastUpdate = Date.now();
    windowDelta = 0;
    negative = false;
    getPage(index, name);
    document.getElementById("windowContent").style.visibility = "visible";
    document.getElementById("windowSite").style.visibility = "hidden";
    document.getElementById("windowGradient").style.visibility = "visible";

    requestAnimationFrame(updateBox);
}

function openWebsite(site, name=""){
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