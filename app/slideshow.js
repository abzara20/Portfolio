var slideNum = 0; 
slideDisplay();
function slideDisplay(controlVal) {

    //collects all the images and puts into an array
    var slideDeck = document.getElementsByClassName("slide-image");
    // hides the images
    for(let i=0; i <slideDeck.length; i++) {
       slideDeck[i].style.display = "none";
    //    console.log("testing")
    }
    
    //reset the slide number when it grows over the length of array
    if(slideNum >= slideDeck.length){
        slideNum = 0;
    }

    slideDeck[slideNum].style.display ="block";
    setTimeout(slideDisplay, 8000); //changes slide every 6s
    slideNum++
}