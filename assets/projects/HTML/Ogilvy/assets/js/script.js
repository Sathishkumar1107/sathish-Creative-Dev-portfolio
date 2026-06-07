// POLYFILL FOR IE 11 TO FIX foEach()
if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/*************************************************************/
// GLOBAL VARIABLES
var tl;
var _datGuiProps = {};
var _datGuiControllers = {};
var TOTAL_ASSETS_LOADED = 0;
var TOTAL_ASSETS_TO_PRELOAD;
var FIRST_LOOP = true;
var cta = document.getElementById("f2--cta");
// ADDITIONAL VARIABLES


/*************************************************************/
// CLICK HANDLERS
function onReplayClick() {
  if(_logging){ console.log('onReplayClick()'); }
  // do replay
  resetCreative();
  runCreative();
  // getReplayTween().play();
}

function onReplayHover() {
  if(_logging){ console.log('onReplayHover()'); }
  
  // getReplayTween().play()
  // gsap.fromTo( '.js-replay', { duration:.6, rotation: 0, transformOrigin: '50% 50%'}, {rotation: 360});
  
}

function onClickthroughClick() {
  if(_logging){ console.log('onClickthroughClick()'); }
  // do banner clicked
  window.open( window.clickTag );
}


/*************************************************************/
function registerEffects() {
  if(_logging){ console.log('registerEffects()'); }
  
}


/*************************************************************/
function initCreative() {
  if(_logging){ console.log('initCreative()'); }
  
  document.getElementById('replay').onclick = onReplayClick;
  document.getElementById('replay').onmouseenter = onReplayHover;
  document.getElementById('clickthrough').onclick = onClickthroughClick;

  // registerEffects();
  resetCreative();
  setupAnimations();
  runCreative();
}

/*************************************************************/
function resetCreative() {
  if(_logging){ console.log('resetCreative()'); }

  // hide
  // gsap.set([
  //   '#replay'
  // ], { autoAlpha:0 })

  // set initial Y position
}


/*************************************************************/
function runCreative() {
  if(_logging){ console.log('runCreative()'); }

  document.getElementById("preloader").style.display = "none";
  document.getElementById("ad-content").style.display = "block";

  FIRST_LOOP = false;

  if(FIRST_LOOP) {
    tl.repeat(2).yoyo(false).play(0);
    // tl.set('#replay',{autoAlpha:1}, 14 ).add( getReplayTween().play(0), 14 ).play(); 
    FIRST_LOOP = false;
    console.log('Running 3x loops')
  } else {
    tl.set("#replay", { autoAlpha: 0 }, 0 )
    tl.repeat(0).play(0);
    tl.add( getReplayTween().play(0), 14 ).play(); 
    console.log('Running 1x loop')
  }
}

