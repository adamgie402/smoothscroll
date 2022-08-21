// get htmlcollection which has class smoothScrolling
let smoothScrollAnchors = document.getElementsByClassName('smoothScrolling');

//  iteration by htmlcollection and adding click event listener to everyone
for ( let i=0; i < smoothScrollAnchors.length; i++) {
    smoothScrollAnchors[i].addEventListener("click", smoothScroll, false);

    console.log(smoothScrollAnchors[i]);
}

function smoothScroll() {}