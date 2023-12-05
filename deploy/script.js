let bgL1 = document.getElementById("background-layer-1");
let bgL2 = document.getElementById("background-layer-2");
let bgL3 = document.getElementById("background-layer-3");
let bgC1 = document.getElementById("background-click-1");
let bgC2 = document.getElementById("background-click-2");
let bgC3 = document.getElementById("background-click-3");
// Detect touch device
function isTouchDevice(){
    try{
        // Try to create TouchEvent. (It would fail for desktops and throw an error)
        document.createEvent("TouchEvent");
        return true;
    }
    catch (e) {
        return false;
    }
}

const move = (e) => {
    // Try + catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
    try{
        // PageX and PageY return position of cursor from top left of screen
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }
    catch(e){}
    //set left of div based on mouse position
    bgL1.style.left = (-0.025 * x) + "px";
    bgL2.style.left = (-0.05 * x) + "px";
    bgL3.style.left = (-0.075 * x) + "px";

    bgC1.style.left = (-0.025 * x) + "px";
    bgC2.style.left = (-0.05 * x) + "px";
    bgC3.style.left = (-0.075 * x) + "px";

    //set top of div based on mouse position
    bgL1.style.top = (-0.0125 * y) + "px";
    bgL2.style.top = (-0.025 * y) + "px";
    bgL3.style.top = (-0.0375 * y) + "px";

    bgC1.style.top = (-0.0125 * y) + "px";
    bgC2.style.top = (-0.025 * y) + "px";
    bgC3.style.top = (-0.0375 * y) + "px";
};

//For Mouse
document.addEventListener("mousemove", (e) => {
    move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
    move(e);
});

// To handle all audio queues for buttons:
const hoverAudioElement1 = new Audio("./sounds/hover.mp3");
const hoverAudioElement2 = new Audio("./sounds/hover.mp3");
const hoverAudioElement3 = new Audio("./sounds/hover.mp3");
const hoverAudioElement4 = new Audio("./sounds/hover.mp3");
const hoverAudioElement5 = new Audio("./sounds/hover.mp3");
const clickAudioElement = new Audio("./sounds/click.mp3");

hoverAudioElement1.volume = 0.3
hoverAudioElement2.volume = 0.3
hoverAudioElement3.volume = 0.3
hoverAudioElement4.volume = 0.3
hoverAudioElement5.volume = 0.3
clickAudioElement.volume = 0.3

function hoverAudio1() {
    hoverAudioElement1.play()
//    console.log("hovered1")
}
function hoverAudio2() {
    hoverAudioElement2.play()
//    console.log("hovered2")
}
function hoverAudio3() {
    hoverAudioElement3.play()
//    console.log("hovered3")
}
function hoverAudio4() {
    hoverAudioElement4.play()
//    console.log("hovered4")
}
function hoverAudio5() {
    hoverAudioElement5.play()
//    console.log("hovered5")
}
function clickAudio() {
    clickAudioElement.play()
//    console.log("clicked")
}

const hoverAudioElement6 = new Audio("./sounds/tick.mp3");
const clickAudioElement2 = new Audio("./sounds/lock.mp3");

hoverAudioElement6.volume = 0.2
clickAudioElement2.volume = 0.2

function hoverAudio6() {
    hoverAudioElement6.play()
}
function clickAudio2() {
    clickAudioElement2.play()
}

const zenosLine1 = new Audio("./sounds/zenos1.mp3");
const zenosLine2 = new Audio("./sounds/zenos2.mp3");
const zenosLine3 = new Audio("./sounds/zenos3.mp3");
const aulusLine1 = new Audio("./sounds/asina1.mp3");
const aulusLine2 = new Audio("./sounds/asina2.mp3");
const aulusLine3 = new Audio("./sounds/asina3.mp3");
const noemiLine1 = new Audio("./sounds/noemi1.mp3");
const noemiLine2 = new Audio("./sounds/noemi2.mp3");
const noemiLine3 = new Audio("./sounds/noemi3.mp3");

zenosLine1.volume = 0.6
zenosLine2.volume = 0.6
zenosLine3.volume = 0.6
aulusLine1.volume = 0.5
aulusLine2.volume = 0.5
aulusLine3.volume = 0.5
noemiLine1.volume = 0.5
noemiLine2.volume = 0.5
noemiLine3.volume = 0.5

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var talking = 0;

function playAudioZenos() {
    if (talking == 0) {
        var x = getRandomInt(3);
        if (x == 0) {
            zenosLine1.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },2000);
        }
        if (x == 1) {
            zenosLine2.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },4000);
        }
        if (x == 2) {
            zenosLine3.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },5000);
        }
    }
}

