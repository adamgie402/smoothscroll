// ***************************************
// Smooth Scrolling
// ***************************************
// use: add class "smoothScroll" to every link, which you want to be smooth-scrolled

// get htmlcollection which has class smoothScrolling
let smoothScrollAnchors = document.getElementsByClassName('smoothScrolling');

//  iteration by htmlcollection and adding click event listener to everyone
for ( let i=0; i < smoothScrollAnchors.length; i++) {
    smoothScrollAnchors[i].addEventListener("click", smoothScroll, false);
}

function smoothScroll(e) {   

    // *** setup
    let intervalSpeed = 5; // 1 - faster, 10 - slower
    let extraOffset = 0; // default: 0; this is optional; + and - values are allowed 
    // *** end of setup
    
    e.preventDefault(); // prevent default html jump to target place (#target)
    // console.log(e);    
    // target anchor of clicked element:
    // console.log(e.target.hash);

    // Preventing many intervals in this same time:
    // Chceck for previous interval runing (if interval exist is always a number)
    // so, if it exist - use clearInterval(intervalName)
    // (you cannot use clearInterval if interval doesn't exist - error: is not defined)
    if (typeof scrollInterval == "number") { clearInterval(scrollInterval); }

    // get anchor value (target id on page)
    let href = this.getAttribute('href');        
    let p = href.indexOf("#"); // position of # in href addres
    let targetId = href.slice(p+1); // slice to only name of href (target id) 

    let targetY = document.getElementById(targetId).offsetTop; // get Y position of target anchor
    targetY = targetY + extraOffset;
    let currentY = window.scrollY; // current scroll Y position
    
    // console.log('currentY = ' + currentY + ' & targetY = ' + targetY);

    if (currentY < targetY) {

        scrollInterval = setInterval(function() { // start step-by-step scrolling          
            currentY += 25; // increase current Y position by this value (25px give smooth scrooling)
            window.scrollTo(0, currentY); // do sroll step
            // console.log(scrollInterval);
            if (currentY > targetY) {  // after achieve target Y position 
                clearInterval(scrollInterval); // stop interval = stop scrolling
                window.scrollTo(0,targetY); // to precise action set exactly target Y position
            };
        }, intervalSpeed);
    }
    
    if (currentY > targetY) {            

        scrollInterval = setInterval(function() {          
            currentY -= 25; 
            window.scrollTo(0, currentY); 
            if (currentY < targetY) { 
                clearInterval(scrollInterval); 
                window.scrollTo(0,targetY);
            };
        }, intervalSpeed);
    }
}

// ***************************************