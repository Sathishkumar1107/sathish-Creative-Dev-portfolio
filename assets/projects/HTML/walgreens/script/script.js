	

function startAnim(){
	var startTime = 0;
	var TL = new TimelineMax();
	startTime += 0.25;	
	TL.to("#container", 0.5, { autoAlpha: 1, ease:Linear.easeIn },startTime);
		
	// Frame 1
	startTime += 1;
	TL.to(["#svg-container"], 1, { x: 0, ease: Power2.easeInOut}, startTime);
	TL.to([".st0"], 1.2, {strokeDashoffset:0, ease:Linear.easeNone}, startTime);
	TL.to(["#copy1"], 1, { y: 0, autoAlpha:1, ease: Power2.easeInOut}, startTime);
	startTime += 1.2;
	TL.to([".st1"], 5, {strokeDashoffset:0, ease:Linear.easeNone}, startTime);


	startTime += 0.8;
	TL.to(["#svg-container"], 1, { x: -315, ease: Power2.easeInOut}, startTime);
	// TL.to([".st1"], 2, {strokeDashoffset:480, ease:Linear.easeNone}, startTime);
	TL.to(["#copy1, #prod1,#terms1,#logo2"], 1, { x:-300, y: 0, autoAlpha:1, ease: Power2.easeInOut}, startTime);
	TL.to(["#terms,#logo"], 1, { autoAlpha:1, ease:Power2.easeInOut}, startTime);
	TL.to(["#frame2, #prod2,#terms,#logo,#cta1"], 1, { x: 0, ease:Power2.easeInOut}, startTime);
	
	startTime += 2.5;
	TL.to(["#svg-container"], 1, { x: -610, ease: Power2.easeInOut}, startTime);
	// TL.to([".st1"], 2, {strokeDashoffset:0, ease:Linear.easeNone}, startTime);
	TL.to(["#frame2, #prod2"], 1, { x:-300, y: 0, autoAlpha:1, ease: Power2.easeInOut}, startTime);
	TL.to(["#frame3, #prod3"], 1, { x: 0, ease:Power2.easeInOut, onComplete: txtAnim}, startTime);
//	TL.to(["#shine"], 1, { x: 207, ease: Power1.easeOut},startTime+3); 
	startTime += 4.5;
	TL.to(".copy3Holder", 0.4, {scale:1.1, yoyo:true, repeat:1, ease: "power1.Out"}, startTime);
	
	startTime += 1;
	TL.to(["#frame3, #prod3, #copy4, #svg-container"], 0.5, { autoAlpha:0, ease: Power2.easeOut}, startTime);
	startTime += 0.5;
	//TL.to([".st3"], 1, {strokeDashoffset:0, ease:Linear.easeNone}, startTime);
	TL.to(["#copy4, #img1"], 0.5, { autoAlpha:1, ease: Power2.easeOut}, startTime);

	
	TL.to(["#yellow1"], 0.2, {clip:"rect(0px, 290px, 60px, 0px)", delay:0.2, ease:Power0.easeOut}, startTime);
	TL.to(["#yellow2"], 0.2, {clip:"rect(59px, 290px, 75px, 0px)", delay:0.4, ease:Power0.easeOut}, startTime);
	TL.to(["#yellow3"], 0.2, {clip:"rect(74px, 290px, 100px, 0px)", delay:0.6, ease:Power0.easeOut}, startTime);
    startTime += 0.5;
	TL.to(["#shine"], 1, { x: 207, ease: Power1.easeOut},startTime+1); 

	console.log(TL.duration());


	 
}

function txtAnim(){
	var startTime = 0.5;
	var Tl = new TimelineMax();
	var txt = document.getElementsByClassName("txt");
	for(var i = 0; i < txt.length; i++){
		Tl.to(txt[i], 0.3, {scale:1.3, rotation:0.01, ease: "power1.inOut"}, startTime-=0.2);
		startTime += 0.3;
		Tl.to(txt[i], 0.3, {scale:1, rotation:0.01, ease: "power1.inOut"}, startTime);
		
	}
}


window.onload = startAnim();



