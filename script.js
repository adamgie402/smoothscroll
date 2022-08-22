// ***************************************
// Smooth Scrolling
// ***************************************
// use: add class "smoothScroll" to every link, which you want to be smooth-scrolled

window.onload = function(){
    console.log("f onload...");

    // get htmlcollection which has class smoothScrolling
    let smoothScrollAnchors = document.getElementsByClassName('smoothScrolling');

    //  iteration by htmlcollection and adding click event listener to everyone
    for ( let i=0; i < smoothScrollAnchors.length; i++) {
        smoothScrollAnchors[i].addEventListener("click", smoothScroll);
    }
}

function smoothScroll() {  
    console.log("f smoothscroll..."); 

    // *** setup
    let intervalSpeed = 6; // 1 - faster, 10 - slower
    let step = 50; // value between 25px and 45px give smooth scrolling effect
    let extraOffset = 0; // default: 0; this is optional; + and - values are allowed 
    // *** end of setup
    
    // e.preventDefault(); // prevent default html jump to target place (#target)
    // console.log(e);    
    // target anchor of clicked element:
    // console.log(e.target.hash);

    
    // Preventing many intervals in this same time:
    // Chceck for previous interval runing (if interval exist is always a number)
    // so, if it exist - use clearInterval(intervalName)
    // (you cannot use clearInterval if interval doesn't exist - error: is not defined)
    if (typeof scrollInterval == "number") { clearInterval(scrollInterval); }
    // if (typeof interval == "number") { clearInterval(interval); }
    

    
    let href = this.getAttribute('jshref'); // get anchor value (target id on page)      
    let p = href.indexOf("#"); // position of # in href addres
    let targetId = href.slice(p+1); // slice to only name of href (target id) 
    let targetY = document.getElementById(targetId).offsetTop; // get Y position of target anchor
    targetY = targetY + extraOffset;
    let currentY = window.scrollY; // current scroll Y position
    // console.log('currentY = ' + currentY + ' & targetY = ' + targetY);

    // select action
    if (currentY <= targetY) {
        // console.log('current=' + currentY + ', target=' + targetY);     
        scrollDown();
    } else { 
        scrollUp(); 
    }

    function scrollDown() {
        console.log('f scrolldown...');
        let steps = (targetY-currentY) / step;
        let i=1;
        console.log('current=' + currentY + ', target=' + targetY + ', steps-to-do=' + steps);
        scrollInterval = setInterval(function(){ // interval as a loop
            currentY = currentY + step;
            console.log("in loop... curentY=" + currentY); 
            window.scrollTo(0,currentY);
            i++;
            console.log(i);
            if (i>steps) { 
                clearInterval(scrollInterval);
                window.scrollTo(0,targetY); // to precise action set exactly target Y position
            }
        }, intervalSpeed);
    }        

    function scrollUp(){
        console.log("f scrollup");
        scrollInterval = setInterval(function() {  // interval loop - start step-by-step scrolling         
            currentY -= step; // decrease current Y position by step value (25px to 45px give smooth scrooling)
            window.scrollTo(0, currentY); // do sroll step to current Y
            if (currentY < targetY) {  // after achieve target Y position...
                clearInterval(scrollInterval); // ...stop interval = stop scrolling
                window.scrollTo(0,targetY); // to precise action set exactly target Y position
            }
        }, intervalSpeed);
    }

        

        // scrollInterval = setInterval(function() { // start step-by-step scrolling          
        //     currentY += 25; // increase current Y position by this value (25px give smooth scrooling)
        //     window.scrollTo(0, currentY); // do sroll step
        //     // console.log(scrollInterval);
        //     if (currentY > targetY) {  // after achieve target Y position 
        //         clearInterval(scrollInterval); // stop interval = stop scrolling
        //         // window.scrollTo(0,targetY); // to precise action set exactly target Y position
        //     };
        // }, intervalSpeed);


}
// ***************************************