// JS to set banners content to dynamic content loaded from DoubleClick

// create var to provide easy access to dynamic data
var _dynamicData = {};

/*
* Check Hoxton is ready to prevent race condition errors
*/
if (typeof hoxton != "undefined")
{
    //console.log("Hoxton ready!");
    hoxton.timeline = Creative.tl;

    // Define the function that should fire when the Ad Server is ready and assets are preloaded
    hoxton.isInitialized = checkSetDynamicContent;
}
else
{
    var checkHoxtonExists = setInterval(function() 
    {
        if (typeof hoxton != "undefined")
        {
            //console.log("Hoxton ready! Interval used!");
            clearInterval(checkHoxtonExists);

            hoxton.timeline = Creative.tl;

            // Define the function that should fire when the Ad Server is ready and assets are preloaded
            hoxton.isInitialized = checkSetDynamicContent;
            checkSetDynamicContent();// force call in case we missed call from hoxton.js
        }
    }, 100); // check every 100ms
}


var _setDynamicFired = false;
/*
* Function ensures setDynamicContent() is only called once
*/
function checkSetDynamicContent()
{
    if(_setDynamicFired === false)
    {
        setDynamicContent();
        _setDynamicFired = true;
    }
}


function setDynamicContent()
{
    //console.log("setDynamicContent()");

    // for shorthand references to state object
    _dynamicData = hoxton.getState();

    

    // SET AND LOAD ALL DYNAMIC IMAGES - note due to Safari not firing onload for images with same url we need to just colled the unique images
    var _allDynamicImages = [bgImage,product1,product2,logo];

    var _arrDynamicImagePaths = [_dynamicData.bgImage,_dynamicData.product1,_dynamicData.product2,_dynamicData.logo];

    var _allDynamicImagesUnique = [];
    var _allDynamicImagePathsUnique = [];

    for(var k = 0; k <_arrDynamicImagePaths.length; k++)
    {
        if(_allDynamicImagePathsUnique.indexOf(_arrDynamicImagePaths[k]) === -1)
        {
            if(_arrDynamicImagePaths[k] != "images/noimage.png") // as this noImage will have already been loaded by html (safari gives issue if this is not checked for)
            {
                _allDynamicImagePathsUnique.push(_arrDynamicImagePaths[k]);
                _allDynamicImagesUnique.push(_allDynamicImages[k]);
            }
        }
    }

    var _numImagesLoaded = 0;
    for(var l = 0; l < _allDynamicImagesUnique.length; l++)
    {

        _allDynamicImagesUnique[l].onload = function()
        {
            _numImagesLoaded++;
            if(_numImagesLoaded === _allDynamicImagesUnique.length) // only once all images are loaded
            {
                // Start Ad
                startAd();
            }
        };
    }

    // set dynamic images
    bgImage.src = _dynamicData.bgImage;
    product1.src = _dynamicData.product1;
	 product2.src = _dynamicData.product2;
    logo.src = _dynamicData.logo;

    // set any dynamic data that Hoxton can not update by targeting a DOM element                   
    setDynamicNonDomData();
}


/*
* Set any dynamic data that Hoxton can not update by targeting a DOM element
*/                               
function setDynamicNonDomData()
{   
    console.log("setDynamicNonDomData");
    updateElements(_dynamicData);

}




/*
* For content in your creative that Hoxton can not update by targeting a DOM element
* use this function to manually refresh and have control over the display when working in Hoxton.
*/
Creative.updateContent = function (item) {
    
    console.log("Creative.updateContent");

    //hoxton.setState(item);
    _dynamicData = hoxton.getState();

    setDynamicNonDomData(); // update data


    var ifNeedsRebuilt = false; // if we need to rebuild the timeline

    switch(item.name)
    {
        case "video01":

            ifNeedsRebuilt = true;
            break;

        default:
            ifNeedsRebuilt = false;
    }

    
    // If we need to renuild the timeline to refresh the updates in Hoxton
    if(ifNeedsRebuilt === true && hoxton.timeline.time() > 0.1)
    {   
        /* 
        // ORIGINAL SOLUTION
        //console.log("rebuild timeline");
        Creative.tl.clear(); // clear timline
        Creative.init(); // rebuild timeline
        Creative.tl.seek("frame01");
        Creative.tl.play();
        */

        // SELDA'S SOLUTION
        debounceRate = 1000;
        if (hoxton.timer) { clearTimeout(hoxton.timer) }
        hoxton.timer = setTimeout(function () { window.location.reload() }, debounceRate)

    }

}



/*
* function gets the contents of an numeric array
*/
function getNumArrayData(arrTarget, strSource)
{
    var arr = strSource.split(",");

    if(arr.length === arrTarget.length)
    {
        for(var i = 0 ; i < arr.length; i++)
        {
            arr[i] = Number(arr[i].trim());
        }

        arrTarget = arr;
    }

    return arrTarget;
}


/*
* function gets the contents of an boolean array
*/
function getBoolArrayData(arrTarget, strSource)
{
    var arr = strSource.split(",");

    if(arr.length === arrTarget.length)
    {
        for(var i = 0 ; i < arr.length; i++)
        {
            if(arr[i].trim() == "true")
            {
                arr[i] = true;
            }
            else
            {
                arr[i] = false;
            }
        }
        arrTarget = arr;
    }

    return arrTarget;
}

/*
* function checks if number
*/
function isNumeric(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}