function playAudioAulus() {
    var x = getRandomInt(3);
    if (talking == 0) {
        if (x == 0) {
            aulusLine1.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },1000);
        }
        if (x == 1) {
            aulusLine2.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },2000);
        }
        if (x == 2) {
            aulusLine3.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },2000);
        }
    }
}

function playAudioNoemi() {
    var x = getRandomInt(3);
    if (talking == 0) {
        if (x == 0) {
            noemiLine1.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },6000);
        }
        if (x == 1) {
            noemiLine2.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },5000);
        }
        if (x == 2) {
            noemiLine3.play()
            talking = 1
            setTimeout(function(){
                talking = 0;
            },4000);
        }
    }
}

// Music drop-down menu animation handling
var id = null;
var pos = -46;

function showMusic() {
    var musDD = document.getElementById("music-dropdown");
    clearInterval(id);
    id = setInterval(frame, 8);
//    console.log("music dropdown entered")
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        }
        else {
            pos++;
            musDD.style.top = pos + 'px';
        }
    }
}
function hideMusic() {
    var musDD = document.getElementById("music-dropdown");
    clearInterval(id);
    id = setInterval(frame, 8);
//    console.log("music dropdown exited")
    function frame() {
        if (pos == -46) {
            clearInterval(id);
        }
        else {
            pos--;
            musDD.style.top = pos + 'px';
        }
    }
}

// Opening the page with the entry button
function pressMainButton() {
    var backgroundBacking = document.getElementById("background-backing");
    var backgroundLayer1 = document.getElementById("background-layer-1");
    var backgroundLayer2 = document.getElementById("background-layer-2");
    var backgroundLayer3 = document.getElementById("background-layer-3");
    var pageFrame = document.getElementById("page-frame");
    var backgroundClick1 = document.getElementById("background-click-1");
    var backgroundClick2 = document.getElementById("background-click-2");
    var backgroundClick3 = document.getElementById("background-click-3");
    var welcomePanel = document.getElementById("welcome-panel");
    var welcomeFrame = document.getElementById("welcome-frame");

    clickAudio();
    welcomePanel.style.visibility = "hidden";
    welcomeFrame.style.visibility = "hidden";

    backgroundBacking.style.visibility = "visible";
    backgroundLayer1.style.visibility = "visible";
    backgroundLayer2.style.visibility = "visible";
    backgroundLayer3.style.visibility = "visible";
    pageFrame.style.visibility = "visible";

    pageFrame.style.animation = "appearAnimation ease 1s 1.5s";
    backgroundBacking.style.animation = "fadeInAnimation ease 3s";
    setTimeout(function(){
        backgroundLayer1.style.animation = "fadeInAnimation ease 2s";
    },500);
    setTimeout(function(){
        backgroundLayer2.style.animation = "fadeInAnimation ease 2s";
    },1000);
    setTimeout(function(){
        backgroundLayer3.style.animation = "fadeInAnimation ease 2s";
        backgroundClick1.style.visibility = "visible";
    },1500);
    setTimeout(function(){
        backgroundLayer2.style.filter = "brightness(1)";
        backgroundClick2.style.visibility = "visible";
    },2000);
    setTimeout(function(){
        pageFrame.style.opacity = "1";
        backgroundLayer1.style.filter = "brightness(1)";
        backgroundClick3.style.visibility = "visible";
    },2500);
    setTimeout(function(){
        backgroundBacking.style.filter = "brightness(1)";
    },3000);
    setTimeout(function(){
        backgroundLayer3.style.filter = "brightness(1)";
    },3500);
}

// Button press reactions
var curBut = 0;

