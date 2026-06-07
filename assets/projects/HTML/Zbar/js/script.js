// Dom elemetns
var mainContainer, exit, mtl, bannerDuration;
var boolLegal = false;


function setupDom(){
	mainContainer = document.getElementById('mainContainer');
	exit = document.getElementById('exit');
	for(var i=0;i<mainContainer.getElementsByTagName("img").length;i++){
		if(mainContainer.getElementsByTagName("img")[i].getAttribute("data-src") != null){
			mainContainer.getElementsByTagName("img")[i].src = mainContainer.getElementsByTagName("img")[i].getAttribute("data-src");
		}
	}
}

function animate(){
	
	mtl = gsap.timeline({force3D: false,repeat:0, repeatDelay:0.5});
	// ---- Animation Timelines ------
   // GSDevTools.create();
	mtl.addLabel("frame1")
	.set(mainContainer, {visibility: "visible"})
	.to("#copy1a", {opacity:"1",ease:Power1.easeInOut}, "0.5")
	.to("#copy1b", {opacity:"1",ease:Power1.easeInOut}, "0.75")
	.to("#copy1c", {opacity:"1",ease:Power1.easeInOut}, "1")
	.to("#copy1d", {opacity:"1",ease:Power1.easeInOut}, "1.25")
	
	.add( "frame1", "3") 
	.to("#bag", {x:-7,y:61,scale:1.42, ease:Power1.easeInOut}, "frame1")
	
	

	.add( "frame2", "frame1" )
	.to("#bite1", {opacity:"1", duration:0.1}, "frame2+=0.5")
	.to("#bite1", {opacity:"0", duration:0.1}, "frame2")
	.to("#bite2", {opacity:"1", duration:0.1},"frame2+=1")
	
	
	
	.add( "frame3", "frame2+=2" )
	.to("#bag,#bite1, #bite2, #copy1", { x:-450, duration:0.5},"frame3")
	// .to("#logo", {opacity:"0", duration:0, ease:Power1.easeInOut}, "frame3")

	.add( "frame4", "frame2+=2.5" )
	// .to("#logo", {opacity:"0", duration:0, ease:Power1.easeInOut}, "frame4")
	.to("#packshot", {opacity:"1",ease:Power1.easeInOut}, "frame4")
	.to("#copy3", {opacity:"1",ease:Power1.easeInOut}, "frame4+=0.5")
	.to(["#fuelCon"], {scale:1,opacity:1,ease: "back.out(2)"}, "frame4+=1")
	.to(["#chalk1"], { rotation:0.3,yoyo:true,repeat:100,duration:0.1,ease:Power1.easeInOut}, "frame4+=1")
	.to(["#chalk2"], { rotation:0.3,yoyo:true,repeat:100,duration:0.1,ease:Power1.easeInOut}, "frame4+=1")	
	.to(["#chalk3","#chalk4"], { opacity:1,rotation:0.3,yoyo:true,repeat:101,duration:0.1,ease:Power1.easeInOut}, "frame4+=1")
	.to(["#cta"], {scale:1,ease:Power1.easeInOut,duration:0.25, opacity:1 }, "frame4+=1.75")

	bannerDuration = mtl.totalDuration();
	console.log(bannerDuration);
	
}


/** Called on the window load event. **/
function init() {
  setupDom();
  addListeners()
  animate();

}

/** Add appropriate listeners after the creative's DOM has been set up. **/
function addListeners() {
  exit.addEventListener('click', exitClickHandler);
}

/** Background Exit **/
function exitClickHandler() {
	if(!boolLegal){
		window.open(window.clickTag)
	}
}

/** Main onload handler **/
window.addEventListener('load', init);