/*************************************************************/
// configure all animations here
// all timeline/tween variables must be global (defined up top)
function setupAnimations() {
  if(_logging){ console.log('setupAnimations()'); }
  
  tl = gsap.timeline({default: { duration:.5, ease:'power2' }}); 

  // setup timeline for each frame
 


  var tl_f1 = gsap.timeline({default: { duration:.5, ease:'power2' }})
     
    tl_f1
      .from( '#f1, #f1--svg', { autoAlpha:0, }, 0.1 )
      .from( '#f1--lockup', {duration:0.5, scale:0, y:"+=2.5%",  transformOrigin: 'center 68.8%' }, 0.2 )  
      .from( '#f1--bg', { scale:0, autoAlpha:0, ease:"back", transformOrigin: 'center 68.8%' }, 0 )         
     .from( '#f1--svg', { duration: 5, scale:1.125, rotate:-8, transformOrigin: 'center center' }, 0 )
      .from( '#f1--svg .element', { duration: 5, rotate:30, transformOrigin: 'center center' }, 0 )
      // .from( '#f3--logos', { y:"+=15%" }, 1 )

       var tl_f2 = gsap.timeline({default: { duration:0.5, ease:'back.in' }})
      tl_f2
     .to( '#f1--lockup,#f1--cta, #f1--svg, #f1--copy,#f1--bg', { autoAlpha:0, scale:1.125, transformOrigin: 'center center' }, -0.5 )
      .from( '#f1-and-f2--fg, #f2-svg', { duration: 1, autoAlpha: 0 }, 0.5 )
      .from( '#f2-svg', { duration: 4, rotate:10, scale:1.25, transformOrigin: 'center center' }, 0 )
      .from( '#f2-svg .element', { duration: 13, rotate:100,  transformOrigin: 'center center' }, 0 )
      // .to( '#f1-and-f2--fg, #bg', { duration: 10, scale:1.25, transformOrigin: 'center 40%' }, 0 )
//      .from( '#bg', { duration: 8, scale:2.5, transformOrigin: 'center center' }, 0 )
      .from( '#f1-and-f2--holder', { autoAlpha: 0, scale:0, y:"+=25%", ease:"back.inOut" }, 0.125 )
      .from( '#f2--copy', { y:"-=5%", autoAlpha:0, transformOrigin:'center 16.8%', ease:'back.inOut' }, 0.5 )


        var tl_f3 = gsap.timeline({default: { duration:.5, ease:"back.in" }})
      tl_f3
     .to( '#f1-and-f2--fg,#f2-svg, #f1-and-f2--holder, #f2', { autoAlpha:0, scale:1.125, transformOrigin: 'center center' }, -0.5 ) 
    .from( '#f3-svg', { duration: 1, autoAlpha: 0 }, 0 )
    .from( '#f3', { y:"-=5%", autoAlpha:0, transformOrigin:'center 16.8%', ease:'back' }, 0.125 )
    .from( '#f3-svg', { duration: 4, rotate:10, scale:1.25, transformOrigin: 'center center' }, 0 )
      .from( '#f3-svg .element', { duration: 13, rotate:150,  transformOrigin: 'center center' }, 0 )
      .from( '#f1-and-f2--holderx', {scale:0, y:"+=2.5%", transformOrigin: '92 125', ease:'back.inOut'}, 0.125 )         


    .from( '#f3--copy', { y:"-=5%", autoAlpha:0, transformOrigin:'center 16.8%', ease:'back.inOut' }, 0.5 )


      var tl_f4 = gsap.timeline({default: { duration:.5, ease:'power2' }})
      tl_f4
      .to( '#f2-svg,  #f3-svg, #f3--copy', { autoAlpha:0, scale:1, transformOrigin: 'center center' }, -0.5 )
      .from( '#f4--svg,#f4', { duration: 1, autoAlpha: 0, ease:"back" }, 0 )
    
      .from( '#f4--holderx,#f4--copy', {duration:0.5, scale:0, y:"+=2.5%", transformOrigin: 'center 68.8%' }, 0.2 )         
     .from( '#f4--svg', { duration: 4, scale:1.125, rotate:-8, transformOrigin: 'center center' }, 0 )
      .from( '#f4--svg .element', { duration: 4, rotate:30, transformOrigin: 'center center' }, 0 )
      .from( '#f4--logos, #f4--logobg', { y:"+=19%" }, 1 )


  // add each timeline to the main timeline
    tl
      .addLabel("frame1")
      .add ( tl_f1, 0 )
    .addLabel("frame2")
      .add ( tl_f2, 4 )
      .addLabel("frame3")
      .add ( tl_f3, 8)
      .addLabel("frame4")
      .add ( tl_f4, 12 )

  // always setup end state
    tl
    .addLabel("end", 14)
}


/*************************************************************/
function getReplayTween() {
  return gsap.fromTo( '#replay', { autoAlpha:0, duration:1, rotation:0 }, { autoAlpha:1, rotation:360, paused:true, transformOrigin:'50% 50%' });
}

/*************************************************************/
function preloadCreative() {
  if(_logging){ console.log('preloadCreative()'); }
  if(_logging){ console.log('Preloading started'); }

  var datasets = document.querySelectorAll('[data-subload]');

  TOTAL_ASSETS_LOADED = 0;
  TOTAL_ASSETS_TO_PRELOAD = datasets.length;

  datasets.forEach( function( el ) {
    el.onload = function() {
      TOTAL_ASSETS_LOADED++;
      if(_logging){ console.log('Preloading %s/%s', TOTAL_ASSETS_LOADED, TOTAL_ASSETS_TO_PRELOAD); }
      
      if (TOTAL_ASSETS_LOADED == TOTAL_ASSETS_TO_PRELOAD ) {
        if(_logging){ console.log('Preloading complete'); }
        
        initCreative()
      }
    }
    el.src = el.dataset.subload;

  });
}


/*************************************************************/
function getMasterTimeline() {
  if(_logging){ console.log('getMasterTimeline()'); }
  return tl;
}

/*************************************************************/
function bannerReady() {
  if(_logging){ console.log('bannerReady()'); }

  // remove this for now as it is throwing error in Safari
  // window.top.postMessage('BANNER.READY')
}
