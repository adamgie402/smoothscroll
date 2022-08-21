// get htmlcollection which has class smoothScrolling
let smoothScrollAnchors = document.getElementsByClassName('smoothScrolling');

//  iteration by htmlcollection and adding click event listener to everyone
for ( let i=0; i < smoothScrollAnchors.length; i++) {
    smoothScrollAnchors[i].addEventListener("click", smoothScroll, false);

    console.log(smoothScrollAnchors[i]);
}

function smoothScroll() {   
    // console.log('f smooth scroll...');
    // console.log(this);

    // *** setup
    let intervalSpeed = 5; // 1 - faster, 10 - slower
    let extraOffset = 0; // default: 0; this is optional; + and - values are allowed 
    // *** end of setup

    let href = this.getAttribute('href');        
    let p = href.indexOf("#"); // position of # in href addres
    let targetId = href.slice(p+1); // slice to only name of href (target id) 

    let targetY = document.getElementById(targetId).offsetTop; // get Y position of target anchor
    targetY = targetY + extraOffset;
    let currentY = window.scrollY; // current scroll Y position
    
    // console.log('currentY = ' + currentY + ' & targetY = ' + targetY);

    if (currentY < targetY) {            
        let scroolInterval = setInterval(function() {          
                window.scrollTo(0, currentY); // start scrolling from current position
                currentY += 25; // step - speed of movement (jump 200px)
                if (currentY > targetY) { 
                    clearInterval(scroolInterval); // stop interval = stop scrolling
                    window.scrollTo(0,targetY); // to precise position set after scrolling step by step
                };
        }, intervalSpeed);
    }
    
    if (currentY > targetY) {            
        let scroolInterval = setInterval(function() {          
                window.scrollTo(0, currentY); // start scrolling from current position
                currentY -= 25; // step - speed of movement (jump 200px)
                if (currentY < targetY) { 
                    clearInterval(scroolInterval); 
                    window.scrollTo(0,targetY); // to precise position set after scrolling step by step
                };
        }, intervalSpeed);
    }
}