function sharedWindowOpen(x) {
    var iPanel = document.getElementById("investigate");
    var hideFrame1 = document.getElementById("page-record");
    var hideFrame2 = document.getElementById("page-personnel");
    var hideFrame3 = document.getElementById("page-projects");
    var hideFrame4 = document.getElementById("page-reference");
    var hideFrame5 = document.getElementById("page-documentation");

    iPanel.style.animation = "growAnimation ease 1s 0s";
    iPanel.style.visibility = "visible";
    setTimeout(function(){
        iPanel.style.animation = "none";
    },1000);
    if (x == 1) {
        y = 57;
        hideFrame1.style.visibility = "visible";
        hideFrame2.style.visibility = "hidden";
        hideFrame3.style.visibility = "hidden";
        hideFrame4.style.visibility = "hidden";
        hideFrame5.style.visibility = "hidden";
    }
    if (x == 2) {
        y = 65;
        hideFrame1.style.visibility = "hidden";
        hideFrame2.style.visibility = "visible";
        hideFrame3.style.visibility = "hidden";
        hideFrame4.style.visibility = "hidden";
        hideFrame5.style.visibility = "hidden";
    }
    if (x == 3) {
        y = 73;
        hideFrame1.style.visibility = "hidden";
        hideFrame2.style.visibility = "hidden";
        hideFrame3.style.visibility = "visible";
        hideFrame4.style.visibility = "hidden";
        hideFrame5.style.visibility = "hidden";
    }
    if (x == 4) {
        y = 81;
        hideFrame1.style.visibility = "hidden";
        hideFrame2.style.visibility = "hidden";
        hideFrame3.style.visibility = "hidden";
        hideFrame4.style.visibility = "visible";
        hideFrame5.style.visibility = "hidden";
    }
    if (x == 5) {
        y = 89;
        hideFrame1.style.visibility = "hidden";
        hideFrame2.style.visibility = "hidden";
        hideFrame3.style.visibility = "hidden";
        hideFrame4.style.visibility = "hidden";
        hideFrame5.style.visibility = "visible";
    }
    iPanel.style.top = y + "%";
    iPanel.style.transform = "translateY(-" + y + "%)";
}
function sharedWindowClose() {
    var iPanel = document.getElementById("investigate");
    var hideFrame1 = document.getElementById("page-record");
    var hideFrame2 = document.getElementById("page-personnel");
    var hideFrame3 = document.getElementById("page-projects");
    var hideFrame4 = document.getElementById("page-reference");
    var hideFrame5 = document.getElementById("page-documentation");

    iPanel.style.animation = "shrinkAnimation ease 1s 0s";

    setTimeout(function(){
        iPanel.style.visibility = "hidden";
        hideFrame1.style.visibility = "hidden";
        hideFrame2.style.visibility = "hidden";
        hideFrame3.style.visibility = "hidden";
        hideFrame4.style.visibility = "hidden";
        hideFrame5.style.visibility = "hidden";
    },950);
}

function executeButton(x) {
    clickAudio();
    pauseButtons();
    if (curBut == x) {
        sharedWindowClose();
        curBut = 0;
    }
    else {
        sharedWindowOpen(x);
        curBut = x;
    }
}

function pauseButtons() {
    var bCover = document.getElementById("button-cover");
    bCover.style.visibility = "visible";
    setTimeout(function(){
        bCover.style.visibility = "hidden";
    },1000);
}

// To reposition diamond within scrollbar Foot according to position on page
var r = document.querySelector(':root');

let noeScroll = document.getElementById("noe-profile-scroll");
let perScroll = document.getElementById("personnel-scroll");
let prjScroll = document.getElementById("project-scroll");
let refScroll = document.getElementById("reference-scroll");
let galScroll = document.getElementById("gallery-scroll");
var setScroll = 0;

function changeuPos(x) {
    setScroll = x.scrollTop / (x.scrollHeight - x.offsetHeight) * 100;
    r.style.setProperty('--uPos', setScroll + "%");
    //console.log("Raw read: " + x.scrollTop);
    //console.log("Variable: " + setScroll);
}

let prjMedAlb = document.getElementById("p-ma-tab");
let prjMedAlbArrow = document.getElementById("p-ma-tab-arrow");
let prjRes = document.getElementById("p-res-tab");
let prjResArrow = document.getElementById("p-res-tab-arrow");
let prjAaa = document.getElementById("p-aaa-tab");
let prjAaaArrow = document.getElementById("p-aaa-tab-arrow");
let prjScu = document.getElementById("p-scu-tab");
let prjScuArrow = document.getElementById("p-scu-tab-arrow");
let prjIno = document.getElementById("p-ino-tab");
let prjInoArrow = document.getElementById("p-ino-tab-arrow");

// To open and close project tabs on toggle
function infoToggle(x, y) {

    hoverAudio6()

    if (x.style.getPropertyValue('--isToggled') == 0) {
        x.style.setProperty("height", "min-content");
        x.style.setProperty("overflow", "visible")
        y.style.setProperty("background-image", 'url("./images/scroll_down.png")');
        setTimeout(function(){
            x.style.setProperty('--isToggled', 1);
        },100);
    }
    if (x.style.getPropertyValue('--isToggled') == 1) {
        x.style.setProperty("height", 0);
        x.style.setProperty("overflow", "hidden")
        y.style.setProperty("background-image", 'url("./images/scroll_right.png")');
        setTimeout(function(){
            x.style.setProperty('--isToggled', 0);
        },100);
    }
}

let imagePane = document.getElementById("fullscreen-image");

// To manage the fullscreen gallery images
function openFSImage(i) {
    imagePane.style.setProperty("background-image", 'url("./gallery/' + i + '.png")');
    imagePane.style.setProperty("visibility", "visible");
    clickAudio2()
}
function closeFSImage() {
    imagePane.style.setProperty("visibility", "hidden");
    hoverAudio6()
}