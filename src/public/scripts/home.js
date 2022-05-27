// LINE SVG SCROLL ANIMATION

let path = document.querySelector('path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {

    //What % down is it?
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    //Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;

    // Draw in reverse+
    path.style.strokeDashoffset = pathLength - drawLength;

})

// GSAP HERO ANIMATION

var tl1 = gsap.timeline({defaults:{duration:.8, ease: Power2.easeOut, opacity:0}});

tl1.from('.gsap-left-hero',{delay:.5,scaleX:0, transformOrigin:'left'})
  .from('.gsap-hero-title',{duration:.6})
  .from('.gsap-hero-text',{duration:.6})
  .from('.gsap-right-hero',{scaleX:0,transformOrigin:'right'})
  .from('.gsap-hero-subtitle',{duration:.6})
  .from('.gsap-hero-list',{duration:.6})
  .from('.gsap-hero-button',{ease:Back.easeOut.config(2)})


// GSAP SCROLL ANIMATION

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".activities-section",
        ease: Power2.easeOut,
        start: "center bottom"
    }
})

    tl2.from('.activity-item-right',{x: 100,opacity: 0, duration:1.5})
        .from('.activity-item-left',{x: -100, opacity:0, duration:1.5},"-=1.5")
