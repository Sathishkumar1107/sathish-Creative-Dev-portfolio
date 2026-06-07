"use strict";
var TL ;
window.addEventListener("load", startAd);

// function initEB() {
//     if (!EB.isInitialized()) {
//         EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
//     } else {
//         startAd();
//     }
// }

function startAd() {
    TL =  gsap.timeline({delay: 0, repeat: 0, repeatDelay: 3});
	aninatestarter();
    addEventListeners();
}
   function replay1() {

     TL.restart();

    }



function addEventListeners() {
    document.getElementById("exit-button").addEventListener("click", clickthrough);	
    replay.addEventListener('click', replay1, false);
}

function clickthrough() {
    EB.clickthrough();
	console.log("clickthrough") 
}


// -------------- START ADD ------------------

function aninatestarter() {
	var starttime = 0;
    
    TL.to (["#ad-container"], 0.3, {autoAlpha: 1}, starttime);
    
    //Frame1
    starttime += 0;
    TL.to(["#bg1"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);
    TL.to(["#copy1a"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime+1);
    TL.to(["#copy1b"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime+1.5);
    TL.to(["#copy1c"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime+2);
    TL.to(["#copy1d"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime+2.5);

    //Frame2
    starttime += 4;
    TL.to(["#copy1a,#copy1b,#copy1c,#copy1d,#bg1"],0.5, { autoAlpha:0, ease: Power4.easeOut}, starttime);
    TL.to(["#bg2"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);
    TL.to(["#copy2"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);

    //Frame3
    starttime += 1;
    TL.to(["#copy2,#bg2"],0.5, { autoAlpha:0, ease: Power4.easeOut}, starttime);
    TL.to(["#bg3"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);
    TL.to(["#copy3"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);

    //Frame4
    starttime += 1;
    TL.to(["#copy3,#bg3"],0.5, { autoAlpha:0, ease: Power4.easeOut}, starttime);
    TL.to(["#bg4"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);
    TL.to(["#copy4"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);

     //Frame5
    starttime += 1;
    TL.to(["#copy4,#bg4"],0.5, { autoAlpha:0, ease: Power4.easeOut}, starttime);
    TL.to(["#bg5"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);
    TL.to(["#copy5"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);

    //Frame6
    starttime += 1;
    TL.to(["#copy5,#bg5"],0.5, { autoAlpha:0, ease: Power4.easeOut}, starttime);
    TL.to(["#bg1"],0.5, {autoAlpha:1,ease: Power4.easeOut}, starttime);
    TL.to(["#copy6a"],1, {clip:"rect(0px 300px 600px 0px)",ease: Power4.easeOut}, starttime+.5);
    TL.to(["#copy6b"],1.5, {clip:"rect(0px 300px 600px 0px)",ease: Power4.easeOut}, starttime+1);

    //Frame7
    starttime += 2;
    TL.to(["#copy6a,#copy6b"],0.5, { autoAlpha:0, ease: Power4.easeOut}, starttime);
    TL.to(["#logo,#logo_n"],0.5, { autoAlpha:1, ease: Linear.easeIn}, starttime);
    TL.to(["#arc"],1.5, {clip:"rect(0px 300px 600px 0px)", ease: Linear.easeIn}, starttime);
    TL.to(["#logo_n"],0.1, { scaleY:.1,transformOrigin: "110px 310px", ease: Linear.easeIn}, starttime+0.3);
    TL.to(["#logo_n"],0.1, { scaleY:1,transformOrigin: "110px 310px", ease: Linear.easeIn}, starttime+0.4);
    TL.from("#credits", .2, { autoAlpha:0,scale:1.3,rotate:-10, ease: Back.in },starttime+1);

    
  

        
    console.log(TL.totalDuration());
};



