	

function startAnim(){
	var startTime = 0;
	var TL = new TimelineMax();
	startTime += 0.25;	
	TL.to("#ad_container", 0.25, { autoAlpha: 1, ease:Linear.easeIn },startTime);

	// Frame 1
	startTime += 1.5;
	TL.to(["#legal"], 0.5, { autoAlpha: 0, ease: Power1.easeOut},startTime); 
	TL.to(["#hex-lt, #hex-rt"], 0.3, { scale: 1, rotation:0.01, ease: Power0.easeOut},startTime); 
	TL.to(["#hexbg-lt, #hexbg-rt"], 0.3, { width: '5px', rotation:0.01, delay:0.1, ease: Power0.easeOut},startTime); 
	TL.to(["#hexbg-ctr"], 0.2, { autoAlpha: 1, delay:0.35, ease: Power1.easeOut},startTime); 
	TL.to(["#hexHolder"], 1, { scale: 7.2, x:548, y:192, ease: Power0.easeIn, rotation:0.01, delay:0.3},startTime); 

	startTime += 1.3;
	TL.to(["#hexHolder"], 0.65, { autoAlpha: 0, ease: Power1.easeOut},startTime); 
	startTime += 0.2;
	TL.to(["#img1"], 0.65, { autoAlpha: 1, ease: Power1.easeIn},startTime); 

	//Frame2
	startTime += .65;
	TL.to(["#bg1"], 6, { scale: 1, x:0, y:-32, ease: Power0.easeOut, rotation:0.01},startTime); 
	startTime += 0.2;
	TL.to(["#copy1"], .65, { autoAlpha:1, ease: Power1.easeOut},startTime); 

	//Frame3
	startTime += 2.5;
	TL.to(["#copy1"], .65, { autoAlpha:0, ease: Power1.easeOut},startTime); 
	startTime += 0.65;
	TL.to(["#copy2"], .65, { autoAlpha:1, ease: Power1.easeIn},startTime); 
	
	//Frame4
	startTime += 2.8;
	TL.to(["#img1, #copy2"], .5, { autoAlpha: 0, ease: Power1.easeOut},startTime); 
	TL.to(["#bg1"], 0.2, { autoAlpha: 0, ease: Power1.easeOut, delay:0.3},startTime); 
	startTime += 0.6;
	TL.to(["#copy3, #cta, #terms"], .65, { autoAlpha:1, ease: Power1.easeIn},startTime);
	TL.to(["#btn"], 0, { display: "block" }, startTime);
	
	console.log(TL.duration());	 
}

window.onload = startAnim();

btn.addEventListener("click", function () {
    TweenMax.to("#termsoverlay", .6, { autoAlpha: 1 });
    TweenMax.to("#terms", .3, { y: "-128", force3D: false, rotation: 0.01, ease: Power1.easeOut });
    TweenMax.to("#btn", .2, { display: "none" })
    TweenMax.to("#btn2, #termsUrl", .2, { display: "block" })

//	TL.kill();
});

btn2.addEventListener("click", function () {
    TweenMax.to("#btn", .2, { display: "block" })
    TweenMax.to("#btn2, #termsUrl", .2, { display: "none" })
    TweenMax.to("#termsoverlay", .3, { autoAlpha: 0 });
    TweenMax.to("#terms", .3, { y: 0, force3D: false, rotation: 0.01, ease: Power1.easeOut });

//	TL.resume();


});


