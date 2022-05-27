// HERO DESTINY PAGE ANIMATION

var tl3 = gsap.timeline({defaults:{duration:.6,ease: Power2.easeOut, opacity:0}})

tl3.from('.left',{duration:.8,delay:.5,scaleX:0,transformOrigin:'left'})
    .from('.title',{})
    .from('.gsap-text',{})
    .from('.right',{duration:.8,scaleX:0,transformOrigin:'right'})
    .from('.butterfly-svg',{})
    .from('.phrase',{})


// SCROLL ANIMATION

var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: ".destiny-options-section",
            ease: Power2.easeOut,
            start: "center bottom"
        }
    })

    tl4.from('.scroll-item',{opacity:0,y:200, duration:1.5})