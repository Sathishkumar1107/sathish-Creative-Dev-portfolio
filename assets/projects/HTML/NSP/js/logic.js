
(function () {


	// State object - you can call this whatever you like
	var state = {};

	// Create timeline
	var tl = new TimelineMax();

	// DYNAMIC DATA
	var w = window.innerWidth;
	var h = window.innerHeight;
	var contWidth, contHeight;
	var bg1End;
	var bg2End;
	
	
	// Provide timeline to Hoxton
	hoxton.timeline = tl;

	// Define the function that should fire when the Ad Server is ready and assets are preloaded
	hoxton.isInitialized = init;
	
	function init() {
		if(id("mainContainer") == null || id("mainContainer") == undefined){
			return;
		}
		// Add shorthand references to state object
		state = hoxton.getState();
		bg1End = setScale(state.bg1End);
		bg2End = setScale(state.bg2End);
		addListeners();
		mainAnimation.init();
	}
	
	function setScale(str){
		var temp = str.split(",");
		return { x : temp[0], y : temp[1], s : temp[2] };
	}
	
	
	// START ANIMATION, MAIN TIMELINE

	var mainAnimation = {
		init: function () {
				tl
				.add( "start" )
				.to( "#mainContainer", { duration: 0.5, opacity: 1 }, "start");
				// FRAME 1
				tl
				.to(["#bg1"], 6, { x:bg1End.x, y: bg1End.y, scale: bg1End.s, rotation:0.01, force3D:false, ease:Power0.easeNone }, "start")
				.to(["#copy1"], .3, { opacity: 0, ease:Power1.easeOut }, "start+=3")
				.add( "frame2", "-=2.6" )
				.to(["#copy2"], .5, { opacity: 1, ease:Power1.easeIn }, "frame2")
				.to(["#copy2"], .3, { opacity: 0, ease:Power1.easeOut }, "frame2+=3.2")
				// FRAME 3
				.add( "frame3", "-=1" )
				.to(["#bg2","#copy5"], .5, { opacity: 1, ease:Power1.easeIn }, "frame3")
				.to(["#bg2"], 5, { x:bg2End.x, y: bg2End.y, scale: bg2End.s, rotation:0.01, force3D:false, ease:Power0.easeNone }, "frame3")
				.to(["#copy5", "#landscapeLogo1"], .3, { opacity: 0, ease:Power1.easeOut }, "frame3+=3")
				// FRAME 4
				.add( "frame4", "-=2" )
				.to(["#copy6","#landscapeLogo2"], .5, { opacity: 1, ease:Power1.easeIn }, "frame4+=.3")
				.to(["#cta"], .5, { opacity: 1, ease:Power1.easeIn }, "frame4+=.7")
				
			console.log(tl.duration());

			//Hoxton Backup
			if (hoxton.backup) {
				tl
					.add("endFrame", "+=1")
					.pause("endFrame");
			}
		},
		reset: function () {
			//tl.set( shadow, { x:-100 });	
		},
		hover: function () {
			if (mainAnimation.reached) {
				//mainAnimation.reset();
				//tl.to(shadow, 1.5, { opacity: 1, x:200, onComplete: mainAnimation.reset });
			}
		}
	}
	
	// SPLIT THE COPY BY <br> AND RETURN OBJECT
	function createObject(copy) {
		var array = state[copy].split('<br>');
		var obj = {};
		for(var i = 0; i < array.length; i++){
			obj[copy+alphabet[i]] = array[i];
		}
		return obj;
	}
	
	// CREATE TEXT FILEDS BASED ON THE LINE BREAK IN EACH COPY
	function updateTextFields(txt, count, copy){
		id(copy).innerHTML = "";
		for(var i = 0; i < count; i++){
			var str = Object.keys(txt)[i];
			if(copy === "copy5"){
				id(copy).innerHTML += `<div id=${str}Holder class=mask> <div class=${copy}>${txt[str]}</div></div>`;
			} else {
				id(copy).innerHTML +=`<div id=${str} class=${copy}> ${txt[str]}</div></div>`;
			}
		}
	}
	
	// BACKGROUND EXIT
	function addListeners() {
		id('banner-exit').addEventListener('click', function () {
		//EB.clickthrough();
		hoxton.exit("Exit")
		}, false);
	}

	// UTILS

	function id(input) {
		if(document.getElementById(input) != null && document.getElementById(input) != undefined){
			return document.getElementById(input);;
		}
	}

})()