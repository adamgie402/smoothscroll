// ***************************************
// Smooth Scrolling
// ***************************************

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

        scrollInterval = setInterval(function() {          
            window.scrollTo(0, currentY); // start scrolling from current position
            currentY += 25; // step - speed of movement (jump 200px)
            // console.log(scrollInterval);
            if (currentY > targetY) { 
                clearInterval(scrollInterval); // stop interval = stop scrolling
                window.scrollTo(0,targetY); // to precise position set after scrolling step by step
            };
        }, intervalSpeed);
    }
    
    if (currentY > targetY) {            

        scrollInterval = setInterval(function() {          
            window.scrollTo(0, currentY); // start scrolling from current position
            currentY -= 25; // move step-by-step by this value (25px give smooth scrooling)
            // console.log(scrollInterval);
            if (currentY < targetY) { 
                clearInterval(scrollInterval); 
                window.scrollTo(0,targetY); // to precise position set after scrolling step by step
            };
        }, intervalSpeed);
    }
}

// ***************************************