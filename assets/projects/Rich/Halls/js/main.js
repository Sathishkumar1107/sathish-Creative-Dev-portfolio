// JavaScript Document
// DYNAMIC DATA
var bannerWidth;
var bannerHeight;
var spriteSheet1 = [];
var frame = [];
var frameCount;
var spritWidth;
var frameWidth;
var scale;
var animation;

// State object - you can call this whatever you like
var state = {};


// Create and provide timeline to Hoxton
var Creative = {};
Creative.tl = gsap.timeline({ defaults: { ease: Power1.easeOut } });
//hoxton.timeline = Creative.tl;
gsap.defaults({ overwrite: "auto" });


// content
var container = getById("container");
var loadingContent = getById("loading_content");

// images
var bgImage = getById("bgImage");
var product1 = getById("product1");
var product2 = getById("product2");
var logo = getById("logo");
var icon = getById("icon");
var exitBtn = getById("bannerExit");


function getById(eleID) {
    return document.getElementById(eleID);
}

/*
 * Function called when banner and it's data/images have initially loaded.
 * Builds timeline and adds necessary listeners.
 */
function startAd() {

    // show Ad
    console.log("call____________")


    // setup timeline
    Creative.tl.eventCallback("onStart", onBannerStart);
    Creative.tl.eventCallback("onRepeat", onBannerRepeat);




    state = hoxton.getState();
    if (state.frame1Text2.trim().length === 0) {
        console.log("nonoooooooo")
        getById("frame1Text2").style.display = "none";
    } else {
        console.log("dissssssssss")
        getById("frame1Text2").style.display = "flex";
    }

    bannerWidth = state.adSize.width;
    bannerHeight = state.adSize.height;
    // frame=state.frameTime.split(',');

    logoScale = state.logoScale;

    logoAnimationX = state.logoAnimation.split(',')[0];
    logoAnimationY = state.logoAnimation.split(',')[1];




    Creative.init();
    Creative.checkIsBackup() ? Creative.jumpToEndFrame() : null;
    exitBtn.addEventListener("click", exitBtn_clickHandler, false);
}


function exitBtn_clickHandler() {
    hoxton.exit("Exit");
}

/*
 * function fired banner starts
 */
function onBannerStart() {
    //console.log("bannerStart()");
}

/*
 * function fired banner repeats
 */
function onBannerRepeat() {
    _currentLoop++;
    //console.log("bannerRepeat():"+_currentLoop);
}

/*
 * function fired when all banner loops are completed
 */
function bannerComplete() {
    // console.log("bannerComplete()");

}

/*
 * TODO: backup generation
 */

Creative.jumpToEndFrame = function() {
    Creative.tl.pause();
    Creative.tl.seek("end", false);
}

Creative.checkIsBackup = function() {
    return (window.location.href.indexOf('hoxtonBackup') >= 0) ? true : false;
}


/*
 * Function builds banners timeline
 */
Creative.init = function() {
    var _dynamicData = hoxton.getState();
    updateElements(_dynamicData);
    var start = 0;


    Creative.tl.call(resetBanner, [], 0.000)
        .set("#copyHolder1, #frame1Text2, #cta,#legalCopyHolder,#product1, #product2", { opacity: 0 })

    .addLabel("start", 0)
        .to("#mainContainer", { duration: 0.1, opacity: 1 }, "start+=.5")
        .to("#logo", { duration: 2, scale: logoScale, x: logoAnimationX, y: logoAnimationY, ease: Power4.easeIn }, "start")
        .to("#logo", { duration: .3, opacity: 0, ease: Power4.easeIn }, "start+=1.5")

    .addLabel("frame2", "frame2-=0.5")

    .to("#product1", { duration: 0.3, opacity: 1, ease: Linear.easeNone }, "frame2-=0.5")
        .to("#product2", { duration: 0.3, opacity: 1, ease: Linear.easeNone }, "frame2-=0.5")
        .to("#copyHolder1", { duration: 0.5, opacity: 1, ease: Linear.easeNone }, "frame2-=0.25")
    if (_dynamicData.frame1Text2.trim().length === 0) {
        Creative.tl
            .to("#cta", { duration: 0.3, opacity: 1, ease: Linear.easeNone }, "frame2+=0.75")
            .to("#legalCopyHolder", { duration: 0.5, opacity: 1, ease: Linear.easeNone }, "frame2+=1.25")

    } else {
        Creative.tl
            .to("#frame1Text2", { duration: 0.5, opacity: 1, ease: Linear.easeNone }, "frame2+=0.75")
            .to("#cta", { duration: 0.5, opacity: 1, ease: Linear.easeNone }, "frame2+=1.25")
            .to("#legalCopyHolder", { duration: 0.5, opacity: 1, ease: Linear.easeNone }, "frame2+=1.75")

    }
    Creative.tl



        .addLabel("end", "frame2+=" + 4)
        .call(bannerComplete, null, "end");


};


/**
 * function sets banner content to initial states
 */
function resetBanner() {


    resetarrow()

}

function updateElements(_dynamicData) {


    state = _dynamicData;
    console.log("sdfsdfsdfdfsd", state.frame1Text2.trim().length)
    if (state.frame1Text2.trim().length === 0) {
        getById("frame1Text2").style.display = "none";
    } else {
        getById("frame1Text2").style.display = "flex";
    }

}

function resetarrow() {
    gsap.to(".arrow", { x: 6, duration: 0.2, delay: 0.25, repeat: 1, yoyo: true })
}