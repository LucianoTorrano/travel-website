// ABOUT PAGE HERO ANIMATION

var tl1 = gsap.timeline({defaults:{duration:.6,ease: Power2.easeOut, opacity:0}})

tl1.from('.left',{duration:.8,delay:.5,scaleX:0,transformOrigin:'left'})
    .from('.title',{})
    .from('.gsap-text',{})
    .from('.right',{duration:.8,scaleX:0,transformOrigin:'right'})
    .from('.phrase',{})


// SCROLL ANIMATION

var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".recomendation",
            ease: Power2.easeOut,
            start: "center bottom"
        }
    })

tl2.from('.scroll-item',{opacity:0,y:100, duration:1.5})